import React, { useEffect, useState } from 'react';
import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import TimePicker from '@mui/lab/TimePicker';
// import food from '../../../images/Breakfast/breakfast1.png'
import useAuth from '../../../hooks/useAuth';
import { useParams } from 'react-router-dom';

const BookOrder = () => {
    const [bookingData, setBookingData] = useState({});
    const [date, setDate] = useState(null);
    const [time, setTime] = useState(null);
    const {user} = useAuth();
    const {id} = useParams();
    const [food, setFood] = useState({});

    useEffect(()=> {
        const uri=`http://localhost:5000/foods/${id}`;
        fetch(uri)
            .then(res => res.json())
            .then(data => {
                setFood(data);
            })
    },[])

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
        bookingData.date = date;
        bookingData.time = time;
        const newOrder = {...food, isPending: true, bookingData};
        // console.log(newOrder);

        const uri = `http://localhost:5000/order`;
        fetch(uri, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(result => {
                if(result.insertedId) {
                    alert("This Product is Booked Successfully!")
                }
            })
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
                        <img style={{width: '70%'}} src={food.img} alt="" />
                        <Typography gutterBottom variant="h5" component="div">
                            {food.name}
                        </Typography>
                        <Typography variant="body3" sx={{textAlign: 'center'}}>
                            Price: ${food.price}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {food.details}
                        </Typography>'
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