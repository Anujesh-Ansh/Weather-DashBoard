import { Button, Container, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function DashBoard() {
  return (
    <Container>
        <Typography variant='h1'>DashBoard</Typography>
        <Link to={'/'}>
            <Button variant='contained'>Go to HomePage</Button>
        </Link>
    </Container>
  )
}

export default DashBoard
