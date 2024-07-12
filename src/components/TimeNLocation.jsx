import { Box, Container, Typography } from '@mui/material'
import React from 'react'

function TimeNLocation() {
  return (
    <Container>
        <Box mt={5} display='flex' justifyContent='center' alignItems='center' flexDirection='column' gap={4}>
            <Typography variant='h6' fontWeight='light'>Tuesday, 14 May 2024 | Local Time: 07:21 AM</Typography>
            <Typography variant='h4'>London, GB</Typography>
            <Typography fontWeight='bold' color='blue'>Rain</Typography>
        </Box>
    </Container>
  )
}

export default TimeNLocation
