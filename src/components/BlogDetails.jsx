import React, { useContext } from 'react';
import { BlogContext } from './Context';
import { Link, useParams } from 'react-router-dom';

const PostContent = () => {
  const { posts } = useContext(BlogContext);

  const {id} =useParams()

  const filterd = posts.filter((e)=>e.id===parseInt(id))


  return (
    <div>
      {filterd.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
      <Link to="/">Back</Link>
    </div>
  );
};

export default PostContent;