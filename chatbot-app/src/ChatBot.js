import React, { useEffect, useRef } from 'react';
import $ from 'jquery';
import './styles.css';
import { getBotResponse } from './getBotResponse';
import chatbotIcon from './assets/chatbot-icon.webp';

function ChatBot() {
  const chatBoxRef = useRef(null); // Create a ref for the chat box

  useEffect(() => {
    var coll = document.getElementsByClassName('collapsible');

    for (let i = 0; i < coll.length; i++) {
      coll[i].addEventListener('click', function () {
        this.classList.toggle('active');
        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      });
    }

    firstBotMessage();

    $('#textInput').keypress(function (e) {
      if (e.which === 13) {
        e.preventDefault(); // Prevent default action of form submission
        getResponse();
      }
    });
  }, []);

  function getTime() {
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();

    if (hours < 10) {
      hours = '0' + hours;
    }

    if (minutes < 10) {
      minutes = '0' + minutes;
    }

    let time = hours + ':' + minutes;
    return time;
  }

  function firstBotMessage() {
    let firstMessage = `
      Hi my name is Cass, how may I help you?
      These are the prompts you can try:
      "game", "hello", "who are you", "joke" and type "help" for more guided prompts!
    `;
    const botStarterMessage = document.getElementById('botStarterMessage');
    if (botStarterMessage) {
      botStarterMessage.innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';
    }

    let time = getTime();
    $('#chat-timestamp').append(time);
    const userInput = document.getElementById('userInput');
    if (userInput) {
      userInput.scrollIntoView(false);
    }
  }

  async function getHardResponse(userText) {
    let botResponse = await getBotResponse(userText);
    let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
    $('#chatbox').append(botHtml);
    scrollToBottom();
  }

  async function getResponse() {
    let userText = $('#textInput').val().trim();
    if (userText === '') return; // Prevent sending empty messages

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';
    $('#textInput').val('');
    $('#chatbox').append(userHtml);
    scrollToBottom();

    await getHardResponse(userText);
  }

  function buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';
    $('#textInput').val('');
    $('#chatbox').append(userHtml);
    scrollToBottom();
  }

  function sendButton() {
    getResponse();
  }

  function scrollToBottom() {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }

  return (
    <div className="outer-container">
      <header>
        <img src={chatbotIcon} alt="Chatbot Icon" className="chatbot-icon" />
        <h1>Chat with Cass</h1>
      </header>
      <div className="chat-container">
        <div className="chat-box" id="chatbox" ref={chatBoxRef}>
          <div id="botStarterMessage"></div>
        </div>
        <div className="input-container">
          <input id="textInput" type="text" placeholder="Type a message..." />
          <button onClick={sendButton}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default ChatBot;