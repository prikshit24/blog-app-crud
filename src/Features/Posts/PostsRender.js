import React from 'react';
import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import { Link, useMatch } from 'react-router-dom';
import { Container, PostBreaf, PostDetailContainer, PostTitle } from './Components/PostRenderComponents';

const PostsRender = ({post}) => {

  let isHome = useMatch('/');

  return (
    <Container>
      <PostTitle>{post.title}</PostTitle>
      <PostBreaf>{post.body.substring(0, 60)}...</PostBreaf>
      <PostDetailContainer>
      <Link to={isHome ? `Blog/${post.id}` : `${post.id}`}>View Post</Link>
        <PostAuthor userId={post.userId} />
        <TimeAgo timeStamp={post.date} />
      </PostDetailContainer>
    </Container>
  )
}

export default PostsRender
