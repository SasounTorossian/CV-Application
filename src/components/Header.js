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
import {Menu as MenuIcon, Person, School, Work} from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
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

    //TODO: Figure out work icon
    //TODO: Figure out github link
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        CV Assistant
                    </Typography>

                    <IconButton 
                        edge="start" 
                        className={classes.menuButton}
                        color="inherit" 
                        aria-label="menu" 
                        onClick={handleMenu}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={() => handleMenuClick(null)}
                    >

                            
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
