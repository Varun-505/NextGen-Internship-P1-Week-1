// src/App.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import Registration from './components/Registration';
import Login from './components/Login';
import Dashboard from './components/Dashboard'; // Your Dashboard component
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
