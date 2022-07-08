import { useDispatch } from "react-redux"
import { deleteEvent } from '../features/events/eventSlice'

function EventItem ({event}) {
    var options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' };
    const dispatch = useDispatch()
    return (
        <div className="event__row">   
            <div><p>{event.eventType}</p></div>
            <div><p>{event.eventName}</p></div>
            <div><p>{event.description}</p></div>
            <div><p>{event.location}</p></div>
            <div><p>{new Date(event.startDate).toLocaleDateString('en-US', options)} at {event.startTime}</p></div>
            <div><p>{new Date(event.endDate).toLocaleDateString('en-US', options)} at {event.endTime}</p></div>
            <div><button className="btn" onClick={() => dispatch(deleteEvent(event._id))} > X </button> </div>
        </div>
    )
}

export default EventItem