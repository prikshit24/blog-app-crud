import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selecctAllPosts, getPostsStatus, getPostsError, fetchPosts } from './postSlice';
import PostsRender from './PostsRender';


const PostsList = () => {

  const dispatch = useDispatch();
  const posts = useSelector(selecctAllPosts);
  const postStatus = useSelector(getPostsStatus)
  const error = useSelector(getPostsError)

  useEffect(() => {
    if(postStatus === 'idle'){
      dispatch(fetchPosts())
    }
  }, [postStatus, dispatch])

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
    <div>
      <h2>Posts</h2>
      {content}
    </div>
  )
}

export default PostsList