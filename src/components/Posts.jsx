import { Box, Checkbox } from '@mui/material'
import React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import img from '../assets/avater.jpg'
import {
  ChatBubbleOutlineOutlined,
  Favorite,
  FavoriteBorder,
  SendOutlined,
} from '@mui/icons-material'
import styled from '@emotion/styled'

const ButtonBox = styled(Box)({
  display: 'flex',
  justifyContent: 'space-around',
  width: '100%',
})
const CustomTypography = styled(Typography)({
  marginLeft: '10px',
  fontSize: 15,
})
const CardSpace = styled(Card)({
  margin: 5,
})

const Posts = () => {
  return (
    <>
      <CardSpace>
        <CardHeader
          avatar={<Avatar sx={{ width: 42, height: 42 }} src={img} />}
          action={
            <IconButton aria-label='settings'>
              <MoreVertIcon />
            </IconButton>
          }
          title='Abubakar Malik'
          subheader='30m ago'
        />
        <CardMedia
          component='img'
          height='20%'
          image='https://images.pexels.com/photos/3911869/pexels-photo-3911869.jpeg?auto=compress&cs=tinysrgb&w=600'
          alt='Paella dish'
        />
        <CardContent>
          <Typography variant='body2' color='text.secondary'>
            The Prophet's Mosque or Mosque of the Prophet. 💕🥀
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <ButtonBox>
            <IconButton aria-label='add to favorites'>
              <Checkbox
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite sx={{ color: 'red' }} />}
              />
              <CustomTypography variant='p'>Like</CustomTypography>
            </IconButton>
            <IconButton aria-label='share'>
              <ChatBubbleOutlineOutlined />
              <CustomTypography variant='p'>Comment</CustomTypography>
            </IconButton>
            <IconButton aria-label='share'>
              <SendOutlined />
              <CustomTypography variant='p'>Share</CustomTypography>
            </IconButton>
          </ButtonBox>
        </CardActions>
      </CardSpace>
    </>
  )
}

export default Posts
