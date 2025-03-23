import React, { useState } from 'react'
import axios from 'axios'
import {
  Container,
  TextField,
  Tabs,
  Tab,
  Box,
  Typography,
  CardContent,
  Card,
  CircularProgress,
  IconButton,
} from '@mui/material'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'

function Home() {
  const [videoUrl, setVideoUrl] = useState('')
  const [activeTab, setActiveTab] = useState(null)
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleInputChange = (event) => {
    setVideoUrl(event.target.value)
    setError('')
  }

  const handleTabChange = async (event, newValue) => {
    if (!videoUrl) {
      setError('Please enter the YouTube URL')
      return
    }
    setActiveTab(newValue)
    setLoading(true)
    const tabNames = ['LinkedIn', 'Blog', 'Tweet']
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND}/${tabNames[newValue]}`,
        {
          params: { url: videoUrl },
        }
      )
      setContent(response.data.response.replace(/\n/g, '<br/>'))
    } catch (error) {
      setContent('Error fetching data')
    }
    setLoading(false)
  }

  const handleCopy = () => {
    if (content) {
      navigator.clipboard.writeText(content.replace(/<br\/>/g, '\n'))
      alert('Content copied to clipboard!')
    }
  }

  return (
    <Container maxWidth='md'>
      <Box sx={{ minHeight: '300vh', padding: 4 }}>
        <Typography variant='h4' gutterBottom>
          Generate Content
        </Typography>
        <TextField
          fullWidth
          label='Enter YouTube URL'
          variant='outlined'
          value={videoUrl}
          onChange={handleInputChange}
          sx={{ marginBottom: 3 }}
        />
        {error && (
          <Typography color='error' sx={{ marginBottom: 3 }}>
            {error}
          </Typography>
        )}
        <Card
          sx={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: 4,
            boxShadow: 5,
            borderRadius: 2,
            minHeight: '300px',
          }}
        >
          <Tabs
            orientation='vertical'
            value={activeTab}
            onChange={handleTabChange}
            sx={{ borderRight: 3, borderColor: 'divider' }}
          >
            <Tab label='LinkedIn Post' />
            <Tab label='Blog Post' />
            <Tab label='Twitter Post' />
          </Tabs>
          <Box sx={{ flex: 1, overflowY: 'auto' }}>
            <CardContent>
              <Typography variant='h5'>
                {['LinkedIn Post', 'Blog Post', 'Twitter Post'][activeTab]}
              </Typography>
              {loading ? (
                <CircularProgress />
              ) : (
                <Typography
                  variant='body1'
                  dangerouslySetInnerHTML={{ __html: content }}
                />
              )}
            </CardContent>
          </Box>
          {content && (
            <IconButton onClick={handleCopy}>
              <ContentCopyIcon />
            </IconButton>
          )}
        </Card>
      </Box>
    </Container>
  )
}

export default Home
