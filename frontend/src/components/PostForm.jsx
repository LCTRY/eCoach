import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {createPost} from '../features/posts/postSlice'


function PostForm() {
    const [postData, setPostData] = useState({
        title: '',
        body: '',
        Author: ''
    })

    const dispatch = useDispatch ()
    const {user} = useSelector((state) => state.auth)
    const { title, body} = postData

    const post = useSelector((state) => state.post)

    const onChange = (e) => {
        setPostData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()

        const postData = {
            title,
            body,
            author: user.name
        }

        dispatch(createPost(postData))

    }

    return (
        <>
            <section className="form">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input className='form-control'
                            type='text'
                            id='title'
                            name='title'
                            value={title}
                            placeholder="Enter title"
                            onChange={onChange}/>
                        <textarea className='form-control'
                            type='textarea'
                            id='body'
                            name='body'
                            value={body}
                            placeholder="Post Message here"
                            onChange={onChange}/>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn">
                            Post Message
                        </button>
                    </div>

                </form>
            </section>
        </>
    )
}

export default PostForm