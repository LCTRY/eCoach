import {useState} from 'react'
import {createEvent} from '../features/events/eventSlice'
import {useDispatch, useSelector} from 'react-redux'

function EventForm () {

    const dispatch = useDispatch()

    const [event, setEvent] = useState({
        eventName: "",
        description: "",
        startDate: "",
        endDate: "",
        startTime: "",
        endTime: "",
        location: "",
        eventType: ""
    })

    const {user} = useSelector((state) => state.auth)

    const {eventName, 
        description,
        startDate, 
        endDate, 
        startTime, 
        endTime, 
        location, 
        eventType, 
        } = event

    const onSubmit = (e) => {
        e.preventDefault()
          const eventData = {
            eventName, 
            description,
            startDate, 
            endDate, 
            startTime, 
            endTime, 
            location, 
            eventType, 
        }

        dispatch(createEvent(eventData))
    }

    const onChange = (e) => {
        setEvent((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    return (
        <>
            <section className='heading'>
                <h1>Create Event</h1>
            </section>
            <section className="form">
                <form onSubmit={onSubmit}>
                    <div className='form-group'>
                        <label> Event type: 
                            <select 
                                className='form-control'
                                id='eventType'
                                name='eventType'
                                value={eventType}
                                onChange={onChange}>
                                <option> Event Type</option>
                                <option value="Practice">Practice</option>
                                <option value="Game">Game</option>
                                <option value="Event">Event</option>
                            </select> 
                        </label>
                        <label> Event Name
                            <input className='form-control' 
                                type='text'
                                id='eventName'
                                name='eventName'
                                value={eventName}
                                placeholder='Enter Name'
                                onChange={onChange}/>
                        </label>
                        <label> Description
                            <input className='form-control' 
                                type='text'
                                id='description'
                                name='description'
                                value={description}
                                placeholder='Enter Description'
                                onChange={onChange}/>
                        </label>
                        <label> Location
                            <input className='form-control' 
                                type='text'
                                id='location'
                                name='location'
                                value={location}
                                placeholder='Enter location'
                                onChange={onChange}/>
                        </label>
                        <div className='addEvent__timeGroup'>
                            <label> Start date
                                <input className='form-control' 
                                    type='date'
                                    id='startDate'
                                    name='startDate'
                                    value={startDate}
                                    onChange={onChange}/>
                            </label>

                            <label> Start time
                                <input className='form-control' 
                                    type='time'
                                    id='startTime'
                                    name='startTime'
                                    value={startTime}
                                    onChange={onChange}/>
                            </label>
                        </div>
                        <div className='addEvent__timeGroup'>
                            <label> End date
                                <input className='form-control' 
                                    type='date'
                                    id='endDate'
                                    name='endDate'
                                    value={endDate}
                                    onChange={onChange}/>
                            </label>
                            <label> End time
                                <input className='form-control' 
                                    type='time'
                                    id='endTime'
                                    name='endTime'
                                    value={endTime}
                                    onChange={onChange}/>
                            </label>
                        </div>
                       </div>
                       <div className='form-group'>
                            <button type='submit' className='btn btn-block'>Submit</button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default EventForm