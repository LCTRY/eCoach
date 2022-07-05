
import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick

export default class Calendar extends React.Component {

  render() {
    return (
      <FullCalendar
        plugins={[ dayGridPlugin, interactionPlugin ]}
        dateClick={this.handleDateClick}
        events={[
            { title: 'event 1', start  : '2022-07-03T12:30:00', end : '2022-07-03T13:00:00', allDay : false },
            { title: 'event 2', date: '2022-07-04' },
            {
                title  : 'event3',
                start  : '2022-07-09T13:00:00',
                end    : '2022-07-09'
              }
          ]}
      />
    )
  }

  handleDateClick = (arg) => { // bind with an arrow function
    console.log(arg.dateStr)
  }

}