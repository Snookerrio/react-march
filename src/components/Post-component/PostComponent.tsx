import React from 'react';
import { IPost } from '../../models/IPost';

interface IProps {
    post: IPost;
    getComments: (id: number) => void;
}

const PostComponent: React.FC<IProps> = ({ post, getComments }) => {
    return (
        <div>
            <button onClick={() => getComments(post.id)}>Show Comments</button>
            <h2>{post.id}</h2>
            <p>{post.title}</p>
            <h3>{post.body}</h3>
        </div>
    );
};

export default PostComponent;
