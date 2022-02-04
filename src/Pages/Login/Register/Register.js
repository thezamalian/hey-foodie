import React, {useState} from 'react';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});

    const {user, registerUser, isLoading} = useAuth();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;

        setLoginData(newLoginData);
        console.log(newLoginData);
    }

    const  handleOnSubmit = e => {
        if(loginData.password !== loginData.password2) {
            alert('Your Password did not match!')
            return;
        }
        registerUser(loginData.name, loginData.email, loginData.password);
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
                        label="Your Name"
                        defaultValue="" 
                        name="name"
                        type="name"
                        onChange={handleOnChange}
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
                        onChange={handleOnChange}
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
                        onChange={handleOnChange}
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
                        onChange={handleOnChange}
                        variant="standard" 
                        sx={{width: 0.75}}
                    />
                    <br />
                    <Link to="/login">
                        <Button sx={{mt:2}}>Already Registered? Please Login</Button>
                        <br />
                    </Link>
                    <Button type="submit" variant='contained' sx={{width: 0.75, mt:1}}>Register</Button>
                </form>
            </Box>
        </Container>
    );
};

export default Register;