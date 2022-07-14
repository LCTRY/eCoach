import React from 'react'
import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import PostForm  from '../components/PostForm'
import Spinner from '../components/Spinner'
import {getPosts, reset} from '../features/posts/postSlice'
import PostItem from '../components/postItem'


function Dashboard() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user} = useSelector((state) => state.auth)
    const {posts, isLoading, isError, message} = useSelector((state) => 
        state.posts)

    useEffect(() => {
        if (isError) {
          console.log(message)
        }
    
        if (!user) {
          navigate('/login')
        }
    
        dispatch(getPosts())
    
        return () => {
          dispatch(reset())
        }
      }, [user, navigate, isError, message, dispatch])

    return (
        <>
            <section className='heading'>
                {!user ? 
                    (
                        <h1>Welcome</h1>
                    ) 
                : 
                    (
                        <h1>Welcome {user.first_name} to the {user.teams[0].teamName} </h1>
                    )}
                
            </section>
            <section className='content'>
                {posts.length > 0 ? 
                    (
                    <div className='posts'>
                        {posts.map((post) => (
                            <PostItem key={post._id} post = {post} />
                            )
                        )}
                    </div>
                    ) 
                : 
                    (<h3> No updates </h3>)
                }
            </section>
            <PostForm/>
        </>
    )
}

export default Dashboard