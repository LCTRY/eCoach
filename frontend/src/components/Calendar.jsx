import React, {useState} from 'react'
import moment from "moment"
import { useEffect } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

function Calendar () {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    
    const [calendar, setCalendar] = useState([])
    const [value, setValue] = useState(moment())

    const startDay = value.clone().startOf("month").startOf("week")
    const endDay = value.clone().endOf("month").endOf("week")
    
    
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
            <div>
                <section className='calendar__header'>
                    <h2>{currentMonth()} {currentYear()}</h2>
                    <div className='calendar__controls'>
                        <button className='btn' > Add Event </button>
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
                                        id='calendar__day_field' 
                                        onClick={() => console.log(setValue(day))}
                                        className={value.isSame(day, "day") ? "selected" : ""}>
                                            {day.format("D").toString()}
                                    </div>
                                ))
                        ))}
                    </div> 
                </section>
            </div>
        </>
    )
}

export default Calendar