import React from 'react'
import { useSelector } from 'react-redux'
import { selecctAllPosts } from './postSlice';
import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';

const PostsList = () => {

    const posts = useSelector(selecctAllPosts)

    const orderPosts = posts.slice().sort((a,b) => b.date.localeCompare(a.date))

    const renderPosts = orderPosts.map((post) => (
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <p>
              <PostAuthor userId={post.userId} />
              <TimeAgo timeStamp={post.date}/>
            </p>
        </div>
    ))
  return (
    <div>
        <h2>Posts</h2>
        {renderPosts}
    </div>
  )
}

export default PostsList