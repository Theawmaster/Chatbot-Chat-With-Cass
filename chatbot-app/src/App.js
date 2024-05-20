// src/App.js
import React from 'react';
import './App.css';
import ChatBot from './ChatBot';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Chat With Cass</h1>
        <ChatBot />
      </header>
    </div>
  );
}

export default App;