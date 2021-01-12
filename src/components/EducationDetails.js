import React from 'react'
import { makeStyles, Grid, TextField, Typography, Button, IconButton, Card, CardContent } from '@material-ui/core'
import {ArrowForward, ArrowBack, Add, Delete, BorderColor} from '@material-ui/icons';
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        marginTop: "30px",
    },
    rootCard: {
        marginTop: 10,
        marginBottom: 10,
    },
    centering: {
        width: "100%",
        align: "centre"
    },
    textField: {
        width: "90%",
    },
}));

const EducationDetails = ({values, handleChange, addEdu, removeEdu}) => {
    const classes = useStyles();

    const addEducation = (e) => { 
        e.preventDefault() 
        addEdu(e)
    }

    const removeEducation = (e, idx) => { 
        e.preventDefault() 
        removeEdu(idx)
    }
        
    return (
        <div className={classes.root}>
            <Grid 
                container 
                direction="column" 
                alignItems="center" 
                spacing={2} 
                style={{ 
                    minHeight: '50vh' 
                }}
            >
                <Grid item xs={6} className={classes.title}>
                    <Typography variant="h4" >
                        Education Details
                    </Typography>
                </Grid>

                <Grid item xs={6} className={classes.centering}>
                    <form noValidate autoComplete="off" onChange={handleChange}>
                        {
                            values.education.map((val, idx) => {
                                return (
                                    <Card className={classes.rootCard} key={idx}>
                                        <CardContent>
                                        <Grid 
                                            container 
                                            spacing={2} 
                                            alignItems="center"
                                            align="center"
                                            justify="center"
                                            style={{ minHeight: "30vh" }}
                                        >
                                            <Grid item xs={11} >
                                                <Typography variant="h5" align="center">
                                                    {`School ${idx+1}`}
                                                </Typography>
                                            </Grid>

                                            <Grid item xs={1}>
                                                <IconButton
                                                    edge="start"
                                                    color="secondary"
                                                    onClick={(e) => removeEducation(e, idx)}
                                                >
                                                    <Delete/>
                                                </IconButton>
                                            </Grid>

                                            <Grid item xs={6}>
                                                <TextField 
                                                    className={classes.textField}
                                                    type="text"
                                                    label={`School-${idx+1}`}
                                                    value={values.education[idx].school} 
                                                    onBlur={handleChange}
                                                    inputProps={{ "data-id": idx, "data-field-type": "school" }}
                                                    error={!!values.education[idx].schoolError && values.education[idx].schoolError.length > 1}
                                                    helperText={values.education[idx].schoolError}
                                                />  
                                            </Grid>

                                            <Grid item xs={6}>
                                                <TextField 
                                                    className={classes.textField}
                                                    type="text"
                                                    label={`Course-${idx+1}`}
                                                    value={values.education[idx].course} 
                                                    onBlur={handleChange}
                                                    inputProps={{ "data-id": idx, "data-field-type": "course" }}
                                                    error={!!values.education[idx].courseError && values.education[idx].courseError.length > 1}
                                                    helperText={values.education[idx].courseError}
                                                />   
                                            </Grid>

                                            <Grid item xs={6}>
                                                <TextField 
                                                    className={classes.textField}
                                                    type="date"
                                                    label={`Start Date-${idx+1}`}
                                                    value={values.education[idx].startDateEdu} 
                                                    onBlur={handleChange}
                                                    inputProps={{ "data-id": idx, "data-field-type": "startDateEdu" }}
                                                    InputLabelProps={{ shrink: true }}
                                                    error={!!values.education[idx].startDateEduError && values.education[idx].startDateEduError.length > 1}
                                                    helperText={values.education[idx].startDateEduError}
                                                />   
                                            </Grid>

                                            <Grid item xs={6}>
                                                <TextField 
                                                    className={classes.textField}
                                                    type="date"
                                                    label={`End Date-${idx+1}`}
                                                    value={values.education[idx].endDateEdu}
                                                    onBlur={handleChange}
                                                    inputProps={{ "data-id": idx, "data-field-type": "endDateEdu" }}
                                                    InputLabelProps={{ shrink: true }}
                                                    error={!!values.education[idx].endDateEduError && values.education[idx].endDateEduError.length > 1}
                                                    helperText={values.education[idx].endDateEduError}
                                                />   
                                            </Grid>
                                        </Grid>
                                        </CardContent>
                                    </Card>
                                )
                            })
                        }
                    </form>
                </Grid>

                <Grid item xs={6} className={classes.centering}>
                    <Button
                            fullWidth={true}
                            onClick={addEducation}
                            variant="contained" 
                            color="primary"
                            endIcon={<Add />}
                        >
                            Add new education
                    </Button>
                </Grid>

                <Grid item xs={6} className={classes.centering}>
                    <Grid 
                        container 
                        direction="row" 
                        justify="space-between"
                        spacing={2} 
                    >
                        <Grid item xs={6}>
                            <Link 
                                to="/personal"
                                style={{textDecoration: 'none'}}
                            >
                                <Button
                                    fullWidth={true}
                                    variant="contained" 
                                    color="primary"
                                    startIcon={<ArrowBack />}
                                >
                                    Prev Page
                                </Button>
                            </Link>
                        </Grid>

                        <Grid item xs={6}>
                            <Link 
                                to="/experience"
                                style={{textDecoration: 'none'}}
                            >
                                <Button
                                    fullWidth={true}
                                    variant="contained" 
                                    color="primary"
                                    endIcon={<ArrowForward />}
                                >
                                    Next Page
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
} 

export default EducationDetails