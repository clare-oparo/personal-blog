import React from 'react';

function CreatePost() {
  return (
    <div>
      <h1>Create a Post</h1>
      <form>
        <input type="text" placeholder="Title" />
        <textarea placeholder="Content"></textarea>
        <button type="submit">Save Post</button>
      </form>
    </div>
  );
}

export default CreatePost;
