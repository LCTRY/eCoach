import axios from 'axios'

const API_URL = '/api/posts/'

//create post
const createPost = async (postData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    const response = await axios.post(API_URL, postData, config)

    return response.data
}

//get allpost
const getPosts = async () => {
    const response = await axios.get(API_URL)

    return response.data
}

//delete post
const deletePost = async (postId, token) => {
    const config = {
        header: {
            Authorization: `Bearer ${token}`,
        },
    }
    
    const response = await axios.delete(API_URL + postId, config)

    return response.data
}

const postServices = {
    createPost,
    getPosts,
    deletePost
}

export default postServices