import { useState } from "react"
import {Card} from './Card'

export const StudentForm = () => {

    const [student, setStudent] = useState({
        name: "",
        dni: ""
    })
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)

    let regex = /\s/g;

    const handleChange = (event) => {
        const { name, value } = event.target

        setStudent(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleNameError = () => {
        if (regex.test(student.name) || student.name.length < 3) {
            setError(true)
            setSuccess(false)
        } else {
            setError(false)
            setSuccess(true)
        }
    }

    const handleDniError = () => {
        if (student.dni.length < 6) {
            setError(true)
            setSuccess(false)
        } else {
            setError(false)
            setSuccess(true)
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        

        handleNameError()
        handleDniError()
    }

    return (

        <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>

            <form onSubmit={(e) => handleSubmit(e)} style={{ display: "flex", flexDirection: "column" }}>

                <label htmlFor="">Nombre</label>
                <input type="text" name="name" value={student.name} onChange={handleChange} />

                <label htmlFor="">DNI</label>
                <input type="number" name="dni" value={student.dni} onChange={handleChange} />

                <button type="submit" style={{ marginTop: "15px" }}>Submit</button>

            </form>

            {
                error
                    ? <span style={{ backgroundColor: "#ff000066", color: "white", padding: 5, borderRadius: 15 }}>
                        There are some errors, please check your answers
                    </span>
                    : ""
            }
            {
                success 
                ? <Card props={student}/> 
                : ""
            }

        </div>


    )
}
