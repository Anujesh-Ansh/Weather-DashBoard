import { Box, Button, Container, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowForward } from '@mui/icons-material'; // Importing the right arrow icon
import Header from '../components/Header';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <Container maxWidth="lg">
      <Header />
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        minHeight='80vh'
        flexDirection='column'
        textAlign='center'
        p={4}
      >
        <Box
          display='flex'
          alignItems='center'
          my={4}
          flexDirection='column'
        >
          <Typography variant='h4' gutterBottom>
            Welcome to
          </Typography>
          <Typography variant='h1' color='primary' gutterBottom>
            SkyScape
          </Typography>
          <Typography variant='subtitle1' color='textSecondary'>
            Your personalized weather dashboard!
          </Typography>
        </Box>
        <Link to={'/dashboard'} style={{ textDecoration: 'none' }}>
          <Button
            variant='contained'
            style={{
              backgroundColor: 'antiquewhite',
              borderRadius: '50%',
              minWidth: '64px',
              minHeight: '64px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color:'black',
              padding: -70,
              margin: -10,
            }}
            endIcon={<ArrowForward style={{ fontSize: 30, fontWeight: 'bold', margin: -10, padding: -10 }} />} // Adjusting icon size, boldness, margin, and padding using styles prop
          />
        </Link>
      </Box>
      <Footer />
    </Container>
  );
}

export default HomePage;
