// src/App.js
import React from 'react';
import './styles/header.css';
import './styles/chatbot.css';
import './styles/messages.css';
import './styles/input.css';
import ChatBot from './components/ChatBot';

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
