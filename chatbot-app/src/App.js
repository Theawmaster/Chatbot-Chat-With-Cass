// src/App.js
import React from 'react';
import './styles.css';
import ChatBot from './ChatBot';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Chat With Cass</h1>
      </header>
      <ChatBot />
    </div>
  );
}

export default App;
