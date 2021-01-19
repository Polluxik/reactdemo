import React from 'react';
import logo from './logo.svg';
import './App.css';
import { H1 } from "./components/atomic/H1";
import { Counter } from './components/atomic/Counter';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <H1>Demo</H1>
        <Counter initialValue={10}/>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
