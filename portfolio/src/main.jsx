import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Import your main App component

// This is the entry point where your React app is rendered into the 'root' div in index.html
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App /> {/* Render your App component */}
  </React.StrictMode>,
);
