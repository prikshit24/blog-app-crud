import React from 'react';
import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import { Link, useMatch } from 'react-router-dom';

const PostsRender = ({post}) => {

  let isHome = useMatch('/');
  // let isEditBlog = useMatch(`Blog/${post.id}`);

  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.body.substring(0, 60)}...</p>
      <p>
      <Link to={isHome ? `Blog/${post.id}` : `${post.id}`}>View Post</Link>
        <PostAuthor userId={post.userId} />
        <TimeAgo timeStamp={post.date} />
      </p>
    </div>
  )
}

export default PostsRender
