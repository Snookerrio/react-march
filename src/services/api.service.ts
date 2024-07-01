import axios from "axios";


const api=axios.create({

    baseURL: 'https://dummyjson.com',
    headers: {
        'Content-Type': 'application/json',
    }
});


const getAllPosts = () => {
    return api.get('/posts')
        .then(response => response.data.posts);

};


const getCommentsOfPostByID = (id: number) => {
    return api.get(`/posts/${id}/comments`)
        .then(response => response.data.comments);
};





    export { getAllPosts, getCommentsOfPostByID };