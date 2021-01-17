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
    textFieldMultiline: {
        width: "95%",
    },
}));

const ExperienceDetails = ({values, handleChange, addExp, removeExp}) => {
    const classes = useStyles();

    const addExperience = (e) => { 
        e.preventDefault() 
        addExp()
    }

    const removeExperience = (e, idx) => { 
        e.preventDefault() 
        removeExp(idx)
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
                    <Typography variant="h4" >
                        Experience Details
                    </Typography>
                </Grid>

                <Grid item xs={6} className={classes.centering}>
                    <form noValidate autoComplete="off" onChange={handleChange}>
                        {
                            values.experience.map((val, idx) => {
                                return (
                                    <Card className={classes.rootCard} raised={true} key={idx}>
                                        <CardContent>
                                        <Grid 
                                            container 
                                            spacing={2} 
                                            alignItems="center"
                                            align="center"
                                            style={{ minHeight: "30vh" }}
                                        >

                                            <Grid item xs={11} >
                                                <Typography variant="h5" align="center">
                                                    {`Experience ${idx+1}`}
                                                </Typography>
                                            </Grid>

                                            
                                            <Grid item xs={1}>
                                                    <IconButton
                                                        edge="start"
                                                        color="secondary"
                                                        onClick={(e) => removeExperience(e, idx)}
                                                    >
                                                        <Delete/>
                                                    </IconButton>
                                            </Grid>

                                            <Grid item xs={6}>    
                                                <TextField 
                                                className={classes.textField}
                                                type="text"
                                                label={`Company ${idx+1}`}
                                                value={val.company} 
                                                onBlur={handleChange}
                                                inputProps={{ "data-id": idx, "data-field-type": "company" }}
                                                error={!!val.companyError && val.companyError.length > 1}
                                                helperText={val.companyError}
                                                />   
                                            </Grid>

                                            <Grid item xs={6}>
                                                <TextField 
                                                className={classes.textField}
                                                    type="text"
                                                    label={`Role ${idx+1}`}
                                                    value={val.role} 
                                                    onBlur={handleChange}
                                                    inputProps={{ "data-id": idx, "data-field-type": "role" }}
                                                    error={!!val.roleError && val.roleError.length > 1}
                                                    helperText={val.roleError}
                                                />   
                                            </Grid>

                                            <Grid item xs={6}>
                                                <TextField 
                                                    className={classes.textField}
                                                    type="date"
                                                    label={`Start Date ${idx+1}`}
                                                    value={val.startDateExp} 
                                                    onBlur={handleChange}
                                                    inputProps={{ "data-id": idx, "data-field-type": "startDateExp" }}
                                                    InputLabelProps={{ shrink: true }}
                                                    error={!!val.startDateExpError && val.startDateExpError.length > 1}
                                                    helperText={val.startDateExpError}
                                                />   
                                            </Grid>

                                            <Grid item xs={6}>
                                                <TextField 
                                                    className={classes.textField}
                                                    type="date"
                                                    label={`End Date ${idx+1}`}
                                                    value={val.endDateExp} 
                                                    onBlur={handleChange}
                                                    inputProps={{ "data-id": idx, "data-field-type": "endDateExp" }}
                                                    InputLabelProps={{ shrink: true }}
                                                    error={!!val.endDateExpError && val.endDateExpError.length > 1}
                                                    helperText={val.endDateExpError}
                                                />   
                                            </Grid>
                                            
                                            <Grid item xs={12}>
                                                <TextField 
                                                    className={classes.textFieldMultiline}
                                                    type="text"
                                                    label={`Details of job ${idx+1}`}
                                                    value={val.details} 
                                                    onBlur={handleChange}
                                                    inputProps={{ "data-id": idx, "data-field-type": "details" }}
                                                    multiline
                                                    margin="none"
                                                    rows={5}
                                                    error={!!val.detailsError && val.detailsError.length > 1}
                                                    helperText={val.detailsError}
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
                            onClick={addExperience}
                            variant="contained" 
                            color="primary"
                            endIcon={<Add />}
                        >
                            Add new experience
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
                                to="/education"
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
                                to="/confirm"
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

export default ExperienceDetails