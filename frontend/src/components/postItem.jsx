import { useDispatch } from "react-redux"
import {deletePost} from '../features/posts/postSlice'

function PostItem ({post}) {
    var options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour:"numeric", minute:"numeric" };
    const dispatch = useDispatch()
    return (
        <div className="post">
            <div className="post__header">
            <h2>{post.title}</h2>
            <h5>
                {new Date(post.createdAt).toLocaleString('en-US', options)}
            </h5>
            </div>
            <p>{post.body}</p>
            <button className="close" onClick={() => dispatch(deletePost(post._id))} > X </button>    
        </div>
    )
}

export default PostItem