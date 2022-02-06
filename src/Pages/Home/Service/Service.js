import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button, Grid, Box } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom';
// import food from '../../../images/Breakfast/breakfast1.png';

const Service = ({food}) => {
    const {_id, name, img, details, price} = food;
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345, }}>
                <Box>
                    <CardMedia
                        component="img"
                        height="150"
                        image={img}
                        alt={name}
                    />
                    <CardContent >
                        <Typography gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography variant="body3" sx={{textAlign: 'center'}}>
                            Price: ${price}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {details.slice(0, 155)}...
                        </Typography>
                    </CardContent>
                </Box>
                <CardActions  sx={{width: '100%'}}>
                    <Box sx={{mx: 'auto'}}>
                        <Link to={`/book-order/${_id}`} >
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