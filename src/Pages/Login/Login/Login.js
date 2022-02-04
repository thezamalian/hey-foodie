import React from 'react';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <Container sx={{mt: 5}}>
            <Typography variant="h5">
                Please, Login to Order Your Tastes
            </Typography>
            <Box sx={{width: 0.75, mx: 'auto'}}>
                <form >
                    <TextField 
                        id="standard-basic" 
                        label="Your Email"
                        defaultValue="" 
                        type="email"
                        variant="standard" 
                        sx={{width: 0.75}}
                    />
                    <br />
                    <TextField 
                        id="standard-basic" 
                        label="Your Password"
                        defaultValue="" 
                        type="password"
                        variant="standard" 
                        sx={{width: 0.75}}
                    />
                    <br />
                    <Link to="/register">
                    <Button sx={{ mt:2}}>Not a User? Please Register</Button>
                    <br />
                    </Link>
                    <Button variant='contained' sx={{ width: 0.75, mt:1}}>Login</Button>
                </form>
                <p>-------------------------------------</p>
                <Button variant='contained' color="warning" sx={{ width: 0.75, mt:2}}>Google Sign In</Button>
            </Box>
        </Container>
    );
};

export default Login;