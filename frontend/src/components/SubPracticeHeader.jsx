import { Link } from 'react-router-dom'

function SubPracticeHeader () {
    return (
        <>
        <header className='header'>
            <ul>
                    <div className='menu'> 
                        <Link to = '/calendar'> Create Practice </Link>
                    </div>
                    <div className='menu'> 
                        <Link to = '/eventList'> Create Drill </Link>
                    </div>
                    <div className='menu'> 
                        <Link to = '/eventForm'> View Practice Plans </Link>
                    </div>        
            </ul>
        </header>
        </>

    )
}

export default SubPracticeHeader