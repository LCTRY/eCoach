import { useDispatch } from "react-redux"
import {deletePost} from '../features/posts/postSlice'

function PostItem ({post}) {
    var options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour:"numeric", minute:"numeric" };
    const dispatch = useDispatch()
    return (
        <div className="post">
            <div>{new Date(post.createdAt).toLocaleString('en-US', options)}</div>
            <button className="close" onClick={() => dispatch(deletePost(post._id))} > X </button>    
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    )
}

export default PostItem