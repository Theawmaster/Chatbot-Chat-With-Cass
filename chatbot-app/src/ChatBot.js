// src/ChatBot.js
import React, { useEffect } from 'react';
import $ from 'jquery';
import './styles.css';
import './server.css';
import { getBotResponse } from './getBotResponse';

function ChatBot() {
  useEffect(() => {
    var coll = document.getElementsByClassName("collapsible");

    for (let i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    }

    firstBotMessage();

    $("#textInput").keypress(function (e) {
      if (e.which === 13) {
        e.preventDefault();
        getResponse();
      }
    });
  }, []);

  function getTime() {
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();

    if (hours < 10) {
      hours = "0" + hours;
    }

    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    let time = hours + ":" + minutes;
    return time;
  }

  function firstBotMessage() {
    let firstMessage = "Hi my name is Cass, how may I help you?";
    const botStarterMessage = document.getElementById("botStarterMessage");
    if (botStarterMessage) {
      botStarterMessage.innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';
    }

    let time = getTime();
    $("#chat-timestamp").append(time);
    const userInput = document.getElementById("userInput");
    if (userInput) {
      userInput.scrollIntoView(false);
    }
  }

  function getHardResponse(userText) {
    let botResponse = getBotResponse(userText);
    let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
    $("#chatbox").append(botHtml);
    const chatBarBottom = document.getElementById("chat-bar-bottom");
    if (chatBarBottom) {
      chatBarBottom.scrollIntoView(true);
    }
  }

  function getResponse() {
    let userText = $("#textInput").val();
    if (userText === "") return;

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';
    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    const chatBarBottom = document.getElementById("chat-bar-bottom");
    if (chatBarBottom) {
      chatBarBottom.scrollIntoView(true);
    }

    setTimeout(() => {
      getHardResponse(userText);
    }, 1000);
  }

  function buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';
    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    const chatBarBottom = document.getElementById("chat-bar-bottom");
    if (chatBarBottom) {
      chatBarBottom.scrollIntoView(true);
    }
  }

  function sendButton() {
    getResponse();
  }

  return (
    <div>
      <div id="botStarterMessage"></div>
      <div id="chatbox"></div>
      <div id="chat-bar-bottom"></div>
      <input id="textInput" type="text" />
      <button onClick={sendButton}>Send</button>
    </div>
  );
}

export default ChatBot;