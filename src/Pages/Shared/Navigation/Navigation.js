import React from 'react';
import { AppBar, Box, Button, IconButton, Toolbar, Typography, Drawer, List, Divider, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
    const {user, logout} = useAuth();

    const [state, setState] = React.useState({left: false});
    
    const toggleDrawer = (anchor, open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
  
      setState({ ...state, [anchor]: open });
    };
  
    const list = (anchor) => (
      <Box
        // sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
            <ListItem button key={1}>
              <ListItemIcon>

              </ListItemIcon>
              <ListItemText primary="My Orders" />
            </ListItem>
            <ListItem button key={1}>
              <ListItemIcon>

              </ListItemIcon>
              <ListItemText primary="Manage All Orders" />
            </ListItem>
            <ListItem button key={1}>
              <ListItemIcon>

              </ListItemIcon>
              <ListItemText primary="Add a New Package" />
            </ListItem>
        </List>
      </Box>
    );
    
    return (
      <Box sx={{ flexGrow: 1, mb: 5}}>
          <AppBar position="fixed" 
              sx={{bgcolor: "secondary.main"}}
          >
            <Toolbar>
            {['left'].map((anchor) => (
              <React.Fragment key={anchor}>
                <IconButton
                  onClick={toggleDrawer(anchor, true)}
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2, my: 1, bgcolor: 'white', color: 'black', '&:hover': {color: 'white', bgcolor: 'black'} }}
                  >
                    <MenuIcon />
                </IconButton>
                <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                >
                  {list(anchor)}
                </Drawer>
              </React.Fragment>
            ))}
              
              <NavLink to="/home" style={{color: 'white', textDecoration: 'none', marginRight: 'auto'}}>
                  <Typography variant="h4" component="div" sx={{ flexGrow: 1,  }}>
                      Hey Foodie!
                  </Typography>
              </NavLink>
              
              {user.email ? 
                  <Button onClick={logout} sx={{color: 'dark', bgcolor: 'InfoBackground'}}>LogOut</Button>
                  :
                  <NavLink to="/login">
                      <Button sx={{color: 'dark', bgcolor: 'InfoBackground'}}>Login</Button>
                  </NavLink>
              }
            </Toolbar>
          </AppBar>
      </Box>
    );
};

export default Navigation;