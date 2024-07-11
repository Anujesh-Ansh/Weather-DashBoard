import { useState } from 'react'
import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from "@clerk/clerk-react";
import {Box, Container, Typography} from '@mui/material'
import { Navigate, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {

  const {user,isLoaded,isSignedIn} = useUser();

  if(!isSignedIn && isLoaded){
    return <Navigate to={'/auth/sign-in'}/>
  }

  return (
    <Container sx={{overflow:'hidden'}}>
        <Header/>
        <Outlet/>
        <Footer/>
    </Container>
  )
}

export default App
