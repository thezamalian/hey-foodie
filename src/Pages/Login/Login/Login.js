import React, { useState } from 'react';
import { Alert, Box, Button, CircularProgress, Container, TextField, Typography } from '@mui/material';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { useLocation } from 'react-router-dom';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const location = useLocation();
    const history = useHistory();

    const {user, loginUser, googleSignIn, isLoading, authError} = useAuth();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;

        setLoginData(newLoginData);
        // console.log(newLoginData);
    }

    const  handleOnSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        // console.log(user);
        e.preventDefault();
    }
    return (
        <Container sx={{mb: 5,}}>
            <Typography variant="h5">
                Please Login to Order Your Tastes
            </Typography>
            <Box sx={{width: 0.75, mx: 'auto'}}>
                {(!isLoading )&& <form onSubmit={handleOnSubmit}>
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
                </form>}

                {isLoading && <CircularProgress sx={{mt: 5}} />}
                {user.email && <Alert severity='success'>You have logged in successfully!</Alert>}
                {authError && <Alert severity='error'>{authError}</Alert>}

                {!isLoading && <p>-------------------OR------------------</p>}
                {!isLoading && <Button onClick={googleSignIn} variant='contained' color="warning" sx={{ width: 0.75, mt:2}}>Google Sign In</Button>}
            </Box>
        </Container>
    );
};

export default Login;