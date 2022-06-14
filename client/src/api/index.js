import axios from 'axios';

const postUrl = 'http://localhost:5000/posts';
const userUrl = 'http://localhost:5000/user';


export const fetchPosts = () => axios.get(postUrl);
export const createPost = (newPost) => axios.post(postUrl, newPost);
export const updatePost = (id, updatedPost) => axios.patch(`${postUrl}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${postUrl}/${id}`);

export const signIn = (formData) => axios.post(userUrl + '/signin', formData);
export const signUp = (formData) => axios.post(userUrl + '/signup', formData);