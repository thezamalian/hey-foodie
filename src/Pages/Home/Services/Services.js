import React from 'react';
import { Box, Container, Grid, Tab, Typography } from '@mui/material';
import { TabContext, TabList, TabPanel} from '@mui/lab';
import Service from '../Service/Service';

const Services = () => {
    const [value, setValue] = React.useState(2);

    const foodArr = [1, 2, 3, 4, 5, 6];

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    return (
        <Container>
            <Typography variant='h4'>
                Our Services
            </Typography>
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example" centered>
                        <Tab label="Breakfast" value={1} />
                        <Tab label="Lunch" value={2} />
                        <Tab label="Dinner" value={3} />
                    </TabList>
                    </Box>
                    <TabPanel value={1}>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2}>
                                {foodArr.map((index) => <Service 
                                        key={index} 
                                    />)}
                            </Grid>
                        </Box>
                    </TabPanel>
                    <TabPanel value={2}>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2}>
                                {foodArr.map((index) => <Service 
                                        key={index} 
                                    />)}
                            </Grid>
                        </Box>
                    </TabPanel>
                    <TabPanel value={3}>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2}>
                                {foodArr.map((index) => <Service 
                                        key={index} 
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