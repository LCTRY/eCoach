import {useState} from 'react'
import {createEvent} from '../features/events/eventSlice'
import {useDispatch} from 'react-redux'
import SubPracticeHeader from '../components/SubPracticeHeader'

function PracticeForm () {
    const [userMessage, setUserMessage] = useState("")
    const [practice, setPractice] = useState({
        date: "",
        drills:
        [
            {
                id: "",
                drillName: ""
            }
        ]
    })

    const {date, drills} = practice

    const dispatch = useDispatch()


    const onSubmit = (e) => {
        e.preventDefault()

        setUserMessage(`New practice created`)
        setTimeout(() => {
            setUserMessage("")
        }, 5000)
  
    }

    const onChange = (e) => {
        setPractice((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    return (
        <>
            <SubPracticeHeader/>
            <section className='heading'>
                <h1>Create Practice Plan</h1>
            </section>
            <section className="form">
                <form onSubmit={onSubmit}>
                    <div className='form-group'>
                        <label> Practice date
                            <input className='form-control' 
                                type='date'
                                id='date'
                                name='date'
                                value={date}
                                onChange={onChange}/>
                        </label>
                        <label> Drills
                            <input className='form-control' 
                                type='drills'
                                id='drills'
                                name='drills'
                                value={drills}
                                onChange={onChange}/>
                        </label>
                       </div>
                       <div className='form-group'>
                            <button type='submit' className='btn btn-block'>Submit</button>
                    </div>
                    {userMessage && <div className="message">{userMessage}</div>}
                </form>
            </section>
        </>
    )
}

export default PracticeForm