// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';  // Global styles (reset, body styles)
import './styles.css'; // Custom global styles
import './app.css';    // App-level styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import JS for interactive components


ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <App />
  </Router>
);
