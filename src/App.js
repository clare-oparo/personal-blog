import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Post from './components/Post';
import CreatePost from './components/CreatePost';
import Cookies from 'js-cookie';


function App() {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const checkReferrerAndSetCookie = () => {
      const simulateReferrer = "https://www.facebook.com";
      if (simulateReferrer.includes("facebook.com")) {
        Cookies.set('referredBy', 'Facebook', { expires: 7 }); //cookie expires in 7 days
        console.log('Cookie set for Facebook referral');
      } 
    };

    checkReferrerAndSetCookie();
  }, []);

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
