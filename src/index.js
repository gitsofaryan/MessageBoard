// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Import createRoot from ReactDOM
import App from './App';
import './styles.css';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement); // Create the root using createRoot

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
