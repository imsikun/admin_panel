import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { DarkModeContextProvider } from './context/darkModeContext';
import { AuthContextProvider } from './context/authentication/AuthContext';

ReactDOM.render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <AuthContextProvider>
        <Router>
          <App />
        </Router>
      </AuthContextProvider>
    </DarkModeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
