import React from 'react'
import AddPosts from '../../Features/Posts/AddPosts'
import PostsList from '../../Features/Posts/PostsList'
import { Container } from './components'

const Home = () => {
  return (
    <Container>
      <PostsList />
      <AddPosts />
    </Container>
  )
}

export default Home
