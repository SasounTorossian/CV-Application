import React from 'react'
import { makeStyles, Grid, TextField, Typography, Button, IconButton, Card, CardContent } from '@material-ui/core'
import {ArrowForward, ArrowBack, Add, Delete} from '@material-ui/icons';
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
                    minHeight: '50vh',
                    margin: 0,
                    width: '100%', 
                }}
            >
                <Grid item xs={6} className={classes.title}>
                    <Typography variant="h4">
                        Education Details
                    </Typography>
                </Grid>

                <Grid item xs={6} className={classes.centering}>
                    <form noValidate autoComplete="off" onChange={handleChange}>
                        {
                            values.education.map((val, idx) => {
                                return (
                                    <Card className={classes.rootCard} raised={true} key={idx}>
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
                                                <Typography variant="h5">
                                                    {`Education ${idx+1}`}
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
                                                    label={`School ${idx+1}`}
                                                    value={val.school} 
                                                    onBlur={handleChange}
                                                    inputProps={{ "data-id": idx, "data-field-type": "school" }}
                                                    error={!!val.schoolError && val.schoolError.length > 1}
                                                    helperText={val.schoolError}
                                                />  
                                            </Grid>

                                            <Grid item xs={6}>
                                                <TextField 
                                                    className={classes.textField}
                                                    type="text"
                                                    label={`Course ${idx+1}`}
                                                    value={val.course} 
                                                    onBlur={handleChange}
                                                    inputProps={{ "data-id": idx, "data-field-type": "course" }}
                                                    error={!!val.courseError && val.courseError.length > 1}
                                                    helperText={val.courseError}
                                                />   
                                            </Grid>

                                            <Grid item xs={6}>
                                                <TextField 
                                                    className={classes.textField}
                                                    type="date"
                                                    label={`Start Date ${idx+1}`}
                                                    value={val.startDateEdu} 
                                                    onBlur={handleChange}
                                                    inputProps={{ "data-id": idx, "data-field-type": "startDateEdu" }}
                                                    InputLabelProps={{ shrink: true }}
                                                    error={!!val.startDateEduError && val.startDateEduError.length > 1}
                                                    helperText={val.startDateEduError}
                                                />   
                                            </Grid>

                                            <Grid item xs={6}>
                                                <TextField 
                                                    className={classes.textField}
                                                    type="date"
                                                    label={`End Date ${idx+1}`}
                                                    value={val.endDateEdu}
                                                    onBlur={handleChange}
                                                    inputProps={{ "data-id": idx, "data-field-type": "endDateEdu" }}
                                                    InputLabelProps={{ shrink: true }}
                                                    error={!!val.endDateEduError && val.endDateEduError.length > 1}
                                                    helperText={val.endDateEduError}
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