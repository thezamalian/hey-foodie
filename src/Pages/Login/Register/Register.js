import React from 'react';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <Container sx={{mt: 5}}>
            <Typography variant="h5">
                Please, Login to Order Your Tastes
            </Typography>
            <Box sx={{width: 0.75, mx: 'auto'}}>
                <form >
                    <TextField 
                        id="standard-basic" 
                        label="Your Name"
                        defaultValue="" 
                        name="name"
                        type="name"
                        variant="standard" 
                        sx={{width: 0.75}}
                    />
                    <br />
                    <TextField 
                        id="standard-basic" 
                        label="Your Email"
                        defaultValue="" 
                        name="email"
                        type="email"
                        variant="standard" 
                        sx={{width: 0.75}}
                    />
                    <br />
                    <TextField 
                        id="standard-basic" 
                        label="Your Password"
                        defaultValue="" 
                        name="password"
                        type="password"
                        variant="standard" 
                        sx={{width: 0.75}}
                    />
                    <br />
                    <TextField 
                        id="standard-basic" 
                        label="ReType Your Password"
                        defaultValue="" 
                        name="password2"
                        type="password"
                        variant="standard" 
                        sx={{width: 0.75}}
                    />
                    <br />
                    <Link to="/login">
                    <Button sx={{mt:2}}>Already Registered? Please Login</Button>
                    <br />
                    </Link>
                    <Button variant='contained' sx={{width: 0.75, mt:1}}>Register</Button>
                </form>
            </Box>
        </Container>
    );
};

export default Register;