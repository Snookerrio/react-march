import React, { useEffect, useState } from 'react';
import PostComponent from "../Post-component/PostComponent";
import { IPost } from "../../models/IPost";
import { getAllPosts, getCommentsOfPostByID } from "../../services/api.service";
import { IComment } from "../../models/IComment";
import CommentsComponent from "../Comments-component/CommentsComponent";

const PostsComponent = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    const [comments, setComments] = useState<IComment[]>([]);

    useEffect(() => {
        getAllPosts().then(posts => setPosts(posts));
    }, []);

    const getComments = (postId: number) => {
        getCommentsOfPostByID(postId).then(comments => setComments(comments));
    };

    return (
        <div>
            <h2>Posts</h2>
            <div>
                {posts.map(post => (
                    <PostComponent key={post.id} post={post} getComments={getComments} />
                ))}
            </div>
            <h2>Comments</h2>
            <CommentsComponent comments={comments} />
        </div>
    );
};

export default PostsComponent;
