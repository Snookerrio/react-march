import React, { FC } from 'react';
import { IComment } from "../../models/IComment";

interface IProps {
    comments: IComment[];
}

const CommentsComponent: FC<IProps> = ({ comments }) => {
    return (
        <ul>
            {comments.map(comment => (
                <li key={comment.id}>
                    {comment.id}: {comment.body} (Post ID: {comment.postId})
                </li>
            ))}
        </ul>
    );
};

export default CommentsComponent;
