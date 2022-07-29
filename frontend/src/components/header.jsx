import React from 'react'
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'
import { useState, useEffect } from 'react'

function Header () {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {user} = useSelector((state) => state.auth) 
    const [userTeamsList, setuserTeamsList] = useState("")

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
      }
    
      useEffect( () => {
        if (user) {
            setuserTeamsList(user.teams)
        }
      }, [user])
    
    const SelectOptionItems = (({data}) => {
                return (
                    <option key={data._id}>
                        {data.teamName}
                    </option>
                )
            }
    )

    return (
        <>
        <header className='header'>
            {user && userTeamsList.length > 0 ? (
                <div className='logo'> 
                    <Link className= "logo__link" to = '/'>{user.teams[0].teamName}</Link>
                        <select >
                            <option> Change Teams</option>
                            {userTeamsList.map((data) => ( 
                                <SelectOptionItems key={data._id} data= {data} />  
                            ))}
                        </select>
                </div>
            ) : (
            <>
                <Link className= "logo__link" to = '/'>eCoach</Link>
            </>
            )}

            <ul>
                {user ? (  
                <>
                    <div className='menu'> 
                        <Link to = '/practiceForm'> Practice </Link>
                    </div>
                    <div className='menu'> 
                        <Link to = '/calendar'> Schedule </Link>
                    </div>
                    <button className='btn' onClick={onLogout}>
                            <FaSignOutAlt /> Logout
                    </button>
                </>                  
                ) : (
                <>                 
                    <li>
                        <Link to='/login'>
                            <FaSignInAlt /> Login
                        </Link>
                    </li>
                    <li>
                        <Link to='/register'>
                            <FaUser /> Register
                        </Link>
                    </li>
                </>)
                
                }
            </ul>
        </header>
        </>

    )
}

export default Header