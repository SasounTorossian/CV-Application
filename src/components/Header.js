import React from 'react'
import { withRouter } from 'react-router-dom'
import { makeStyles, 
        Typography, 
        AppBar, 
        Toolbar, 
        IconButton, 
        Menu, 
        MenuItem, 
        ListItemIcon  
      } from '@material-ui/core'
import {Menu as MenuIcon, Info, Person, School, Work, GitHub} from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    gitButton: {
      marginRight: theme.spacing(2),
    },
    menuIcon: {
      fontSize: "1.6em"
    },
    gitIcon: {
      fontSize: "1.3em"
    },
    scaleEfect: {
      transition: "all 0.2s ease-in-out",
      "&:hover": {
        transform: "scale(1.1)"
      }
    },
    title: {
      flexGrow: 1, 
    },

  }));

const Header = ({history}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const classes = useStyles();

    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleMenuClick = (pageURL) => {
      if(pageURL !== null) history.push(pageURL)
      setAnchorEl(null);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h5" className={classes.title}>
                        CV Assistant
                    </Typography>

                    <IconButton 
                        className={`${classes.gitButton} ${classes.scaleEfect}`}
                        edge="start" 
                        color="inherit" 
                        aria-label="menu" 
                        target="_blank"
                        href="https://github.com/SasounTorossian"
                    >
                        <GitHub className={classes.gitIcon}/>
                    </IconButton>

                    <IconButton 
                        className={classes.scaleEfect}
                        edge="start" 
                        color="inherit" 
                        aria-label="menu" 
                        onClick={handleMenu}
                    >
                        <MenuIcon className={classes.menuIcon}/>
                    </IconButton>

                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={() => handleMenuClick(null)}
                    >

                        <MenuItem 
                          onClick={() => handleMenuClick("/introduction")}
                        >
                          <ListItemIcon>
                            <Info />
                          </ListItemIcon>
                          <Typography>Introduction</Typography>
                        </MenuItem>
                            
                        <MenuItem 
                          onClick={() => handleMenuClick("/personal")}
                        >
                          <ListItemIcon>
                            <Person />
                          </ListItemIcon>
                          <Typography>Personal</Typography>
                        </MenuItem>

                        <MenuItem 
                          onClick={() => handleMenuClick("/education")}
                        >
                          <ListItemIcon>
                            <School />
                          </ListItemIcon>
                          <Typography>Education</Typography>
                        </MenuItem>

                        <MenuItem 
                          onClick={() => handleMenuClick("/experience")}
                        >
                          <ListItemIcon>
                            <Work />
                          </ListItemIcon>
                          <Typography>Experience</Typography>
                        </MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default withRouter(Header)
