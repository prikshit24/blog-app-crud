import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectPostById, updatePost, deletePost } from './postSlice'
import { useParams, useNavigate } from 'react-router-dom'

import { selectAllUsers } from "../Users/userSlice";
import { FormControl, MenuItem, Select } from '@mui/material';
import { useStyles } from './Components/useStyles'
import { BtnContainer, Container, DeleteBtn, FormContainer, Label, SubmitBtn, TextArea, TitleField } from './Components/EditBlogComponents';

const EditBlog = () => {
    const { postId } = useParams()
    const navigate = useNavigate()
    const classes = useStyles()

    const post = useSelector((state) => selectPostById(state, Number(postId)))
    const users = useSelector(selectAllUsers)

    const [title, setTitle] = useState(post?.title)
    const [content, setContent] = useState(post?.body)
    const [userId, setUserId] = useState(post?.userId)
    const [requestStatus, setRequestStatus] = useState('idle')

    const dispatch = useDispatch()

    if (!post) {
        return (
            <section>
                <h2>Post not found!</h2>
            </section>
        )
    }

    const titleChanged = e => setTitle(e.target.value)
    const contentChanged = e => setContent(e.target.value)
    const authorChanged = e => setUserId(Number(e.target.value))

    const canSave = [title, content, userId].every(Boolean) && requestStatus === 'idle';

    const onSavePostClicked = () => {
        if (canSave) {
            try {
                setRequestStatus('pending')
                dispatch(updatePost({ id: post.id, title, body: content, userId })).unwrap()

                setTitle('')
                setContent('')
                setUserId('')
                navigate(`/Blog/${postId}`)
            } catch (err) {
                console.error('Failed to save the post', err)
            } finally {
                setRequestStatus('idle')
            }
        }
    }

    const menuProps = {
        classes: {
            list: classes.list,
            paper: classes.paper
        },
    };

    const deletePostClicked = () => {
        try {
            setRequestStatus('pending')
            dispatch(deletePost({ id: post.id })).unwrap()

            setTitle('')
            setContent('')
            setUserId('')
            navigate('/')
        } catch (err) {
            console.error('Failed to delete the post', err)
        } finally {
            setRequestStatus('idle')
        }
    }

    return (
        <Container>
            <h2>Edit Post</h2>
            <FormContainer>
                <div>
                    <Label>Post Title:-</Label>
                    <TitleField value={title} onChange={titleChanged} />
                </div>
                <div>
                    <Label>Author:-</Label>
                    <FormControl className={classes.formControl} fullWidth>
                        <Select
                            MenuProps={menuProps}
                            classes={{
                                select: classes.select,
                                icon: classes.selectIcon,
                                iconOpen: classes.iconOpen,
                            }}
                            value={userId} onChange={authorChanged}
                        >
                            {users.map((user, index) => <MenuItem key={index} value={user.id}>{user.name}</MenuItem>)}
                        </Select>
                    </FormControl>
                </div>
                <div>
                    <Label >Content:-</Label>
                    <TextArea
                        value={content}
                        onChange={contentChanged}
                    />
                </div>
                <BtnContainer>
                    <SubmitBtn
                        onClick={onSavePostClicked}
                        disabled={!canSave}
                    >
                        Save Post
                    </SubmitBtn>
                    <DeleteBtn onClick={deletePostClicked} >
                        Delete Post
                    </DeleteBtn>
                </BtnContainer>
            </FormContainer>
        </Container >
    )
}

export default EditBlog
