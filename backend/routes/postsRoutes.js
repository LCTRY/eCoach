const express = require('express')
const router = express.Router()
const {
    getPosts,
    getAllTeamPosts,
    createPost,
    deletePost,
    // updatePost
} = require('../controllers/postController')

router.get('/', getPosts)
router.get('/:teamName', getAllTeamPosts)
router.post('/', createPost)
router.delete('/:id', deletePost)
// router.put('/:id', updatePost)

module.exports =router