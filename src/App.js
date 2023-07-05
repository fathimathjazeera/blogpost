import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { BlogProvider } from './components/Context';
import PostForm from './components/CreateBlog';
import PostList from './components/BlogList';
import PostContent from './components/BlogDetails';

function App() {
  return (
   <div>
     <BlogProvider>
        
        <Routes>
         
          <Route path="/" element={<PostForm />} />
          <Route path="/postlist" element={<PostList />} />
          <Route path="/postcontent/:id" element={<PostContent />} />

        </Routes>
      </BlogProvider>
   </div>
  );
}

export default App;
