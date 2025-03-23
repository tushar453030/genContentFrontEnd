import React, { useState } from 'react'
import {
  Container,
  TextField,
  Button,
  Box,
  Typography,
  Link,
} from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google'
import pic from '../static/pic.png'

function SignUp() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match')
      return
    }

    try {
      const response = await fetch('https://your-backend-api.com/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()
      if (response.ok) {
        alert('User created successfully')
      } else {
        alert(data.message || 'Error creating user')
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
          <Typography variant='h2' gutterBottom>
            GenContent!
          </Typography>
          <Typography variant='body2' gutterBottom>
            Use AI to create creative, curative posts for your
          </Typography>

          <TextField
            label='Email'
            name='email'
            type='email'
            variant='outlined'
            fullWidth
            size='small'
            value={formData.email}
            onChange={handleChange}
            sx={{
              marginBottom: 2,
              marginTop: 2,
              display: 'block',
            }}
          />
          <TextField
            label='Password'
            name='password'
            type='password'
            variant='outlined'
            fullWidth
            size='small'
            value={formData.password}
            onChange={handleChange}
            sx={{ marginBottom: 2, display: 'block' }}
          />
          <TextField
            label='Confirm Password'
            name='confirmPassword'
            type='password'
            variant='outlined'
            fullWidth
            size='small'
            value={formData.confirmPassword}
            onChange={handleChange}
            sx={{ marginBottom: 2, display: 'block' }}
          />
          <Button
            variant='contained'
            color='primary'
            fullWidth
            onClick={handleSubmit}
            sx={{ marginBottom: 0 }}
          >
            Sign Up
          </Button>

          <Link href='/auth' variant='body2' sx={{ marginBottom: 2 }}>
            Already have an account? Sign in
          </Link>

          <Box sx={{ justifyContent: 'center', marginTop: 5 }}>
            <Typography variant='body2' gutterBottom>
              Social Login!!
            </Typography>
            <Button
              variant='contained'
              color='error'
              startIcon={<GoogleIcon />}
              sx={{ marginRight: 1 }}
            >
              Google
            </Button>
          </Box>
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

export default SignUp
