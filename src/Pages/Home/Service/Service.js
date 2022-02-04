import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button, Grid, Box } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom';
import food from '../../../images/Breakfast/breakfast1.png';

const Service = () => {
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345, }}>
                <Box>
                    <CardMedia
                        component="img"
                        height="150"
                        image={food}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Breakfast
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of square mate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </Box>
                <CardActions  sx={{width: '100%'}}>
                    <Box sx={{mx: 'auto'}}>
                        <Link to="/" >
                            <Button size="small" color="inherit" variant="contained" >
                                Order Now <AddShoppingCartIcon />
                            </Button>
                        </Link>
                    </Box>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default Service;