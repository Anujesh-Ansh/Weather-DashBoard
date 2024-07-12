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

            <Box
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    
            >
                <Box 
                    display='flex'
                    justifyContent='space-evenly'
                    alignItems='center'
                    flexDirection='row'
                    gap={3}
                >
                    <Cards/>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                </Box>
            </Box>
            



        </Box>
    </Container>
  )
}

export default SevenDayTemp
