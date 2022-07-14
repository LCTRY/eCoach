import SubPracticeHeader from "../components/SubPracticeHeader"
import {useState} from "react"

function DrillsForm () {
    const [drill, setDrill] = useState({
        drillName: "",
        createdBy: "",
        team: "",
        description: "",
        image: ""
    })

    const {
        drillName,
        createdBy,
        team,
        description,
        image
    } = drill

    const onChange = (e) => {
        setDrill((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
    }))
    }

    return (
        <>
            <SubPracticeHeader/>
            <section className="header">
                <h1> Create Drill</h1>
            </section>
            <section className="form">
                <form action="onSubmit">
                    <div className="form-group">
                        <label> Name
                            <input className="form-control"
                                type="text"
                                id="drillName"
                                name = "drillName"
                                value = {drillName}
                                onChange={onChange}
                                placeholder="drill name" /> 
                        </label>
                        <label> Description
                            <textarea className="form-control"
                            type="textarea"
                            id="description"
                            value={description}
                            onChange={onChange}
                            placeholder="drill discription"
                            />
                        </label>
                    </div>
                    <div>
                        <button type="submit" className="btn"> submit </button>
                    </div>


                </form>
            </section>
            
        </>
    )
}

export default  DrillsForm