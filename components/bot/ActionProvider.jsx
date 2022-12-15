"use client"

import React from "react"
import { createClientMessage } from "react-chatbot-kit"


const ActionProvider = ({
  createChatBotMessage,
  setState,
  children,
  ...props
}) => {
  //TODO :Peut-être faire un fetch sur une api de recyclage directement ??
  console.log({ createClientMessage, createChatBotMessage })

  const sendText = (text) => {
    const botMessage = createChatBotMessage(text)
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }))
  }

  const handleJavascriptQuiz = (answer) => {
    const clientMessage = createClientMessage(answer)

    const message = createChatBotMessage("Bien joué !")

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, clientMessage, message],
    }))
    }

  const handleDog = () => {
    const botMessage = createChatBotMessage(
      "Here's a nice dog picture for you!",
      {
        widget: "dogPicture",
      }
    )

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }))
  }

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleDog,
            sendText,
            handleJavascriptQuiz,
          },
        })
      })}
    </div>
  )
}

export default ActionProvider
