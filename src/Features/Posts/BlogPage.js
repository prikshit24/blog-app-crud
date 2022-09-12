import { useSelector } from 'react-redux'
import { selectPostById } from './postSlice';

import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";

import { useParams } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';

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
        <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <h5 onClick={() => { navigate(`/Blog/edit/${post.id}`) }}>Edit Post</h5>

            <p className="postCredit">
                <PostAuthor userId={post.userId} />
                <TimeAgo timestamp={post.date} />
            </p>
        </div>
    )
}

export default BlogPage