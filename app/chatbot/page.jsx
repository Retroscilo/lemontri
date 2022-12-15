"use client"

import Chatbot from "react-chatbot-kit"
import "react-chatbot-kit/build/main.css"

import config from "@/components/bot/config"
import MessageParser from "@/components/bot/MessageParser"
import ActionProvider from "@/components/bot/ActionProvider"


export default function MyComponent(){
  return (
    <div className="w-screen h-screen chatbot">
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  )
}
