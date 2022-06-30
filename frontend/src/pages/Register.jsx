import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { FaUser } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {register, reset} from '../features/auth/authSlice'
import Spinner from '../components/Spinner'


function Register () {
    const [registerFormData, setRegisterFormData] = useState({
        first_name: '',
        last_name:'',
        password:'',
        password2:'',
        email: '',
        userType: ''
    })

    const { first_name, last_name, password, password2, email, userType} = registerFormData
    
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth)
   
    useEffect(() => {
        if (isError){
            toast.error(message)
        }

        if (isSuccess || user) {
            navigate('/')
        }
        
        dispatch(reset())
        
    }, [user, isError, isSuccess, message, navigate, dispatch])

    const onChange = (e) => {
        setRegisterFormData((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }))
      }

    const onSubmit = (e) => {
        e.preventDefault()

        if(password !== password2) {
            toast.error('Passwords do not match')
        } else {
            const userData = {
                first_name,
                last_name,
                email,
                password,
                userType
            }
            dispatch(register(userData))
        }
    }
 
    if (isLoading) {
        return <Spinner/>
    }

    return (
        <>

            <section className='heading'>
                <h1>
                    <FaUser /> Register
                </h1>
                <p>Please create an account</p>
            </section>

            <section className='form'>
                <form onSubmit={onSubmit}>
                    <div className='form-group'>
                        <input 
                            type='text' 
                            className='form-control'
                            id='first_name'
                            name='first_name'
                            value={first_name}
                            placeholder = 'Enter your first name'
                            onChange={onChange}
                        />
                        <input 
                            type="text" 
                            className='form-control'
                            id='last_name'
                            name='last_name'
                            value={last_name}
                            placeholder='Enter you last name'
                            onChange={onChange}
                        />
                        <input 
                            type='password'
                            className='form-control'
                            id='password'
                            name='password'
                            value={password}
                            placeholder='Enter password'
                            onChange={onChange}
                        />
                        <input 
                            type='password' 
                            className='form-control'
                            id='password2'
                            name='password2'
                            value={password2}
                            placeholder="Repeat password"
                            onChange={onChange}                
                        />
                        <input type='email' className='form-control'
                            id='email'
                            name='email'
                            value={email}
                            placeholder="Enter your email"
                            onChange={onChange}                
                        />
                        <select 
                            className='form-control'
                            id='userType'
                            name='userType'
                            onChange={onChange}>
                            <option> Select role</option>
                            <option value="Manager">Manager</option>
                            <option value="Coach">Coach</option>
                            <option value="Player">Player</option>
                        </select> 
                    </div>
                    <div className='form-group'>
                        <button type='submit' className='btn btn-block'>Submit</button>
                    </div>
                </form>
            </section>
        </>
        
    )
}

export default Register