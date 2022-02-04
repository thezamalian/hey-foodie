import React from 'react';
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" 
                // sx={{backgroundColor: ""}}
            >
                <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <NavLink to="/home" style={{color: 'white', textDecoration: 'none', marginRight: 'auto'}}>
                    <Typography variant="h4" component="div" sx={{ flexGrow: 1,  }}>
                        Hey Foodie!
                    </Typography>
                </NavLink>
                
                <NavLink to="/login">
                    <Button color="inherit" sx={{color: 'white'}}>Login</Button>
                </NavLink>
                
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;