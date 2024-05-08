import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('posts.json')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error loading posts:', error));
  }, []);

  return (
    <div>
      <h1>Blog Posts</h1>
      {posts.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          {/* Link to the specific post */}
          <Link to={`/post/${post.id}`}>Read More</Link>
        </div>
      ))}
      {/* Link to create a new post */}

      <button>
        <Link to="/create-post">Create Post</Link>
      </button>
    </div>
  );
}

export default Home;
