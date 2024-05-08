import React from 'react';
import { useParams } from 'react-router-dom';

function Post() {
  const { id } = useParams();

  return (
    <div>
      <h1>Post {id}</h1>
      <p>This is the content of post {id}.</p>
    </div>
  );
}

export default Post;
