import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Blog Posts</h1>
      {/* Link to a specific post by ID */}
      <Link to="/post/1">Read Post</Link>
      {/* Link to create a new post */}
      <Link to="/create-post">Create Post</Link>
    </div>
  );
}

export default Home;
