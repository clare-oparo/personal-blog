import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

function Login({setAuth}) {
    const [user, setUser] = useState('');
    const navigate = useNavigate();

    const login = () => {
        setAuth(true);
        navigate('/');
    }
  return (
    <div>
        <input
        type='text'
        placeholder='Enter username'
        value={user}
        onChange={e => setUser(e.target.value)}
        />

        <button onClick={login}>Login</button>
    </div>
  )
}

export default Login;


