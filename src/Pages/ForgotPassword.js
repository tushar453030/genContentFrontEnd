import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Container,
  TextField,
  Button,
  Box,
  Typography,
  Link,
} from '@mui/material'
import pic from '../static/pic.png'

function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [step, setStep] = useState(1) // Step 1: Enter Email, Step 2: Enter OTP & Password
  const [otp, setOtp] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const navigate = useNavigate()

  const handleEmailChange = (e) => {
    const value = e.target.value
    setEmail(value)
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setEmailError('Please enter a valid email address')
    } else {
      setEmailError('')
    }
  }

  const handleSendOTP = async () => {
    try {
      //   const response = await fetch('https://your-backend-api.com/send-otp', {
      //     method: 'POST',
      //     headers: { 'Content-Type': 'application/json' },
      //     body: JSON.stringify({ email }),
      //   })

      //const data = await response.json()
      if (true) {
        alert('OTP sent to your email')
        setStep(2)
      } else {
        //alert(data.message || 'Error sending OTP')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Something went wrong. Please try again.')
    }
  }

  const handleResetPassword = async () => {
    try {
      //   const response = await fetch(
      //     'https://your-backend-api.com/reset-password',
      //     {
      //       method: 'POST',
      //       headers: { 'Content-Type': 'application/json' },
      //       body: JSON.stringify({ email, otp, newPassword }),
      //     }
      //   )

      //const data = await response.json()
      if (true) {
        alert('Password reset successfully')
        navigate('/auth') // Redirect to login screen
      } else {
        //alert(data.message || 'Error resetting password')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Something went wrong. Please try again.')
    }
  }

  return (
    <Container
      maxWidth='md'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          padding: 4,
          display: 'inline-flex',
          alignItems: 'center',
          backgroundColor: 'white',
          borderRadius: 2,
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Box component='div' display='inline-block' marginLeft={'25px'}>
          <Typography variant='h4' gutterBottom>
            {step === 1 ? 'Forgot Password' : 'Enter OTP & New Password'}
          </Typography>

          {step === 1 ? (
            <>
              <TextField
                label='Email'
                type='email'
                variant='outlined'
                fullWidth
                size='small'
                value={email}
                onChange={handleEmailChange}
                error={!!emailError}
                helperText={emailError}
                sx={{ marginBottom: 2, marginTop: 2 }}
              />
              <Button
                variant='contained'
                color='primary'
                fullWidth
                onClick={handleSendOTP}
                disabled={!email || !!emailError}
              >
                Send OTP
              </Button>
            </>
          ) : (
            <>
              <TextField
                label='OTP'
                variant='outlined'
                fullWidth
                size='small'
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                sx={{ marginBottom: 2, marginTop: 2 }}
              />
              <TextField
                label='New Password'
                type='password'
                variant='outlined'
                fullWidth
                size='small'
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                sx={{ marginBottom: 2 }}
              />
              <Button
                variant='contained'
                color='primary'
                fullWidth
                onClick={handleResetPassword}
              >
                Save
              </Button>
            </>
          )}

          <Link href='/auth' variant='body2' sx={{ marginBottom: 2 }}>
            Sign In
          </Link>
        </Box>

        <Box
          sx={{
            flex: 1,
            backgroundImage: `url(${pic})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            minHeight: '400px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: '20px',
          }}
        ></Box>
      </Box>
    </Container>
  )
}

export default ForgotPassword
