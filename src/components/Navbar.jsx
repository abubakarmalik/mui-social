import React, { useState } from 'react'
import styled from '@emotion/styled'
import { Mail, Notifications, Facebook } from '@mui/icons-material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material'
import img from '../assets/avater.jpg'

const theme = createTheme()

const StyledToolBar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
})
const Search = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '40%',
}))
const Icons = styled(Box)(({ theme }) => ({
  display: 'none',
  alignItems: 'center',
  gap: '20px',
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
  },
}))
const UserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}))
const CustomMenu = styled(Menu)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
})

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <ThemeProvider theme={theme}>
      <AppBar position='sticky'>
        <StyledToolBar>
          <Typography
            variant='h6'
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Facebook
          </Typography>
          <Facebook sx={{ display: { xs: 'block', sm: 'none' } }} />
          <Search>
            <InputBase placeholder='search...' />
          </Search>
          <Icons>
            <Badge badgeContent={4} color='error'>
              <Mail />
            </Badge>
            <Badge badgeContent={4} color='error'>
              <Notifications />
            </Badge>
            <Avatar
              sx={{ width: 30, height: 30 }}
              src={img}
              onClick={(e) => setOpen(true)}
            />
          </Icons>
          <UserBox onClick={(e) => setOpen(true)}>
            <Avatar sx={{ width: 30, height: 30 }} src={img} />
            <Typography variant='span'>Abubakar</Typography>
          </UserBox>
          <CustomMenu
            id='demo-positioned-menu'
            aria-labelledby='demo-positioned-button'
            open={open}
            onClose={(e) => setOpen(false)}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            <MenuItem>Profile</MenuItem>
            <MenuItem>My account</MenuItem>
            <MenuItem>Logout</MenuItem>
          </CustomMenu>
        </StyledToolBar>
      </AppBar>
    </ThemeProvider>
  )
}

export default Navbar
