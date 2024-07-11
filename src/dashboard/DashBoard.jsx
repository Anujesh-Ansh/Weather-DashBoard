import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function DashBoard() {
  return (
    <Container>
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
                
                flexDirection='column'
                bgcolor='lightblue'
                height='60vh'
                minWidth='40vw'
                p={5}
                borderRadius={20}
                style={{elevation: 5}}
                
            >

                <Typography variant='h3'>Weather DashBoard</Typography>
            </Box>
        </Box>
    </Container>
  )
}

export default DashBoard
