import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import Cards from './Cards'

function SevenDayTemp() {
  return (
    <Container>
        <Box>
            <Typography>
                7 Day Temperature
            </Typography>

            <Cards/>

        </Box>
    </Container>
  )
}

export default SevenDayTemp
