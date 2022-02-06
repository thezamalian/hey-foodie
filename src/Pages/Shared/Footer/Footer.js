import React from 'react';
import {Box, Grid, Container, Typography, TextField} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from 'react-router-dom';

// import Grid from '@mui/material/Grid';
// import Link from '@mui/material/Link';
// import Container from '@mui/material/Container';
// import Typography from '../components/Typography';
// import TextField from '../components/TextField';

function Copyright() {
  return (
    <React.Fragment>
      {'© '}
      <Link style={{textDecoration: 'none', color: 'black', fontSize: '30px'}} color="inherit" href="/home">
        Hey Foodie!
      </Link>{' '}
      {new Date().getFullYear()}
    </React.Fragment>
  );
}

const iconStyle = {
  width: 48,
  height: 38,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '10px',
  backgroundColor: 'white',
  mr: 1,
  '&:hover': {
    bgcolor: 'secondary.dark',
  },
};

const LANGUAGES = [
  {
    code: 'en-US',
    name: 'English',
  },
  {
    code: 'fr-FR',
    name: 'Français',
  },
];

const Footer = () => {
    return (
    <Typography
        component="footer"
        sx={{ display: 'flex', bgcolor: 'secondary.light', mt: '150px' }}
    >
      <Container sx={{ my: 8, display: 'flex' }}>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={12} md={4}>
            <Grid
              container
              direction="row"
              justifyContent="flex-end"
              spacing={2}
            //   sx={{ height: 120 }}
            >
              <Grid item xs={6} sx={{ display: 'flex' }}>
                <Box component="a" href="https://facebook.com/" sx={iconStyle}>
                  <FacebookIcon sx={{fontSize: '40px'}} />
                </Box>
                <Box component="a" href="https://twitter.com/" sx={iconStyle}>
                    <TwitterIcon sx={{fontSize: '40px'}} />
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Copyright />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={6} md={4}>
            <Typography variant="h6" marked="left" gutterBottom>
              Legal
            </Typography>
            <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
              <Box component="li" sx={{ py: 0.5}}>
                <Link style={{ textDecoration: 'none', }} href="/">Home</Link>
              </Box>
              <Box component="li" sx={{ py: 0.5}}>
                <Link style={{ textDecoration: 'none', }} href="/">Blog</Link>
              </Box>
              <Box component="li" sx={{ py: 0.5}}>
                <Link style={{ textDecoration: 'none', }} href="/">Contact</Link>
              </Box>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link style={{ textDecoration: 'none', }} href="/">Privacy</Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6} sm={6} md={4}>
            <Typography variant="h6" marked="left" gutterBottom>
              Language
            </Typography>
            <TextField
              select
              size="medium"
              variant="standard"
              SelectProps={{
                native: true,
              }}
              sx={{ mt: 1, width: 150 }}
            >
              {LANGUAGES.map((language) => (
                <option value={language.code} key={language.code}>
                  {language.name}
                </option>
              ))}
            </TextField>
          </Grid>
        </Grid>
      </Container>
    </Typography>
    );
};

export default Footer;