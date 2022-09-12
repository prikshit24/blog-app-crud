import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, PostContainer } from './components';
import { selectAllPosts, getPostsStatus, getPostsError, fetchPosts } from '../../Features/Posts/postSlice';
import PostsRender from '../../Features/Posts/PostsRender';

const Home = () => {

  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const postStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchPosts())
    }
  }, [postStatus, dispatch])

  let content;
  if (postStatus === 'loading') {
    content = <p>"Loading..."</p>;
  } else if (postStatus === 'succeeded') {
    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
    content = orderedPosts.map((post, index) => index < 9 && <PostsRender key={post.id} post={post} />)
  } else if (postStatus === 'failed') {
    content = <p>{error}</p>;
  }

  return (
    <Container>
      <h2>Latest Blogs</h2>
      <PostContainer>
      {content}
      </PostContainer>
    </Container>
  )
}

export default Home
