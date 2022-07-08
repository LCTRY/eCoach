import React, {useState} from 'react'
import moment from "moment"
import { useEffect } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import {useSelector, useDispatch} from 'react-redux'
import SubScheduleHeader from '../components/SubScheduleHeader'
import {getEvents, reset} from '../features/events/eventSlice'
import { useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'

function Calendar () {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const [calendar, setCalendar] = useState([])
    const [value, setValue] = useState(moment())
    const dispatch = useDispatch()

    const startDay = value.clone().startOf("month").startOf("week")
    const endDay = value.clone().endOf("month").endOf("week")
    
    const {events} = useSelector((state) => state.events)

    useEffect ( () => {
        dispatch(getEvents())
      
        return () => {
          dispatch(reset())
        }
      
      }, [])
    
    useEffect(() => {
        const day = startDay.clone().subtract(1, "day")
        const a = []
        while (day.isBefore(endDay, "day")) {
            a.push(
                Array(7)
                    .fill(0)
                    .map(() => 
                        day.add(1,"day").clone())
            )
        }
        setCalendar(a)
    }, [value])

    useLayoutEffect (() => {
        events.map((event) => {
            const eventDay = (new Date(event.startDate).toLocaleDateString('en-US', {timeZone: 'UTC'}))
            const date_element = document.getElementById(eventDay)
            const entry_element = document.getElementById(event._id)
            if (entry_element) entry_element.remove()
            if (date_element) {
      
                const entry_container = document.createElement("div")
                entry_container.classList.add(event._id)
                entry_container.id = event._id
                date_element.appendChild(entry_container)
        
                const event_entry = document.createElement("div")
                const element = `
                                <p>${event.eventName}</p>
                                <p>(${event.startTime}-${event.endTime})</p>
                                `
                event_entry.innerHTML = element
                entry_container.appendChild(event_entry)
            }
        })
    })


    function currentMonth () {
        return value.format("MMMM")
    }
    function currentYear () {
        return value.format("YYYY")
    }
    
    function prevMonth() {
        return value.clone().subtract(1, "month")
    }
    function nextMonth() {
        return value.clone().add(1, "month")
    }

    return (
        <>
        <SubScheduleHeader/>
        <section className='calendar__header'>
            <h2>{currentMonth()} {currentYear()}</h2>
            <div className='calendar__controls'>
                <Link to="/eventForm"><button className='btn' > Add Event </button></Link>
                <button className='btn' onClick={() => setValue(prevMonth())}> <FaArrowLeft /> </button>
                <button className='btn' onClick={() => setValue(nextMonth())}> <FaArrowRight/> </button>
            </div>
        </section>
        <section className='calendar__container'>
            <div className='calendar__headings'>
                {daysOfWeek.map(day => (
                    <h3 key={day}>{day}</h3>
                ))}
            </div>
            <div className='calendar__week_field'>
                {calendar.map(week => (
                    week.map(day => (
                        <div key={day} 
                            id= {day.format("M").toString() + "/"+ day.format("D").toString() + "/"+   day.format("Y").toString()} 
                            onClick={() => setValue(day)}
                            className={value.isSame(day, "calendar__day_field day") ? "selected" : "calendar__day_field"}>
                                {day.format("D").toString()}
                        </div>
                    ))
                ))}

            </div> 
        </section>
        </>
        
    )
}

export default Calendar


