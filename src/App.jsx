import React, { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Rightbar from './components/Rightbar'
import Feeds from './components/Feeds'
import { Box, Stack, createTheme } from '@mui/material'
import Navbar from './components/Navbar'
import Add from './components/Add'
import { ThemeProvider } from '@emotion/react'

function App() {
  const [mode, setMode] = useState('light')
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  })
  return (
    <ThemeProvider theme={theme}>
      <Box bgcolor={'background.default'} color={'text.primary'}>
        <Navbar />
        <Stack direction='row' spacing={2} justifyContent='space-between'>
          <Sidebar setMode={setMode} mode={mode} />
          <Feeds />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  )
}

export default App
