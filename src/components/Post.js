import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Post() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch('/posts.json')
      .then(response => response.json())
      .then(data => {
        const singlePost = data.find(p => p.id === parseInt(id));
        setPost(singlePost)})
      .catch(error => console.error('Error loading post:', error));
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

export default Post;
