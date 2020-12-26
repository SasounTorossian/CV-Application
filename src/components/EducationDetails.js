import React from 'react'
import { makeStyles, Grid, TextField, Typography, Button } from '@material-ui/core'
import {ArrowForward, ArrowBack, Add, Delete} from '@material-ui/icons';
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const EducationDetails = ({values, handleChange, addEdu, removeEdu}) => {
    const classes = useStyles();

    const addEducation = (e) => { 
        e.preventDefault() 
        addEdu(e)
    }

    const removeEducation = (e) => { 
        e.preventDefault() 
        removeEdu(e)
    }
        
    return (
        <div>
            <Grid 
                container spacing={3} 
                direction="column" 
                alignItems="center" 
                justify="center"
                style={{ minHeight: '50vh' }}
            >
                <br />
                <br />

                <Grid item xs={6}>
                    <Typography variant="h4">
                        Education Details
                    </Typography>
                </Grid>
                <Grid item xs={6}
                    // alignItems="center" 
                    // justify="center"
                >
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
                                            error={!!values.education[idx].schoolError && values.education[idx].schoolError.length > 1}
                                            helperText={values.education[idx].schoolError}
                                        />  

                                        <br />

                                        <TextField 
                                            type="text"
                                            label={`Course-${idx+1}`}
                                            value={values.education[idx].course} 
                                            onBlur={handleChange}
                                            inputProps={{ "data-id": idx, "data-field-type": "course" }}
                                            error={!!values.education[idx].courseError && values.education[idx].courseError.length > 1}
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
                                            error={!!values.education[idx].startDateEduError && values.education[idx].startDateEduError.length > 1}
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
                                            error={!!values.education[idx].endDateEduError && values.education[idx].endDateEduError.length > 1}
                                            helperText={values.education[idx].endDateEduError}
                                        />   

                                        <br />

                                        <Button
                                            onClick={removeEducation}
                                            variant="contained" 
                                            color="secondary"
                                            startIcon={<Delete />}
                                        ></Button>
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
                </Grid>
            </Grid>
        </div>
    )
} 

export default EducationDetails