import React from 'react';
import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';

const PostsRender = ({post}) => {
  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.body.substring(0, 100)}</p>
      <p>
        <PostAuthor userId={post.userId} />
        <TimeAgo timeStamp={post.date} />
      </p>
    </div>
  )
}

export default PostsRender
