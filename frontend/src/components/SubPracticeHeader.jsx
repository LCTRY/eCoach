import { Link } from 'react-router-dom'

function SubPracticeHeader () {
    return (
        <>
        <header className='header'>
            <ul>
                    <div className='menu'> 
                        <Link to = '/practiceForm'> Create Practice </Link>
                    </div>
                    <div className='menu'> 
                        <Link to = '/drillsForm'> Create Drill </Link>
                    </div>
                    <div className='menu'> 
                        <Link to = '/drillsList'> View Drills </Link>
                    </div>        
            </ul>
        </header>
        </>

    )
}

export default SubPracticeHeader