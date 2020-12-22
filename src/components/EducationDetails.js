import React from 'react'
import { TextField } from '@material-ui/core'
import { Link } from 'react-router-dom'

const EducationDetails = ({values, handleChange, addEdu, inputMessage}) => {
    const addEducation = (e) => { 
        e.preventDefault() 
        addEdu()
    }
        
    return (
        <div>
            <h1>Education Details</h1>
            <form noValidate autoComplete="off" onChange={handleChange}>
                {
                    values.education.map((val, idx) => {
                        return (
                            <div key={idx}>
                                <TextField 
                                    type="text"
                                    label={`School-${idx+1}`}
                                    value={values.education[idx].school} 
                                    onBlur={handleChange}
                                    inputProps={{ "data-id": idx, "data-field-type": "school" }}
                                    error={values.education[idx].schoolError}
                                    helperText={inputMessage(values.education[idx].schoolError)}
                                />  

                                <br />
                                <br />

                                <TextField 
                                    type="text"
                                    label={`Course-${idx+1}`}
                                    value={values.education[idx].course} 
                                    onBlur={handleChange}
                                    inputProps={{ "data-id": idx, "data-field-type": "course" }}
                                    error={values.education[idx].courseError}
                                    helperText={inputMessage(values.education[idx].courseError)}
                                />   

                            
                                <br />
                                <br />
                                
                                <TextField 
                                    type="date"
                                    label={`Start Date-${idx+1}`}
                                    value={values.education[idx].startDateEdu} 
                                    onBlur={handleChange}
                                    inputProps={{ "data-id": idx, "data-field-type": "startDateEdu" }}
                                    InputLabelProps={{ shrink: true }}
                                    error={values.education[idx].startDateEduError}
                                    helperText={inputMessage(values.education[idx].startDateEduError)}
                                />   

                                <br />
                                <br />

                                <TextField 
                                    type="date"
                                    label={`End Date-${idx+1}`}
                                    value={values.education[idx].endDateEdu}
                                    onBlur={handleChange}
                                    inputProps={{ "data-id": idx, "data-field-type": "endDateEdu" }}
                                    InputLabelProps={{ shrink: true }}
                                    error={values.education[idx].endDateEduError}
                                    helperText={inputMessage(values.education[idx].endDateEduError)}
                                />   

                                <br />
                                <br /> 
                            </div>
                        )
                    })
                }
                <button onClick={addEducation}>Add new education</button>
                <Link to="/personal"><button>Prev Page</button></Link>
                <Link to="/experience"><button>Next Page</button></Link>
            </form>
        </div>
    )
} 

export default EducationDetails