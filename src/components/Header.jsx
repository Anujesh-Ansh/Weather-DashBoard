import { UserButton, useUser } from '@clerk/clerk-react'
import { Box, Button, Container, Typography } from '@mui/material'
import { red } from '@mui/material/colors'
import React from 'react'

function Header() {
    const {user, isLoaded, isSignedIn} = useUser()
  return (
    <Container>
        <Box
            display='flex'
            justifyContent='space-between'
            alignItems='center'
            py={2}
            bgcolor='antiquewhite'
            px={4}
            borderRadius={3}
        >
            <Typography variant='h6'>SkyScape</Typography>
            {
                isSignedIn ? (
                    <UserButton/>
                ):
                (
                    <Button>Login/SignUp</Button>
                )
            }
        </Box>
    </Container>
  )
}

export default Header
