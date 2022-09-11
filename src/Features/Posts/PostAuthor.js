import React from 'react';
import { useSelector } from 'react-redux';
import { selecctAllUsers } from '../Users/userSlice';

const PostAuthor = ({ userId }) => {
    const users = useSelector(selecctAllUsers)

    const author = users.find(user => user.id === userId)
    return (
        <span>by {author ? author.name : 'Unknown author'}</span>
    )
}

export default PostAuthor;