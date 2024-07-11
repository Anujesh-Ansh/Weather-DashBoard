import { Button, Container, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <Container>
        <Typography variant='h1'>
            Home Page
        </Typography>
        <Link to={'/dashboard'}>
            <Button variant='contained'>Go to DashBoard</Button>
        </Link>
    </Container>
  )
}

export default HomePage
