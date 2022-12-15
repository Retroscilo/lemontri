"use client"

import Image from 'next/image'
// in config.js
import { createChatBotMessage,createClientMessage } from 'react-chatbot-kit';
import CustomAvatar from './CustomAvatar'
import DogPicture from './dogPicture';
import Options from './options/options'
import Quiz from './options/quiz'
import Old from "/assets/icons/zesty/old.png"

const botName = 'Zesty';

const options = [
    {
      text: "Conseil",
      handler: "handleConseil",
      id: 1,
    },
    { text: "Quiz", handler: "handleJavascriptQuiz", id: 2 },
    {
      text: "Consigne",
      handler: "handleConsigne", id: 3
    },
  ]

const config = {
  initialMessages: [
    createChatBotMessage(
      `Salut, je suis ${botName} !\n je suis là pour t'aider à mieux trier.`,
      {
        widget: "quiz",
      }
    )],
  botName: botName,
  // customStyles: {
  //   botMessageBox: {
  //     backgroundColor: "#069B3E",
  //   },
  //   chatButton: {
  //     backgroundColor: "#FFCC07",
  //   },
  // },
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options options={options} {...props} />,
    },
    {
      widgetName: "dogPicture",
      widgetFunc: (props) => <DogPicture {...props} />,
    },
    
    {
      widgetName: "quiz",
      widgetFunc: (props) => <Quiz {...props} />,
    },
    
  ],
  customComponents: {
    // Replaces the default header
    // header: () => <div style={{ backgroundColor: 'red', padding: "5px", borderRadius: "3px" }}>Discussion avec { botName }</div>
    // Replaces the default bot avatar
    botAvatar: () => (
      <div className="inline-block bg-orange-400 overflow-hidden p-1 border-orange border-spacing-1 w-[40px] h-[40px] relative rounded-full">
        <Image src={Old} alt={"avatar.png"} />
      </div>
    ),
    // botChatMessage: () => <div  />,
  },
}

export default config;