import React, { useState } from 'react';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});

    const {user, loginUser, isLoading} = useAuth();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;

        setLoginData(newLoginData);
        console.log(newLoginData);
    }

    const  handleOnSubmit = e => {
        loginUser(loginData.email, loginData.password);
        console.log(user);
        e.preventDefault();
    }
    return (
        <Container sx={{mt: 5}}>
            <Typography variant="h5">
                Please, Login to Order Your Tastes
            </Typography>
            <Box sx={{width: 0.75, mx: 'auto'}}>
                <form onSubmit={handleOnSubmit}>
                    <TextField 
                        id="standard-basic" 
                        label="Your Email"
                        defaultValue="" 
                        name='email'
                        type="email"
                        onChange={handleOnChange}
                        variant="standard" 
                        sx={{width: 0.75}}
                    />
                    <br />
                    <TextField 
                        id="standard-basic" 
                        label="Your Password"
                        defaultValue="" 
                        name='password'
                        type="password"
                        onChange={handleOnChange}
                        variant="standard" 
                        sx={{width: 0.75}}
                    />
                    <br />
                    <Link to="/register">
                    <Button sx={{ mt:2}}>Not a User? Please Register</Button>
                    <br />
                    </Link>
                    <Button type='submit' variant='contained' sx={{ width: 0.75, mt:1}}>Login</Button>
                </form>
                <p>-------------------------------------</p>
                <Button variant='contained' color="warning" sx={{ width: 0.75, mt:2}}>Google Sign In</Button>
            </Box>
        </Container>
    );
};

export default Login;