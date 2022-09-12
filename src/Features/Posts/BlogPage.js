import { useSelector } from 'react-redux'
import { selectPostById } from './postSlice';

import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";

import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, styled, Button } from "@mui/material";

const Container = styled(Box)(({theme}) => ({
    padding:'50px 100px',
    gap:'20px',
    display:'flex',
    flexDirection:'column'
}))

const PostTitle = styled(Typography)(({theme}) => ({
    fontSize:'22px',
    fontWeight:'bold',
}))

const PostContent = styled(Typography)(({theme}) => ({
    fontSize:'18px',
}))

const PostDetailContainer = styled(Box)(({theme}) => ({
    display:'flex',
    alignItems:'center',
    gap:'4px',
}))

const EditBtn = styled(Button)(({theme}) => ({
    backgroundColor:'grey',
    height:'50px',
    width:'150px',
    color:'#fff',
    ':hover':{
        backgroundColor:'grey',
    }
}))


const BlogPage = () => {
    const { postId } = useParams()
    const navigate = useNavigate()

    const post = useSelector((state) => selectPostById(state, Number(postId)))

    if (!post) {
        return (
            <section>
                <h2>Post not found!</h2>
            </section>
        )
    }

    return (
        <Container>
            <PostTitle>{post.title}</PostTitle>
            <PostContent>{post.body}</PostContent>

            <PostDetailContainer>
                <PostAuthor userId={post.userId} />
                <TimeAgo timestamp={post.date} />
            </PostDetailContainer>
            <EditBtn onClick={() => { navigate(`/Blog/edit/${post.id}`) }}>Edit Post</EditBtn>
        </Container>
    )
}

export default BlogPage