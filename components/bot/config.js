"use client"

// in config.js
import { createChatBotMessage } from 'react-chatbot-kit';
import DogPicture from './dogPicture';

const botName = 'TriBot';

const config = {
  initialMessages: [
    createChatBotMessage(
      `Salut, je suis ${botName} !\n je suis là pour vous aider à mieux trier.`
    ),
  ],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: "#069B3E",
    },
    chatButton: {
      backgroundColor: "#FFCC07",
    },
  },
  widgets: [
    {
      widgetName: "dogPicture",
      widgetFunc: (props) => <DogPicture {...props} />,
    },
  ],
  customComponents: {
     // Replaces the default header
    header: () => <div style={{ backgroundColor: 'red', padding: "5px", borderRadius: "3px" }}>Discussion avec { botName }</div>
    // Replaces the default bot avatar
  },

}

export default config;