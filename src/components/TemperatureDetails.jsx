import { Container, Box, Typography } from '@mui/material'
import React from 'react'
import CloudIcon from '@mui/icons-material/Cloud';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import AirIcon from '@mui/icons-material/Air';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import LightModeIcon from '@mui/icons-material/LightMode';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function TemperatureDetails() {
  return (
    <Container>
        <Box 
            display='flex'
            justifyContent='space-between'
            alignItems='center'
            width='40vw'
            
            pl={12}
        >
            <Box>
                <CloudIcon sx={{fontSize: 45}}/>
            </Box>
            
            <Box
                
            >
                <Typography variant='h3'>14°</Typography>
            </Box>
            
            <Box
            >
                <Box display='flex' alignItems='center' gap={1}>
                    <ThermostatIcon/>
                    <Typography>Heat: </Typography>
                    <Typography fontWeight='bold' color='white'>14°</Typography>
                </Box>
                <Box display='flex' alignItems='center' gap={1}>
                    <InvertColorsIcon/>
                    <Typography>Humidity: </Typography>
                    <Typography fontWeight='bold' color='white'>92%</Typography>
                </Box>
                <Box display='flex' alignItems='center' gap={1}>
                    <AirIcon/>
                    <Typography>Wind: </Typography>
                    <Typography fontWeight='bold' color='white'>3 km/hr</Typography>
                </Box>
            </Box>
        </Box>
        
        <Box
        display='flex'
        justifyContent='center'
        mt={2}
        >
            <Box
            display='flex'
            alignItems='center'
            justifyContent='space-between'
            width='30vw'
            >
                <Box display='flex' alignItems='center' gap={1}>
                    <LightModeIcon/>
                    <Typography>Rise:</Typography>
                    <Typography fontWeight='bold'>05:09 AM</Typography>
                </Box>
                <Box display='flex' alignItems='center' gap={1}>
                    <WbTwilightIcon/>
                    <Typography>Set:</Typography>
                    <Typography fontWeight='bold'>08:44 PM</Typography>
                </Box>
                <Box display='flex' alignItems='center' gap={1}>
                    <KeyboardArrowUpIcon/>
                    <Typography>High:</Typography>
                    <Typography fontWeight='bold'>15°</Typography>
                </Box>
                <Box display='flex' alignItems='center' gap={1}>
                    <KeyboardArrowDownIcon/>
                    <Typography>Low:</Typography>
                    <Typography fontWeight='bold'>13°</Typography>
                </Box>
            </Box>
        </Box>
        
    </Container>
  )
}

export default TemperatureDetails
