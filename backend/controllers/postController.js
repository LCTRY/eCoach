const asyncHandler =require('express-async-handler')
const Post = require ('../models/postsModel')

//  @desc      get posts
//  @route     GET /api/posts
//  @access    private
const getPosts = asyncHandler(async(req, res) => {
    const posts = await Post.find()
    res.status(200).json(posts)
})
//  @desc      get all team posts
//  @route     GET /api/posts
//  @access    private
const getAllTeamPosts = asyncHandler(async(req, res) => {
    const posts = await Post.find({"teamName":req.body.teamName})
    res.status(200).json(posts)
})

//  @desc      create post
//  @route     GET /api/posts
//  @access    private
const createPost = asyncHandler(async(req, res) => {
    const {title, body, comments, author, teamID} = req.body 

    if (!title || !body || !author) {
        res.status(400)
        throw new Error('Missing information')
    }

    const post = await Post.create({
        title, 
        body, 
        comments, 
        author,
        teamID
    })

    if(post) {
        res.status(201).json({
            _id: post.id,
            title: post.title,
            body: post.body
        })
    } else {
        res.status(400)
        throw new Error("invalid post")
    }
})

//  @desc      delete post
//  @route     DELETE /api/posts
//  @access    private
const deletePost = asyncHandler(async(req, res) => {
    const post = await Post.findById(req.params.id)

    if(!post) {
        res.status(400)
        throw new Error("post not found")
    }

    // if (!req.user) {
    //     res.status(401)
    //     throw new Error('User not found')
    // }

    // if (goal.user.toString() !== req.user.id) {
    //     res.status(401)
    //     throw new Error('User not authorized')
    // }
    await post.remove()

    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getPosts,
    createPost,
    deletePost,
    getAllTeamPosts
}