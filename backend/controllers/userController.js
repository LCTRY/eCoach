const asyncHandler = require('express-async-handler')
const User = require('../models/usersModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

//  @desc      get users
//  @route     GET /api/users
//  @access    Private
const getUsers = asyncHandler(async(req, res) => {
    const users = await User.find()
    res.status(200).json(users)
})

//  @desc      post user
//  @route     POST /api/users
//  @access    Private
const registerUser = asyncHandler(async(req, res) => {
    const {first_name, last_name, password, email, userType} = req.body
    
    if (!first_name || !last_name || !password || !email || !userType) {
        res.status(400)
        throw new Error ('Missing information')
    }

    const userExist = await User.findOne({email})
    if (userExist) {
        res.status(400)
        throw new Error ('User already exists')
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await User.create({
        first_name,
        last_name,
        password: hashedPassword,
        email,
        userType        
    })

        if(user){
            res.status(201).json({
                _id: user.id,
                name: `${user.first_name} ${user.last_name}`,
                email: user.email,
                token: generateToken(user._id)
            })
        } else {
            res.status(400)
            throw new Error ('invalid user data')
        }
        
    })

//  @desc      get users
//  @route     GET /api/users
//  @access    Private
const loginUser = asyncHandler(async(req, res) => {
    const {email, password} = req.body
    //check if user exists
    const userExists = await User.findOne({email})
    //check user and password
    if (userExists && (await bcrypt.compare(password, userExists.password))) {
        res.json({
            _id: userExists.id,
            name: `${userExists.first_name} ${userExists.last_name}`,
            email: userExists.email,
            token: generateToken(userExists._id)
        })
    } else {
        res.status(400)
        throw new Error("Invalid User email and password")
    }
})

//  @desc      update user
//  @route     PUT /api/users
//  @access    Private
const updateUser = asyncHandler(async(req, res) => {
    // findbyid and check if exists
    const user = await User.findById(req.params.id)
    if (!user) {
        res.status(400)
        throw new Error('User not found')
    }
    // findbyidandupdate update
    const updateUser = await User.findByIdAndUpdate(req.params.id, req.body,
        {
            new: true,
        })
    // return status code and results
    res.status(200).json(updateUser)

    })

//  @desc      delete user
//  @route     DELETE /api/users
//  @access    Private
const deleteUser = asyncHandler(async(req, res) => {
    const foundUser = await User.findById(req.params.id)
    if (!foundUser) {
        res.status(400)
        throw new Error("user not found")
    }
    await foundUser.remove()

    res.status(200).json({
        message: `User ${req.params.id} was removed`
    })
    })

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {expiresIn: '30d', })
}

module.exports = {
    getUsers,
    registerUser,
    loginUser,
    updateUser,
    deleteUser
}