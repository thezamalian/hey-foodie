import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import bannerBg from '../../../images/bannerbackground.png';
import delivery from '../../../images/Group 1151.png';
import foodGuy from '../../../images/adult-blur-blurred-background-687824.png';

const bannerStyle = {
    background: `url(${bannerBg})`,
}

const Banner = () => {
    return (
        <Container sx={{}}>
            <Box style={bannerStyle}>
                <Typography variant="h4" sx={{pt: 5, mb: 3, fontWeight: 500}}>
                    ASAP Take Your Taste
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={6} sx={{display: 'flex', justifyContent: 'left',height: '25rem'}}>
                        <img style={{width: '100%'}} src={delivery} alt="" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} sx={{display: 'flex', justifyContent: 'right',height: '25rem'}}>
                        <img style={{width: '100%'}} src={foodGuy} alt="" />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Banner;