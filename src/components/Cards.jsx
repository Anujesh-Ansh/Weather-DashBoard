import { Box, Container, Typography } from '@mui/material'
import React from 'react'

function Card() {
  return (
    <Container>
        <Box
          bgcolor='white'
          width='5vw'
          padding='0px'
          p={0}
          m={0}
          
          height='15vh'
        >
            <Typography>
                Cards
            </Typography>
        </Box>
    </Container>
  )
}

export default Card
