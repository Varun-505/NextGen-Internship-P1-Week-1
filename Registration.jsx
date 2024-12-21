// src/components/Register.jsx
import React, { useState } from 'react';

const Register = () => {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registering with", fullName, email, password);
    // Add registration logic here
  };

  return (
    <div className="form-container">
      <h2 className="form-heading">Register</h2>
      <p className="form-description">Create your account to start collaborating in real-time.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
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
        <button type="submit" className="form-button">Register</button>
      </form>
      <div className="already-account">
        <p>Already have an account? <a href="/login">Login</a></p>
      </div>
    </div>
  );
};

export default Register;
