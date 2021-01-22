import React from 'react'
import { makeStyles, Grid, TextField, Typography, Button } from '@material-ui/core'
import { ArrowForward, ArrowBack } from '@material-ui/icons'
import { Link } from 'react-router-dom'

// Material UI styling variable to offer greater control in component styling.
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
    }
}));

// PersonalDetails component takes name, email, and phone.
const PersonalDetails = ({values, handleChange}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid 
                container spacing={3} 
                direction="column" 
                alignItems="center" 
                style={{ 
                    minHeight: '50vh',
                    margin: 0,
                    width: '100%',
                }}
            >

                <Grid item xs={6} className={classes.title}>
                    <Typography variant="h4">
                        Personal Details
                    </Typography>
                </Grid>

                <Grid item xs={6} className={classes.centering}>
                    <form autoComplete="off" onChange={handleChange}>
                        <TextField 
                            className={classes.fullWidth}
                            type="text"
                            label="Name" 
                            value={values.personal.name} 
                            onBlur={handleChange}
                            inputProps={{ 
                                "data-field-type": "name", 
                                autocomplete: 'new-password',
                                form: {
                                    autocomplete: 'off',
                                } 
                            }}
                            error={!!values.personal.nameError && values.personal.nameError.length > 1}
                            helperText={values.personal.nameError}
                        />

                        <TextField 
                            className={classes.fullWidth}
                            type="email"
                            label="Email" 
                            value={values.personal.email} 
                            onBlur={handleChange}
                            inputProps={{ 
                                "data-field-type": "email",
                                autocomplete: 'new-password',
                                form: {
                                    autocomplete: 'off',
                                }  
                            }}
                            error={!!values.personal.emailError && values.personal.emailError.length > 1}
                            helperText={values.personal.emailError}
                        />

                        <TextField 
                            className={classes.fullWidth}
                            type="text"
                            label="Phone" 
                            value={values.personal.phone} 
                            onBlur={handleChange}
                            inputProps={{ 
                                "data-field-type": "phone", 
                                autocomplete: 'new-password',
                                form: {
                                    autocomplete: 'off',
                                }  
                            }}
                            error={!!values.personal.phoneError && values.personal.phoneError.length > 1}
                            helperText={values.personal.phoneError}
                        />

                    </form>
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
                                to="/"
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
                                to="/education"
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

export default PersonalDetails