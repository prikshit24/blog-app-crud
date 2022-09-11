import React, { useState } from 'react';
import { Container, Label, SubmitBtn, TextArea, TitleField } from './Components/AddPostsComponents';
import { useDispatch, useSelector } from 'react-redux';
import { useStyles } from './Components/useStyles';

import { selecctAllUsers } from '../Users/userSlice';
import { FormControl, MenuItem, Select } from '@mui/material';
import { addNewPost } from "./postSlice";

const AddPosts = () => {

    const dispatch = useDispatch();
    const classes = useStyles();

    const menuProps = {
        classes: {
            list: classes.list,
            paper: classes.paper
        },
    };

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [userId, setUserId] = useState('');
    const [addRequestStatus, setAddRequestStatus] = useState('idle')

    const users = useSelector(selecctAllUsers)

    const save = [title, content, userId].every(Boolean) && addRequestStatus === 'idle';

    const titleChange = (e) => {
        setTitle(e.target.value)
    }

    const contentChange = (e) => {
        setContent(e.target.value)
    }

    const authorChange = (e) => {
        setUserId(e.target.value)
    }

    const onSavePostClicked = () => {
        if (save) {
            try {
                setAddRequestStatus('pending')
                dispatch(addNewPost({ title, body: content, userId })).unwrap()

                setTitle('')
                setContent('')
                setUserId('')
            } catch (err) {
                console.error('Failed to save the post', err)
            } finally {
                setAddRequestStatus('idle')
            }
        }

    }

    return (
        <Container>
            <Label>Title</Label>
            <TitleField onChange={titleChange} />
            <FormControl className={classes.formControl} fullWidth>
                <Select
                    MenuProps={menuProps}
                    classes={{
                        select: classes.select,
                        icon: classes.selectIcon,
                        iconOpen: classes.iconOpen,
                    }}
                    value={userId}
                    onChange={authorChange}
                >
                    {users.map((user, index) => <MenuItem key={index} value={user.id}>{user.name}</MenuItem>)}
                </Select>
            </FormControl>
            <Label>Content</Label>
            <TextArea onChange={contentChange} />
            <SubmitBtn onClick={onSavePostClicked} disabled={!save}>Submit</SubmitBtn>
        </Container>
    )
}

export default AddPosts