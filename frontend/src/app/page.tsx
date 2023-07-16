import React from 'react';
import logo from '../public/logo.svg';
import '../App.css';
import Image from "next/image";


export default function Page() {
  return (
    <div className="App">
      <header className="App-header bg-background text-text">
        <Image src={logo} className="App-logo" alt="logo" />
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
