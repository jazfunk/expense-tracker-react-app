import React from 'react';
import logo from './logo.svg';
import FirstTest from './FirstTestFromTheHip'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Evolving, living.
        </p>
        <a
          className="App-link"
          href="https://jeff-king.net"
          target="_blank"
          rel="noopener noreferrer"
        >
          jeff-king.net
        </a>
        <FirstTest />
      </header>
    </div>
  );
}

export default App;
