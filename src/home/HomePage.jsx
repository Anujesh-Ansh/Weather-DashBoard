import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

function HomePage() {
  return (
    <Container>
        <Header/>
        <Box
            display='flex'
            justifyContent='center'
            alignItems='center'
            minHeight='80vh'
            flexDirection='column'
            
        >
            <Box
                display='flex'
                alignItems='center'
                my={4}
            >
                <Typography variant='h3'>
                    Welcome to 
                </Typography>
                <Typography variant='h1' color='lightblue'>
                    SkyScape
                </Typography>

            </Box>
            <Link to={'/dashboard'}>
                <Button variant='contained'>Go to DashBoard</Button>
            </Link>
        </Box>
        <Footer/>
    </Container>
  )
}

export default HomePage
