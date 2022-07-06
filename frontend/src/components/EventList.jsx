import {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {getEvents, reset} from '../features/events/eventSlice'
import {useNavigate} from 'react-router-dom'
import EventItem from '../components/EventItem'

function EventList () {
    const headingList = ["Type", "Event", "Description", "Location", "Start", "End", " "]

    const dispatch = useDispatch()
 
    const {events} = useSelector((state) => state.events)
  
    useEffect ( () => {
      dispatch(getEvents())
    
      return () => {
        dispatch(reset())
      }
    
    }, [])
    
    return (
        <>
            <section className="heading">
                <h1>Team Events</h1>
            </section>
            <div className='event__headings'>
                        {headingList.map(heading => (
                          <div key={heading}>
                                <h3 key={heading}>{heading}</h3>
                          </div>
                        ))}
                    </div>
            <section className='events__containter'>
              {events.length > 0 ? 
                      (
                      <div className='events'>
                          {events.map((event) => (
                              <EventItem key={event._id} event = {event} />
                              )
                          )}
                      </div>
                      ) 
                  : 
                      (<h3> No events </h3>)
                  }
            </section>
        </>
    )
}

export default EventList