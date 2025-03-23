import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import Home from './Pages/Home'
import Auth from './Pages/Auth'
import backgroundImage from '../src/static/thumbnail.jpg'
import SignUp from './Pages/SignUp.js'
import ForgotPassword from './Pages/ForgotPassword.js'

function App() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh', // Ensure the background covers the entire viewport
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/auth' element={<Auth />} />
          <Route path='/SignUp' element={<SignUp />} />
          <Route path='/forgotPassword' element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter>
    </Box>
  )
}

export default App
