import React from 'react'
import { makeStyles, Grid, Typography, Button } from '@material-ui/core'
import { ArrowForward } from '@material-ui/icons'
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
    }
}));

const Introduction = ({values, handleChange}) => {
    const classes = useStyles();

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
                        Introduction
                    </Typography>
                </Grid>
                
                <Grid item xs={6}>
                    <Typography variant="h5">
                        Welcome to the CV Assistant, 
                        created by Sasoun Torossian. 
                        Please go through the assistant and fill out 
                        all the necessary details. You can go back or forward 
                        at any time using the below arrow keys, or the menu button in the
                        top right. Your progress will be saved when jumping 
                        between pages.
                    </Typography>
                </Grid>

                <Grid item xs={6} className={classes.centering}>
                    <Link 
                        to="/personal"
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

export default Introduction