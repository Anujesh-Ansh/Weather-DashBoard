import { SignIn } from '@clerk/clerk-react'
import { Container, Box } from '@mui/material'
import React from 'react'

function SignInPage() {
  return (
    <Container>
      <Box 
        display="flex" 
        justifyContent="center" 
        alignItems="center" 
        minHeight="100vh"
      >
        <SignIn />
      </Box>
    </Container>
  )
}

export default SignInPage
