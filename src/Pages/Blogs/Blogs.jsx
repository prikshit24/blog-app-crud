import { Typography } from '@mui/material'
import React, { useState } from 'react'
import AddPosts from '../../Features/Posts/AddPosts'
import PostsList from '../../Features/Posts/PostsList'
import { Container } from '../Home/components'

const Blogs = () => {

  const [createPost,setCreatePost] = useState(false)

  return (
    <Container>
    <Typography sx={{cursor:'pointer'}} onClick={ () => setCreatePost(!createPost) }>Post New Blog</Typography>
      {createPost && <AddPosts />}
      <PostsList />
    </Container>
  )
}

export default Blogs