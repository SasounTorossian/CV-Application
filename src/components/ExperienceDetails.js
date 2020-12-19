import React from 'react'
import { TextField } from '@material-ui/core'
import { Link } from 'react-router-dom'

const ExperienceDetails = ({values, handleChange, addExp}) => {
    const addExperience = (e) => { 
        e.preventDefault() 
        addExp()
    }

    return (
        <div>
            <h1>Experience Details</h1>
            <form noValidate autoComplete="off" onChange={handleChange}>
                {
                    values.experience.map((val, idx) => {
                        return (
                            <div key={idx}>
                                <TextField 
                                    type="text"
                                    label={`Company #${idx+1}`}
                                    value={values.experience[idx].company} 
                                    inputProps={{ "data-id": idx, "data-field-type": "company" }}
                                />   

                                <br />
                                <br />

                                <TextField 
                                    type="text"
                                    label={`Role #${idx+1}`}
                                    value={values.experience[idx].role} 
                                    inputProps={{ "data-id": idx, "data-field-type": "role" }}
                                />   

                                <br />
                                <br /> 

                                <TextField 
                                    type="date"
                                    label={`Start Date #${idx+1}`}
                                    value={values.experience[idx].startDateExp} 
                                    inputProps={{ "data-id": idx, "data-field-type": "startDateExp" }}
                                    InputLabelProps={{ shrink: true }}
                                />   

                                <br />
                                <br /> 

                                <TextField 
                                    type="date"
                                    label={`End Date #${idx+1}`}
                                    value={values.experience[idx].endDateExp} 
                                    inputProps={{ "data-id": idx, "data-field-type": "endDateExp" }}
                                    InputLabelProps={{ shrink: true }}
                                />   

                                <br />
                                <br />   

                                <TextField 
                                    type="text"
                                    label={`Details of job #${idx+1}`}
                                    value={values.experience[idx].details} 
                                    inputProps={{ "data-id": idx, "data-field-type": "details" }}
                                    multiline
                                    rows={5}
                                />   

                                <br />
                                <br />   
                            </div>
                        )
                    })
                }
                <button onClick={addExperience}>Add new experience</button>
                <Link to="/education"><button>Prev Page</button></Link>
                <Link to="/confirm"><button>Next Page</button></Link>
            </form>
        </div>
    )
} 

export default ExperienceDetails