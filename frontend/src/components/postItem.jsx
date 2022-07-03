import { useDispatch } from "react-redux"
import {deletePost} from '../features/posts/postSlice'

function PostItem ({post}) {
    const dispatch = useDispatch()
    return (
        <div className="post">
            <div>{new Date(post.createdAt).toLocaleString('en-US')}</div>
            <button className="close" onClick={() => dispatch(deletePost(post._id))} > X </button>    
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    )
}

export default PostItem