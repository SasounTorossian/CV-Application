import React from 'react'
import { makeStyles, Grid, Typography, Button } from '@material-ui/core'
import { Replay } from '@material-ui/icons'
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

const Success = () => {
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
                        Success
                    </Typography>
                </Grid>
                
                <Grid item xs={6}>
                    <Typography variant="body1" paragraph={true} className={classes.customFont}>
                        You have completed the cv assistant. We hope you had an excellent experience.
                    </Typography>
                    <Typography variant="body1" className={classes.customFont}>
                        Please use the below button to go back to the start. You can redo the 
                        entire assistant again if you so choose.
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
                            endIcon={<Replay />}
                            fullWidth={true}
                        >
                            Go Back To Introduction
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        </motion.div>
    )
} 

export default Success