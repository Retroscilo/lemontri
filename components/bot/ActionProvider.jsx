"use client"

import React from "react"
import { createClientMessage } from "react-chatbot-kit"

export const conseils = [
  "conseil 1",
  "conseil 2",
  "conseil 4",
  "conseil 5",
  "conseil 6",
]

const ActionProvider = ({
  createChatBotMessage,
  setState,
  children
}) => {
  //TODO :Peut-être faire un fetch sur une api de recyclage directement ??

  const sendText = (text) => {
    const botMessage = createChatBotMessage(text)
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }))
  }

  const sendClientText = (text) => {
    const clientMessage = createClientMessage(text)
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, clientMessage],
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

  const showQuiz = () => {
    const botMessage = createChatBotMessage(
      "Zest parti pour tester tes connaissances 🤓 !!",
      {
        widget: "quiz",
      }
    )

     setState((prev) => ({
       ...prev,
       messages: [...prev.messages, botMessage],
     }))
  }

  //Envoi un conseil alétoire
  const handleConseil = () => {
    const conseil = conseils[Math.floor(Math.random() * conseils.length)]
    sendText(conseil)
  }

  const handleConsigne = () => {
    console.log("handleConsigne")
  }


  const handleQuizAnswer = (answer, explication, isCorrect,correctAnwer) => {
    sendClientText(answer)
    if(isCorrect)
      sendText("Bien joué")
    else
      sendText(`Dommage ! La bonne réponse est : ${correctAnwer}`)
    
    const botMessage = createChatBotMessage(
      explication,
      {
        widget: "explicationQuiz",
      }
    )

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
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
            handleConseil,
            handleConsigne,
            handleQuizAnswer,
            showQuiz,
          },
        })
      })}
    </div>
  )
}

export default ActionProvider
