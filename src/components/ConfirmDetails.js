import React from 'react'
import { makeStyles, Grid, Typography, Button, Divider } from '@material-ui/core'
import { Check, ArrowBack } from '@material-ui/icons'
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
    boldField: {
        fontSize: 19,
        fontWeight: 600
    },
    normal: {
        fontSize: 19
    },
    error: {
        // fontWeight: 600,
        fontSize: 19,
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
                if(values[key].length === 0) { // edcucation or experience array is empty, form is invalid.
                    invalid = true
                }
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

    const isValidDisplay = (value) => { return value ? "initial" : "inline" }

    return (
        <div className={classes.root}>
            <Grid 
                container 
                spacing={2} 
                direction="column" 
                alignItems="center" 
                style={{
                    margin: 0,
                    width: '100%',
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
                        align="left"
                        spacing={3} 
                    >

                        <Grid item xs={12}>
                            <Grid 
                                container 
                                direction="row" 
                                justify="flex-start"
                                spacing={1} 
                            >   
                                <Grid item xs={12}>
                                    <Typography variant="h5">
                                        Personal
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Divider variant="fullWidth" />
                                </Grid>

                                <Grid item xs={6}>
                                    <Typography variant="body1" display="inline" className={classes.boldField}>
                                        {`Name: `}
                                    </Typography>
                                    <Typography variant="body1" display="inline" className={isValidStyle(values.personal.name)} >
                                        {isValidText(values.personal.name)}
                                    </Typography>
                                </Grid>

                                <Grid item xs={6}>
                                    <Typography variant="body1" display="inline" className={classes.boldField}>
                                        {`Email: `}
                                    </Typography>
                                    <Typography variant="body1" display="inline" className={isValidStyle(values.personal.email)}>
                                        {isValidText(values.personal.email)}
                                    </Typography>
                                </Grid>

                                <Grid item xs={6}>
                                    <Typography variant="body1" display="inline" className={classes.boldField}>
                                        {`Phone: `}
                                    </Typography>
                                    <Typography variant="body1" display="inline" className={isValidStyle(values.personal.phone)}>
                                        {isValidText(values.personal.phone)}
                                    </Typography>
                                </Grid>


                            </Grid>
                        </Grid>


                        <Grid item xs={12}>
                            {
                                values.education.map((val, idx) => {
                                    return (
                                        <Grid 
                                            container 
                                            direction="row" 
                                            justify="flex-start"
                                            spacing={1} 
                                            key={idx}
                                        >   
                                            <Grid item xs={12}>
                                                <Typography variant="h5">
                                                    {`Education ${idx+1}`}
                                                </Typography>
                                            </Grid>

                                            <Grid item xs={12}>
                                                <Divider variant="fullWidth" />
                                            </Grid>

                                            <Grid item xs={6}>
                                                <Typography variant="body1" display="inline" className={classes.boldField}>
                                                    {`School ${idx+1}: `}
                                                </Typography>
                                                <Typography variant="body1" display="inline" className={isValidStyle(val.school)}>
                                                    {isValidText(val.school)}
                                                </Typography>
                                            </Grid>

                                            <Grid item xs={6}>
                                                <Typography variant="body1" display="inline" className={classes.boldField}>
                                                    {`Course ${idx+1}: `}
                                                </Typography>
                                                <Typography variant="body1" display="inline" className={isValidStyle(val.course)}>
                                                    {isValidText(val.course)}
                                                </Typography>
                                            </Grid>

                                            <Grid item xs={6}>
                                                <Typography variant="body1" display="inline" className={classes.boldField}>
                                                    {`Start Date ${idx+1}: `}
                                                </Typography>
                                                <Typography variant="body1" display="inline" className={isValidStyle(val.startDateEdu)}>
                                                    {isValidText(val.startDateEdu)}
                                                </Typography>
                                            </Grid>

                                            <Grid item xs={6}>
                                                <Typography variant="body1" display="inline" className={classes.boldField}>
                                                    {`End Date ${idx+1}: `}
                                                </Typography>
                                                <Typography variant="body1" display="inline" className={isValidStyle(val.endDateEdu)}>
                                                    {isValidText(val.endDateEdu)}
                                                </Typography>
                                            </Grid>


                                        </Grid>
                                    )
                                })
                            }
                        </Grid>

                        <Grid item xs={12}>
                            {
                                values.experience.map((val, idx) => {
                                    return (
                                        <Grid 
                                            container 
                                            direction="row" 
                                            justify="flex-start"
                                            spacing={1} 
                                            key={idx}
                                        >   
                                            <Grid item xs={12}>
                                                <Typography variant="h5">
                                                    {`Experience ${idx+1}`}
                                                </Typography>
                                            </Grid>

                                            <Grid item xs={12}>
                                                <Divider variant="fullWidth" />
                                            </Grid>

                                            <Grid item xs={6}>
                                                <Typography variant="body1" display="inline" className={classes.boldField}>
                                                    {`Company ${idx+1}: `}
                                                </Typography>
                                                <Typography variant="body1" display="inline" className={isValidStyle(val.company)}>
                                                    {isValidText(val.company)}
                                                </Typography>
                                            </Grid>

                                            <Grid item xs={6}>
                                                <Typography variant="body1" display="inline" className={classes.boldField}>
                                                    {`Role ${idx+1}: `}
                                                </Typography>
                                                <Typography variant="body1" display="inline" className={isValidStyle(val.role)}>
                                                    {isValidText(val.role)}
                                                </Typography>
                                            </Grid>

                                            <Grid item xs={6}>
                                                <Typography variant="body1" display="inline" className={classes.boldField}>
                                                    {`Start Date ${idx+1}: `}
                                                </Typography>
                                                <Typography variant="body1" display="inline" className={isValidStyle(val.startDateExp)}>
                                                    {isValidText(val.startDateExp)}
                                                </Typography>
                                            </Grid>

                                            <Grid item xs={6}>
                                                <Typography variant="body1" display="inline" className={classes.boldField}>
                                                    {`End Date ${idx+1}: `}
                                                </Typography>
                                                <Typography variant="body1" display="inline" className={isValidStyle(val.endDateExp)}>
                                                    {isValidText(val.endDateExp)}
                                                </Typography>
                                            </Grid>

                                            <Grid item xs={12}>
                                                <Typography variant="body1" display="inline" className={classes.boldField}>
                                                    {`Details ${idx+1}: `}
                                                </Typography>
                                                <Typography variant="body1" paragraph={true} display={isValidDisplay(val.details)} className={isValidStyle(val.details)}>
                                                    {isValidText(val.details)}
                                                </Typography>
                                            </Grid>


                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
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
                                    endIcon={<Check />}
                                >
                                    Finish
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