const asyncHandler =require('express-async-handler')
const Practice = require ('../models/practiceModel')

//  @desc      get practice
//  @route     GET /api/practice
//  @access    private
const getPractice = asyncHandler(async(req, res) => {
    const practice = await Practice.findById(req.params.id)
    if(!practice) {
        res.status(400)
        throw new Error("practice not found")
    }

    res.status(200).json(practice)
})

//  @desc      get all practice
//  @route     GET /api/practice
//  @access    private
const getAllPractices = asyncHandler(async(req, res) => {
    const allPractices = await Practice.find()
    res.status(200).json(allPractices)
})

//  @desc      create practice
//  @route     POST /api/practice
//  @access    private
const createPractice = asyncHandler(async(req, res) => {
    const {date, createdBy, team, drills} = req.body 

    if (!date || !createdBy) {
        res.status(400)
        throw new Error('Missing information')
    }

    const practice = await Practice.create({
        date, 
        createdBy, 
        team, 
        drills
    })

    if(practice) {
        res.status(201).json({
            _id: practice.id,
            date: practice.date,
            createdBy: practice.createdBy
        })
    } else {
        res.status(400)
        throw new Error("invalid practice")
    }
})

//  @desc      delete practice
//  @route     DELETE /api/practice
//  @access    private
const deletePractice = asyncHandler(async(req, res) => {
    const practice = await Practice.findById(req.params.id)

    if(!practice) {
        res.status(400)
        throw new Error("Practice not found")
    }

    await practice.remove()

    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getPractice,
    getAllPractices,
    createPractice,
    deletePractice
}