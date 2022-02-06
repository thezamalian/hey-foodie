import React, { useEffect, useState } from 'react';
import { Box, Container, Grid, Tab, Typography } from '@mui/material';
import { TabContext, TabList, TabPanel} from '@mui/lab';
import Service from '../Service/Service';

const Services = () => {
    const [value, setValue] = useState('2');
    const [products, setProducts] = useState([]);

    const [breakfast, setBreakfast] = useState([]);
    const [lunch, setLunch] = useState([]);
    const [dinner, setDinner] = useState([]);

    // const foodArr = [1, 2, 3, 4, 5, 6];

    useEffect( () => {
        const uri = `https://murmuring-bastion-95101.herokuapp.com/foods`;
        fetch(uri) 
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setProducts(data);
            });
    },[])

    useEffect( () => {
        setBreakfast(products.filter(p => p.typeCode === 1));
        setLunch(products.filter(p => p.typeCode === 2));
        setDinner(products.filter(p => p.typeCode === 3));
    }, [products]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    return (
        <Container sx={{mt: 5}}>
            <Typography variant='h4' sx={{mb:1}}>
                Our Services
            </Typography>
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example" centered>
                        <Tab label="Breakfast" value='1' />
                        <Tab label="Lunch" value='2' />
                        <Tab label="Dinner" value='3' />
                    </TabList>
                    </Box>
                    <TabPanel value='1'>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2}>
                                {breakfast.map((food) => <Service 
                                        key={food._id}
                                        food={food} 
                                    />)}
                            </Grid>
                        </Box>
                    </TabPanel>
                    <TabPanel value='2'>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2}>
                                {lunch.map((food) => <Service 
                                        key={food._id}
                                        food={food} 
                                    />)}
                            </Grid>
                        </Box>
                    </TabPanel>
                    <TabPanel value='3'>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2}>
                                {dinner.map((food) => <Service 
                                        key={food._id}
                                        food={food} 
                                    />)}
                            </Grid>
                        </Box>
                    </TabPanel>
                </TabContext>
            </Box>
        </Container>
    );
};

export default Services;