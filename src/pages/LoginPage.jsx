import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from '../components/Login';

const LoginPage = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleLogin = (username, password) => {
    if (username === 'klinikpratama' && password === 'lapaskerobokan') {
      navigate('/');
    } else {
      setError('Username atau password salah');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      {error && <p>{error}</p>}
      <Login onLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;