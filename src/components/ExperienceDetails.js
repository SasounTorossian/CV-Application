import React from 'react'
import { TextField } from '@material-ui/core'
import { Link } from 'react-router-dom'

const ExperienceDetails = ({values, handleChange, addExp, inputMessage}) => {
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
                                    label={`Company-${idx+1}`}
                                    value={values.experience[idx].company} 
                                    onBlur={handleChange}
                                    inputProps={{ "data-id": idx, "data-field-type": "company" }}
                                    error={values.experience[idx].companyError}
                                    helperText={inputMessage(values.experience[idx].companyError)}
                                />   

                                <br />
                                <br />

                                <TextField 
                                    type="text"
                                    label={`Role-${idx+1}`}
                                    value={values.experience[idx].role} 
                                    onBlur={handleChange}
                                    inputProps={{ "data-id": idx, "data-field-type": "role" }}
                                    error={values.experience[idx].roleError}
                                    helperText={inputMessage(values.experience[idx].roleError)}
                                />   

                                <br />
                                <br /> 

                                <TextField 
                                    type="date"
                                    label={`Start Date-${idx+1}`}
                                    value={values.experience[idx].startDateExp} 
                                    onBlur={handleChange}
                                    inputProps={{ "data-id": idx, "data-field-type": "startDateExp" }}
                                    InputLabelProps={{ shrink: true }}
                                    error={values.experience[idx].startDateExpError}
                                    helperText={inputMessage(values.experience[idx].startDateExpError)}
                                />   

                                <br />
                                <br /> 

                                <TextField 
                                    type="date"
                                    label={`End Date-${idx+1}`}
                                    value={values.experience[idx].endDateExp} 
                                    onBlur={handleChange}
                                    inputProps={{ "data-id": idx, "data-field-type": "endDateExp" }}
                                    InputLabelProps={{ shrink: true }}
                                    error={values.experience[idx].endDateExpError}
                                    helperText={inputMessage(values.experience[idx].endDateExpError)}
                                />   

                                <br />
                                <br />   

                                <TextField 
                                    type="text"
                                    label={`Details of job-${idx+1}`}
                                    value={values.experience[idx].details} 
                                    onBlur={handleChange}
                                    inputProps={{ "data-id": idx, "data-field-type": "details" }}
                                    multiline
                                    rows={5}
                                    error={values.experience[idx].detailsError}
                                    helperText={inputMessage(values.experience[idx].detailsError)}
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