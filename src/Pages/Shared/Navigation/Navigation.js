import React from 'react';
import { AppBar, Box, Button, IconButton, Toolbar, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import ShopIcon from '@mui/icons-material/Shop';
import RateReviewIcon from '@mui/icons-material/RateReview';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const navStyle = {
  display: 'flex', 
  alignItems: 'center', 
  textDecoration: 'none'
}

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
        <List sx={{textDecoration: 'none'}}>
            <ListItem button key={1}>
              <NavLink to="/my-orders" style={navStyle}>
                <ListItemIcon sx={{mr: '-30px'}}>
                  <ShoppingBasketIcon />
                </ListItemIcon>
                <ListItemText primary="My Orders"  />
              </NavLink>
            </ListItem>
            <ListItem button key={1}>
              <NavLink to="/all-orders" style={navStyle}>
                <ListItemIcon sx={{mr: '-30px'}}>
                  <ShopIcon />
                </ListItemIcon>
                <ListItemText primary="Manage All Orders" />
              </NavLink>
            </ListItem>
            <ListItem button key={1}>
              <NavLink to="/add-package" style={navStyle}>
                <ListItemIcon sx={{mr: '-30px'}}>
                  <AddIcon />
                </ListItemIcon>
                <ListItemText primary="Add a New Package" />
              </NavLink>
            </ListItem>
            <ListItem button key={1}>
              <NavLink to="/add-review" style={navStyle}>
                <ListItemIcon sx={{mr: '-30px'}}>
                  <RateReviewIcon />
                </ListItemIcon>
                <ListItemText primary="Make a Review" />
              </NavLink>
            </ListItem>
            <ListItem button key={1} onClick={logout} >
              <ListItemIcon sx={{mr: '-30px'}}>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="LogOut" />
            </ListItem>
        </List>
      </Box>
    );
    
    return (
      <Box sx={{ flexGrow: 1, mb: "80px"}}>
          <AppBar position="fixed" 
              sx={{bgcolor: "secondary.main"}}
          >
            <Toolbar>
            {user.email && ['left'].map((anchor) => (
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
                  <Button onClick={logout} sx={{color: 'dark', bgcolor: 'InfoBackground'}}>LogOut <LogoutIcon /></Button>
                  :
                  <NavLink to="/login">
                      <Button sx={{color: 'dark', bgcolor: 'InfoBackground'}}>Login <LoginIcon /> </Button>
                  </NavLink>
              }
            </Toolbar>
          </AppBar>
      </Box>
    );
};

export default Navigation;