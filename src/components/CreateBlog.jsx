import React, { useContext, useState } from 'react';
import { BlogContext } from './Context';
import { useNavigate } from 'react-router-dom';
import "./createblog.css"


const PostForm = () => {
  const { addPost } = useContext(BlogContext);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate=useNavigate()
  
  const handleSubmit = (e) => {
    e.preventDefault();
    addPost({ title:title, content:content ,id:Date.now()});
    setTitle('');
    setContent('');
    navigate('/postlist');
  }

  return (
    <>
    <h1>Create New Blog</h1>
    <form onSubmit={handleSubmit}>
    <label>Title</label><br/>
      <input
        type="text"
        placeholder="Enter title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br></br>
      <label>Blog</label><br/>
      <textarea
        placeholder="Enter content"
        value={content}
        onChange={(e) => setContent(e.target.value)}></textarea><br/>
      <button type='submit'>Add Post</button>
    </form>
    </>
  );
};

export default PostForm;