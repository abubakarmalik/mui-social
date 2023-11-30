import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material'
import img from '../assets/avater.jpg'
import img1 from '../assets/avater1.jpg'
import img2 from '../assets/avater2.jpg'
import img4 from '../assets/recent.jpg'
import img5 from '../assets/recents1.jpg'
import img6 from '../assets/post.jpg'

import React from 'react'

const Rightbar = () => {
  return (
    <Box p={2} flex={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
      <Box position='fixed' width={350}>
        <Typography variant='h6' fontWeight={300} mt={2}>
          Online Friends
        </Typography>
        <AvatarGroup max={8}>
          <Avatar alt='Remy Sharp' src={img} />
          <Avatar alt='Travis Howard' src={img1} />
          <Avatar alt='Cindy Baker' src={img2} />
          <Avatar alt='Agnes Walker' src='/static/images/avatar/4.jpg' />
          <Avatar alt='Trevor Henderson' src='/static/images/avatar/5.jpg' />
          <Avatar alt='Wrevor Henderson' src='/static/images/avatar/5.jpg' />
          <Avatar alt='Urevor Henderson' src='/static/images/avatar/5.jpg' />
          <Avatar alt='Nrevor Henderson' src='/static/images/avatar/5.jpg' />
          <Avatar alt='Trevor Henderson' src='/static/images/avatar/5.jpg' />
          <Avatar alt='Mrevor Henderson' src='/static/images/avatar/5.jpg' />
          <Avatar alt='Qrevor Henderson' src='/static/images/avatar/5.jpg' />
        </AvatarGroup>
        <Typography variant='h6' fontWeight={300} mt={2} mb={2}>
          Recent Uploads
        </Typography>
        <ImageList gap={5} cols={3} rowHeight={130}>
          <ImageListItem>
            <img src={img5} alt='gallry' />
          </ImageListItem>
          <ImageListItem>
            <img src={img4} alt='gallry' />
          </ImageListItem>
          <ImageListItem>
            <img src={img6} alt='gallry' />
          </ImageListItem>
        </ImageList>
        <Typography variant='h6' fontWeight={300} mt={2}>
          Recent Chats
        </Typography>
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        >
          <ListItem alignItems='flex-start'>
            <ListItemAvatar>
              <Avatar alt='Remy Sharp' src={img2} />
            </ListItemAvatar>
            <ListItemText
              primary='Brunch this weekend?'
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component='span'
                    variant='body2'
                    color='text.primary'
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant='inset' component='li' />
          <ListItem alignItems='flex-start'>
            <ListItemAvatar>
              <Avatar alt='Travis Howard' src={img1} />
            </ListItemAvatar>
            <ListItemText
              primary='Summer BBQ'
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component='span'
                    variant='body2'
                    color='text.primary'
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant='inset' component='li' />
          <ListItem alignItems='flex-start'>
            <ListItemAvatar>
              <Avatar alt='Cindy Baker' src={img5} />
            </ListItemAvatar>
            <ListItemText
              primary='Oui Oui'
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component='span'
                    variant='body2'
                    color='text.primary'
                  >
                    Sandra Adams
                  </Typography>
                  {' — Do you have Paris recommendations? Have you ever…'}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}

export default Rightbar
