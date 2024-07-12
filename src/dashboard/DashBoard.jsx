import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import TopButtons from '../components/TopButtons'
import TimeNLocation from '../components/TimeNLocation'
import TemperatureDetails from '../components/TemperatureDetails'
import Chart from '../components/Chart'
import SevenDayTemp from '../components/SevenDayTemp'

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
        >
            <Box
                display='flex'
                alignItems='center'
                flexDirection='column'
                bgcolor='lightblue'
                height='60vh'
                minWidth='40vw'
                p={10}
                gap={3}
                borderRadius={20}
            >
                    <TopButtons/>
                    <TimeNLocation/>
                    <TemperatureDetails/>
                    <Chart/>
                    <SevenDayTemp/>

                
            </Box>
        </Box>
    </Container>
  )
}

export default DashBoard
