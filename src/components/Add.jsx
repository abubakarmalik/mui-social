import AddOutlinedIcon from '@mui/icons-material/AddOutlined'
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material'
import React, { useState } from 'react'
import Modal from '@mui/material/Modal'
import styled from '@emotion/styled'
import img from '../assets/avater.jpg'
import {
  EmojiEmotions,
  PersonAddAlt1,
  Videocam,
  Image,
  CalendarMonth,
} from '@mui/icons-material'

const CustomModal = styled(Modal)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

const UserBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  marginBottom: '20px',
})

const IconBox = styled(Box)({
  display: 'flex',
  gap: '5px',
  marginTop: '5px',
})

const Add = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <Box>
      <Tooltip
        title='Add'
        sx={{
          position: 'fixed',
          bottom: 20,
          left: { xs: 'calc(50% - 25px)', md: 30 },
        }}
      >
        <Fab color='primary' aria-label='add' onClick={handleOpen}>
          <AddOutlinedIcon />
        </Fab>
      </Tooltip>
      <CustomModal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box
          height={300}
          width={400}
          bgcolor={'background.default'}
          color={'text.primary'}
          borderRadius={5}
          p={4}
        >
          <Typography variant='h6' color='gray' textAlign='center'>
            Create Post
          </Typography>
          <UserBox>
            <Avatar src={img} />
            <Typography variant='span' fontWeight='500'>
              Abubakar Malik
            </Typography>
          </UserBox>
          <TextField
            id='standard-multiline-static'
            sx={{ width: '100%' }}
            multiline
            rows={3}
            placeholder="what's in your mind?"
            variant='standard'
          />
          <IconBox>
            <EmojiEmotions color='primary' />
            <Image color='secondary' />
            <Videocam color='success' />
            <PersonAddAlt1 color='error' />
          </IconBox>
          <ButtonGroup
            fullWidth
            variant='contained'
            aria-label='outlined primary button group'
            sx={{ marginTop: 1 }}
          >
            <Button>Post</Button>
            <Button sx={{ width: 100 }}>
              <CalendarMonth />
            </Button>
          </ButtonGroup>
        </Box>
      </CustomModal>
    </Box>
  )
}

export default Add
