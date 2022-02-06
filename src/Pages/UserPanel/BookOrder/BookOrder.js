import React, { useState } from 'react';
import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import TimePicker from '@mui/lab/TimePicker';
import food from '../../../images/Breakfast/breakfast1.png'
import useAuth from '../../../hooks/useAuth';

const BookOrder = () => {
    const [bookingData, setBookingData] = useState({});
    const [date, setDate] = useState(null);
    const [time, setTime] = useState(null);
    const {user} = useAuth();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newBookingData = {...bookingData};
        newBookingData[field] = value;

        setBookingData(newBookingData);
        // console.log(newLoginData);
    }
    const  handleOnSubmit = e => {
        bookingData.name = user.displayName;
        bookingData.email = user.email;
        // console.log(user);
        e.preventDefault();
    }

    return (
        <Container>
            <Typography variant='h4' sx={{fontSize: '40px', fontWeight: 500}}>
                Book This Order
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <img style={{width: '100%'}} src={food} alt="" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box sx={{width: 0.75, mx: 'auto'}}>
                            <form onSubmit={handleOnSubmit}>
                                <TextField 
                                    id="outlined-basic" 
                                    label="Your Name"
                                    defaultValue={user.displayName} 
                                    name='name'
                                    type="text"
                                    onChange={handleOnChange}
                                    variant="outlined" 
                                    sx={{width: 0.75, my: 2}}
                                    disabled
                                />
                                <br />
                                <TextField 
                                    id="outlined-basic" 
                                    label="Your Email"
                                    defaultValue={user.email} 
                                    name='name'
                                    type="email"
                                    onChange={handleOnChange}
                                    variant="outlined" 
                                    sx={{width: 0.75, my: 2}}
                                    disabled
                                />
                                <br />
                                <TextField 
                                    id="outlined-basic" 
                                    label="Your Phone Number"
                                    defaultValue='' 
                                    name='phone'
                                    type='tel'
                                    onChange={handleOnChange}
                                    variant="outlined" 
                                    sx={{width: 0.75, mb: 2}}
                                />
                                <br />
                                <TextField 
                                    id="outlined-basic" 
                                    label="Your Address"
                                    defaultValue='' 
                                    name='address'
                                    type='text'
                                    onChange={handleOnChange}
                                    variant="outlined" 
                                    sx={{width: 0.75, mb: 2}}
                                />
                                <br />
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <TimePicker
                                    label="Order Time"
                                    value={time}
                                    onChange={(newTime) => {
                                    setTime(newTime);
                                    }}
                                    renderInput={(params) => <TextField {...params} sx={{width: 0.75, mb: 2}}/>}
                                />
                                    <DatePicker
                                        label="Order Date"
                                        value={date}
                                        onChange={(newDate) => {
                                        setDate(newDate);
                                        }}
                                        renderInput={(params) => <TextField {...params} sx={{width: 0.75, mb: 2}}/>}
                                    />
                                </LocalizationProvider>
                                <br />

                                <Button type='submit' variant='contained' sx={{ width: 0.75, mt:1}}>Order Now</Button>
                            </form>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default BookOrder;