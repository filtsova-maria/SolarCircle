import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header bg-background text-text">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code className='text-secondary bg-grey-dark rounded p-1'>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link text-accent underline"
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
