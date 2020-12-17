import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography, AppBar, Toolbar, IconButton, Menu, MenuItem } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { withRouter } from 'react-router-dom'
import WorkIcon from '@material-ui/icons/Work';

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
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleMenuClick = (pageURL) => {
      history.push(pageURL)
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
                        <MenuItem onClick={() => handleMenuClick("/personal")}>Personal</MenuItem>
                        <MenuItem onClick={() => handleMenuClick("/education")}>Education </MenuItem>
                        <MenuItem onClick={() => handleMenuClick("/experience")}>Experience</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default withRouter(Header)
