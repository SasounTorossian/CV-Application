import React from 'react'
import { makeStyles, Grid, Typography, Button } from '@material-ui/core'
import { ArrowForward } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"

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
    customFont: {
        fontSize: 20
    },
}));

const pageTransition = {
    in: {
        opacity: 1,
        y: 0
    },
    out: {
        opacity: 0,
        y: "-100vh"
    }
}

const Introduction = () => {
    const classes = useStyles();

    return (
        <motion.div 
            initial="out"
            animate="in"
            exit="out"
            variants={pageTransition}
            className={classes.root}
        >
            <Grid 
                container 
                spacing={3} 
                direction="column" 
                alignItems="center" 
                style={{ 
                    minHeight: '50vh',
                    margin: 0,
                    width: '100%' 
                }}
            >

                <Grid item xs={6} className={classes.title}>
                    <Typography variant="h4">
                        Introduction
                    </Typography>
                </Grid>
                
                <Grid item xs={6}>
                    <Typography variant="body1" paragraph={true} className={classes.customFont}>
                        Welcome to the CV Assistant, created by Sasoun Torossian based off the Odin project curriculum. 
                        This assistant is made primarily made using React and Material UI, with some additional libraries
                        included to streamline the experience.
                    </Typography>
                    <Typography variant="body1" paragraph={true} className={classes.customFont}>
                        Please go through the assistant and fill out all the necessary details. 
                    </Typography>
                    <Typography variant="body1" className={classes.customFont}>
                        You can go back or forward at any time using the below arrow keys, or the menu button in the
                        top right. Your progress will be saved when jumping between pages, and you will be able to see
                        an overview of your progress on the final confirmation page.
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
                            fullWidth={true}
                        >
                            Next Page
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        </motion.div>
    )
} 

export default Introduction