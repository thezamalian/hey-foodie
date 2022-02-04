import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import bannerBg from '../../../images/bannerbackground.png';

const bannerStyle = {
    background: `url(${bannerBg})`,
}

const Banner = () => {
    return (
        <Container>
            <Box style={bannerStyle} sx={{height: 400}}>
                <Typography variant="h5" sx={{pt: 5}}>
                    ASAP Take Your Taste
                </Typography>
            </Box>
        </Container>
    );
};

export default Banner;