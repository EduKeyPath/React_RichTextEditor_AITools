import React from "react";
import {BrowserRouter} from "react-router-dom";
import Routes from './route';
import ChatBotComponent from './chatbot/chatbot';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <ChatBotComponent />
        <Routes/>
      </BrowserRouter>
    </>
  );
}

export default App;
