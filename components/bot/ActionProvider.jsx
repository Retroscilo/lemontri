"use client"

import React from "react"


const ActionProvider = ({
  createChatBotMessage,
  createClientMessage,
  setState,
  children,
}) => {
  //TODO :Peut-être faire un fetch sur une api de recyclage directement ??

  const sendText = (text) => {
    const botMessage = createChatBotMessage(text)
    console.log({createClientMessage,createChatBotMessage})
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }))
  }

  const handleJavascriptQuiz = () => {
    const message = createChatBotMessage(
      "Fantastic. Here is your quiz. Good luck!"
      // ,
      // {
      //   widget: "javascriptQuiz",
      // }
    )

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
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
