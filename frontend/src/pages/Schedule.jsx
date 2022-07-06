import React from 'react'
import { useState } from 'react'
import Calendar from '../components/Calendar'
import EventForm from '../components/EventForm'
import EventList from '../components/EventList'


function Schedule () {

    const [view, setView] = useState("calendar")
    const changeView = (view) => {
        setView(view)
    }

    return (
        <>  
        <header className='schedule__header'>
                <p onClick={() => changeView("calendar")}> Calendar View</p>
                <p onClick={() => changeView("listView")}> List View </p>
                <p onClick={() => changeView("addEvent")}> Add Event </p>
        </header>
        {view === "calendar" ? <Calendar/> : view === "listView" ? <EventList/> :  <EventForm/>}
            
        </>
    )
}

export default Schedule