import React, { useState } from 'react';

export const Login = ({ setIsLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (username === 'admin' && password === '1234') {
            setIsLogin(true);
        } 

        else {
            alert('wrong credentials');
        }
    };

     return (
        <div style={{ width:'300px', margin: '100px auto',}}>
          
          <input 
          type="text" 
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}         
          />

          <br /><br />

          <input 
          type="text"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}

           />

           <br /><br />

           <button onClick={handleLogin}>Login</button>

        </div>
     );
};