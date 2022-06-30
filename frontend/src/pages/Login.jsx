import React from "react"
import {FaSignInAlt} from 'react-icons/fa'
import {useState, useEffect} from "react"
import {useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import Spinner from '../components/Spinner'
import {toast} from 'react-toastify'
import {login, reset} from '../features/auth/authSlice'

function Login () {
    const [formData, setFormData] = useState({
        email: '' ,
        password:'',
    })

    const onChange = (e) => {
        setFormData((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }))
      }

    const onSubmit = (e) => {
        e.preventDefault()

        const userData = {
            email,
            password
        }

        dispatch(login(userData))
    }

    const { email, password} = formData
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth)

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }
        if (isSuccess || user) {
            navigate('/')
        }

        dispatch(reset())
    }, [user, isError, isSuccess, message, navigate, dispatch])

    if (isLoading) {
        return <Spinner/>
    }

    return (
        <>
            <section className='heading'>
                <h1>
                    <FaSignInAlt />  Login
                </h1>
                <p>Please login</p>
            </section>
            <section className='form'>
                <form onSubmit={onSubmit}>
                    <div className='form-group'>
                        <input type='email' className='form-control'
                            id='email'
                            name='email'
                            value={email}
                            placeholder="Enter email"
                            onChange={onChange}                
                        />
                        <input type='password' className='form-control'
                            id='password'
                            name='password'
                            value={password}
                            placeholder="Enter password"
                            onChange={onChange}                
                        />
                    </div>
                    <div className='form-group'>
                        <button type='submit' className='btn btn-block'>Login</button>
                    </div>
                </form>
            </section>
        </>
        
    )
}

export default Login