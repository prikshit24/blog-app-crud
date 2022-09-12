import React from 'react'
import { useSelector } from 'react-redux'
import { Container, PostContainer } from './Components/PostListComponents';
import { selectAllPosts, getPostsStatus, getPostsError } from './postSlice';
import PostsRender from './PostsRender';


const PostsList = () => {

  const posts = useSelector(selectAllPosts);
  const postStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  let content;
  if (postStatus === 'loading') {
    content = <p>"Loading..."</p>;
  } else if (postStatus === 'succeeded') {
    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
    content = orderedPosts.map(post => <PostsRender key={post.id} post={post} />)
  } else if (postStatus === 'failed') {
    content = <p>{error}</p>;
  }

  return (
    <Container>
      <h1>Blogs</h1>
      <PostContainer>
        {content}
      </PostContainer>
    </Container>
  )
}

export default PostsList