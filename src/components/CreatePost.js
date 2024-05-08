import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Post from './Post';
import CreatePost from './CreatePost';

function App() {
  const [auth, setAuth] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login setAuth={setAuth} />} />
        <Route path="/" element={auth ? <Home /> : <Login setAuth={setAuth} />} />
        <Route path="/post/:id" element={auth ? <Post /> : <Login setAuth={setAuth} />} />
        <Route path="/create-post" element={auth ? <CreatePost /> : <Login setAuth={setAuth} />} />
      </Routes>
    </Router>
  );
}

export default App;
