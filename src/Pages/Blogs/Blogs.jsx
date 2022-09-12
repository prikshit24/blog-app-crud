import React, { useState } from 'react'
import AddPosts from '../../Features/Posts/AddPosts'
import PostsList from '../../Features/Posts/PostsList'
import { Container } from '../Home/components'
import { Box, Typography, styled } from "@mui/material";

const Heading = styled(Typography)(({theme}) => ({
  fontSize:'24px',
  fontWeight:'bold',
  cursor:'pointer',
}))

const Blogs = () => {

  const [createPost,setCreatePost] = useState(false)

  return (
    <Container>
    {!createPost && <Heading onClick={ () => setCreatePost(true) }>Click Here To Post New Blog</Heading>}
    {createPost && <Heading >Post New Blog</Heading>}
      {createPost && <AddPosts setCreatePost={setCreatePost} />}
      <PostsList />
    </Container>
  )
}

export default Blogs