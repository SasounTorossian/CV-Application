import React from 'react'
import { makeStyles, Grid, TextField, Typography, Button } from '@material-ui/core'
import { ArrowForward } from '@material-ui/icons'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        paddingTop: 20,
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
    }
}));

const PersonalDetails = ({values, handleChange}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid 
                container spacing={3} 
                direction="column" 
                alignItems="center" 
                justify="center"
                style={{ 
                    minHeight: '50vh' 
                }}
            >

                <Grid item xs={6}>
                    <Typography variant="h4" className={classes.title}>
                        Personal Details
                    </Typography>
                </Grid>

                <Grid item xs={6} className={classes.centering}>
                    <form autoComplete="off" onChange={handleChange}>
                        <TextField 
                            className={classes.fullWidth}
                            color="primary"
                            type="text"
                            label="Name" 
                            value={values.personal.name} 
                            onBlur={handleChange}
                            inputProps={{ "data-field-type": "name" }}
                            error={!!values.personal.nameError && values.personal.nameError.length > 1}
                            helperText={values.personal.nameError}
                        />

                        <br />

                        <TextField 
                            className={classes.fullWidth}
                            type="email"
                            label="Email" 
                            value={values.personal.email} 
                            onBlur={handleChange}
                            inputProps={{ "data-field-type": "email" }}
                            error={!!values.personal.emailError && values.personal.emailError.length > 1}
                            helperText={values.personal.emailError}
                        />


                        <br />

                        <TextField 
                            className={classes.fullWidth}
                            type="text"
                            label="Phone" 
                            name="phone"
                            value={values.personal.phone} 
                            onBlur={handleChange}
                            inputProps={{ "data-field-type": "phone" }}
                            error={!!values.personal.phoneError && values.personal.phoneError.length > 1}
                            helperText={values.personal.phoneError}
                        />
                    
                        <br />
                    </form>
                </Grid>

                <Grid item xs={6} className={classes.centering}>
                    <Link 
                        to="/education"
                        style={{textDecoration: 'none'}}
                    >
                        <Button 
                            variant="contained" 
                            color="primary"
                            endIcon={<ArrowForward />}
                            className={classes.fullWidth}
                        >
                            Next Page
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        </div>
    )
} 

export default PersonalDetails