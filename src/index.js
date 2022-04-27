import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { DarkModeContextProvider } from './context/darkModeContext';

ReactDOM.render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <Router>
        <App />
      </Router>
    </DarkModeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
