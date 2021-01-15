import React from 'react'
import { makeStyles, Grid, Typography, Button } from '@material-ui/core'
import { ArrowForward, ArrowBack } from '@material-ui/icons'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        marginTop: "30px",
    },
    centering: {
        width: "100%",
        align: "centre"
    },
    textField: {
        width: "100%",
    },
    fullWidth: {
        width: "100%"
    },
    normal: {
        fontSize: 20
    },
    error: {
        fontWeight: 600,
        fontSize: 20,
        color: "red"
    }
}));

const ConfirmDetails = ({values}) => {
    const classes = useStyles();

    // Used to  cycle through state object of parent in order to determine all necessary fields are filled.
    const invalidValues = () => {
        let invalid = false // Initates variable to be valid at first.
        let objectKeys = Object.keys(values) // Extract keys: personal, education, experience
        objectKeys.forEach(key => {
            if(Array.isArray(values[key])){ // Separates personal (not array), with education and experience (arrays)
                values[key].forEach(object => { // Extracts array of object from education or experience
                    let objectEntries = Object.entries(object) // Array of arrays containing key:value pair as first and second element. [ [2], [2], ......]
                    for(const [key, value] of objectEntries) { // Destructures key:value into separate variables
                        if(["school", "course", "startDateEdu", "endDateEdu"].includes(key) ||
                            ["company", "role", "startDateExp", "endDateExp", "details"].includes(key)) { // Only checks the values of these keys
                            if(!value) { // If value of above keys are empty, return true
                                invalid = true
                            }
                        }
                    }
                })
            }
            else {
                let objectEntries = Object.entries(values[key]) // Array of arrays containing key:value pair as first and second element. [ [2], [2], ......]
                for(const [key, value] of objectEntries) { // Destructures key:value into separate variables
                    if(["name", "email", "phone"].includes(key)) { // Only checks the values of these keys
                        if(!value) { // If value of above keys are empty, return true
                            invalid = true        
                        }
                    }
                }
            }
        })

        return invalid
    }

    const isValidText = (value) => { return value ? value : "Required" }

    const isValidStyle = (value) => { return value ? classes.normal : classes.error }

    return (
        <div className={classes.root}>
            <Grid 
                container spacing={3} 
                direction="column" 
                alignItems="center" 
                style={{ 
                    minHeight: '50vh' 
                }}
            >

                <Grid item xs={6} className={classes.title}>
                    <Typography variant="h4">
                        Confirm Details
                    </Typography>
                </Grid>

                <Grid item xs={6} className={classes.centering}>
                    <Grid 
                        container 
                        direction="row" 
                        justify="space-between"
                        spacing={2} 
                    >

                        <Grid 
                            container 
                            direction="row" 
                            justify="flex-start"
                            spacing={2} 
                        >   
                            <Grid item xs={12}>
                                <Typography variant="h5">
                                    Personal
                                </Typography>
                            </Grid>

                            <Grid item xs={6}>
                                <Typography variant="body1" className={isValidStyle(values.personal.name)} >
                                    {`Name: ${isValidText(values.personal.name)}`}
                                </Typography>
                            </Grid>

                            <Grid item xs={6}>
                                <Typography variant="body1" className={isValidStyle(values.personal.email)}>
                                    {`Email: ${isValidText(values.personal.email)}`}
                                </Typography>
                            </Grid>

                            <Grid item xs={6}>
                                <Typography variant="body1" className={isValidStyle(values.personal.phone)}>
                                    {`Phone: ${isValidText(values.personal.phone)}`}
                                </Typography>
                            </Grid>
                        </Grid>

                        {
                            values.education.map((val, idx) => {
                                return (
                                    <Grid 
                                        container 
                                        direction="row" 
                                        justify="flex-start"
                                        spacing={2} 
                                        key={idx}
                                    >   
                                        <Grid item xs={12}>
                                            <Typography variant="h5">
                                                {`Education ${idx+1}`}
                                            </Typography>
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Typography variant="body1" className={isValidStyle(val.school)}>
                                                {`School ${idx+1}: ${isValidText(val.school)}`}
                                            </Typography>
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Typography variant="body1" className={isValidStyle(val.course)}>
                                                {`Course ${idx+1}: ${isValidText(val.course)}`}
                                            </Typography>
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Typography variant="body1" className={isValidStyle(val.startDateEdu)}>
                                                {`Start Date ${idx+1}: ${isValidText(val.startDateEdu)}`}
                                            </Typography>
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Typography variant="body1" className={isValidStyle(val.endDateEdu)}>
                                                {`End Date ${idx+1}: ${isValidText(val.endDateEdu)}`}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                )
                            })
                        }

                        {
                            values.experience.map((val, idx) => {
                                return (
                                    <Grid 
                                        container 
                                        direction="row" 
                                        justify="flex-start"
                                        spacing={2} 
                                        key={idx}
                                    >   
                                        <Grid item xs={12}>
                                            <Typography variant="h5">
                                                {`Experience ${idx+1}`}
                                            </Typography>
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Typography variant="body1" className={isValidStyle(val.company)}>
                                                {`Company ${idx+1}: ${isValidText(val.company)}`}
                                            </Typography>
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Typography variant="body1" className={isValidStyle(val.role)}>
                                                {`Role ${idx+1}: ${isValidText(val.role)}`}
                                            </Typography>
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Typography variant="body1" className={isValidStyle(val.startDateExp)}>
                                                {`Start Date ${idx+1}: ${isValidText(val.startDateExp)}`}
                                            </Typography>
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Typography variant="body1" className={isValidStyle(val.endDateExp)}>
                                                {`End Date ${idx+1}: ${isValidText(val.endDateExp)}`}
                                            </Typography>
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Typography variant="body1" className={isValidStyle(val.details)}>
                                                {`Details ${idx+1}: ${isValidText(val.details)}`}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                )
                            })
                        }

                    </Grid>
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
                                to="/experience"
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
                                to="/success"
                                style={{textDecoration: 'none'}}
                            >
                                <Button
                                    fullWidth={true}
                                    variant="contained" 
                                    color="primary"
                                    disabled={invalidValues()}
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

export default ConfirmDetails