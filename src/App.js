import logo from './logo.svg';
import './App.css';

import { API_BASE_URL, DEFAULT_STYLE_PREFERENCES } from './utils/constants';
import { formatDate, truncateString } from './utils/helpers';

// API_BASE_URLやformatDateなどを使用

import React from 'react';
import { UserProvider } from './context/UserContext';
import { CoordinateProvider } from './context/CoordinateContext';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
