import React from 'react'
import { TextField, Typography, Button } from '@material-ui/core'
import {ArrowForward, ArrowBack, Add} from '@material-ui/icons';
import { Link } from 'react-router-dom'

const ExperienceDetails = ({values, handleChange, addExp}) => {
    const addExperience = (e) => { 
        e.preventDefault() 
        addExp()
    }

    return (
        <div>
            <Typography variant="h4">
                Experience Details
            </Typography>
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
                                    error={!!values.experience[idx].companyError && values.experience[idx].companyError.length > 1}
                                    helperText={values.experience[idx].companyError}
                                />   

                                <br />
                                <br />

                                <TextField 
                                    type="text"
                                    label={`Role-${idx+1}`}
                                    value={values.experience[idx].role} 
                                    onBlur={handleChange}
                                    inputProps={{ "data-id": idx, "data-field-type": "role" }}
                                    error={!!values.experience[idx].roleError && values.experience[idx].roleError.length > 1}
                                    helperText={values.experience[idx].roleError}
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
                                    error={!!values.experience[idx].startDateExpError && values.experience[idx].startDateExpError.length > 1}
                                    helperText={values.experience[idx].startDateExpError}
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
                                    error={!!values.experience[idx].endDateExpError && values.experience[idx].endDateExpError.length > 1}
                                    helperText={values.experience[idx].endDateExpError}
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
                                    error={!!values.experience[idx].detailsError && values.experience[idx].detailsError.length > 1}
                                    helperText={values.experience[idx].detailsError}
                                />   

                                <br />
                                <br />   
                            </div>
                        )
                    })
                }
                <Button 
                    onClick={addExperience}
                    variant="contained" 
                    color="primary"
                    endIcon={<Add />}
                >
                    Add new education
                </Button>

                <br />
                <br />  

                <Link 
                    to="/education"
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
                    to="/confirm"
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

export default ExperienceDetails