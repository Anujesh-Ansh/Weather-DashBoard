import { useState } from 'react'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import {Container, Typography} from '@mui/material'
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <Container>
      <Header/>
      <Outlet/>
      <Footer/>
    </Container>
  )
}

export default App
