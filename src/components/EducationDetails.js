import React from 'react'
import { TextField, Typography, Button } from '@material-ui/core'
import {ArrowForward, ArrowBack, Add} from '@material-ui/icons';
import { Link } from 'react-router-dom'

const EducationDetails = ({values, handleChange, addEdu}) => {

    const addEducation = (e) => { 
        e.preventDefault() 
        addEdu()
    }
        
    return (
        <div>
            <Typography variant="h4">
                Education Details
            </Typography>
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
                                    error={!!values.education[idx].schoolError}
                                    helperText={values.education[idx].schoolError}
                                />  

                                <br />
                                <br />

                                <TextField 
                                    type="text"
                                    label={`Course-${idx+1}`}
                                    value={values.education[idx].course} 
                                    onBlur={handleChange}
                                    inputProps={{ "data-id": idx, "data-field-type": "course" }}
                                    error={!!values.education[idx].courseError}
                                    helperText={values.education[idx].courseError}
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
                                    error={!!values.education[idx].startDateEduError}
                                    helperText={values.education[idx].startDateEduError}
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
                                    error={!!values.education[idx].endDateEduError}
                                    helperText={values.education[idx].endDateEduError}
                                />   

                                <br />
                                <br /> 
                            </div>
                        )
                    })
                }
                <Button 
                    onClick={addEducation}
                    variant="contained" 
                    color="primary"
                    endIcon={<Add />}
                >
                    Add new education
                </Button>

                <br />
                <br />  

                <Link 
                    to="/personal"
                    style={{textDecoration: 'none'}}
                >
                    <Button
                        variant="contained" 
                        color="primary"
                        startIcon={<ArrowBack />}
                    >
                        Prev Page
                    </Button>
                </Link>
                <Link 
                    to="/experience"
                    style={{textDecoration: 'none'}}
                >
                    <Button
                        variant="contained" 
                        color="primary"
                        endIcon={<ArrowForward />}
                    >
                        Next Page
                    </Button>
                </Link>
            </form>
        </div>
    )
} 

export default EducationDetails