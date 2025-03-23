import React from 'react'
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

function Auth() {
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
            label='Username'
            variant='outlined'
            fullWidth
            size='small'
            sx={{
              marginBottom: 2,
              marginTop: 2,
              display: 'block',
            }}
          />
          <TextField
            label='Password'
            type='password'
            variant='outlined'
            fullWidth
            size='small'
            sx={{ marginBottom: 2, display: 'block' }}
          />
          <Button
            variant='contained'
            color='primary'
            fullWidth
            sx={{ marginBottom: 0 }}
          >
            Login
          </Button>
          <Link href='/forgotPassword' variant='body2' sx={{ marginBottom: 2 }}>
            Forgot Password
          </Link>
          --OR--
          <Link href='/SignUp' variant='body2' sx={{ marginBottom: 2 }}>
            Sign Up
          </Link>
          <Box sx={{ justifyContent: 'center', marginTop: 10 }}>
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
            flex: 1, // Take remaining space
            backgroundImage: `url(${pic})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            minHeight: '400px', // Adjust height as needed
            display: 'flex', // To center image within box
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: '20px',
          }}
        ></Box>
      </Box>
    </Container>
  )
}

export default Auth
