import React from 'react';
import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';

const PostsRender = ({post}) => {
  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <p>
        <PostAuthor userId={post.userId} />
        <TimeAgo timeStamp={post.date} />
      </p>
    </div>
  )
}

export default PostsRender
