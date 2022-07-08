import { Link } from 'react-router-dom'

function SubScheduleHeader () {
    return (
        <>
        <header className='header'>
            <ul>
                    <div className='menu'> 
                        <Link to = '/calendar'> Calander </Link>
                    </div>
                    <div className='menu'> 
                        <Link to = '/eventList'> List </Link>
                    </div>
                    <div className='menu'> 
                        <Link to = '/eventForm'> Add Event </Link>
                    </div>        
            </ul>
        </header>
        </>

    )
}

export default SubScheduleHeader