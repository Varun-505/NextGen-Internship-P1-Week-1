// src/components/Login.jsx
import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with", email, password);
    // Add login logic here
  };

  return (
    <div className="form-container">
      <h2 className="form-heading">Login</h2>
      <p className="form-description">Enter your credentials to access your account.</p>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          className="form-input"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="form-input"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="form-button">Login</button>
      </form>
      <div className="already-account">
        <p>Don't have an account? <a href="/register">Register</a></p>
      </div>
    </div>
  );
};

export default Login;
