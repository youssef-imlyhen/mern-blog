import React from 'react'
import { useSelector } from 'react-redux';
import PostCard from './PostCard/PostCard';
import './posts.css';

const Posts = () => {
  const posts = useSelector((state) => state.posts instanceof Array ? state.posts : []);
  console.log(posts);
  return (
    !posts.length ? <h1>loading content</h1> : (
      <div className="posts-container" style={{display: "flex", flexWrap: "wrap"}} >
          {posts.map((post) => (
            <PostCard key={post._id.toString()} post={post} />
          ))}
      </div>
    )
  );
};

export default Posts;