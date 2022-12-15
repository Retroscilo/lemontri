"use client"
import React from "react"

const messagesBot = {
  hello: "Salut, enchanté !",
  matiereRecyclableInfini: "Le verre, l'aluminium et l'acier sont recyclables à l'infini.",
  productionDechetFrancais: "1 kg. Avec l'augmentation de la consommation et de la population, la concentration des familles dans les villes, ces déchets sont devenus à la fois plus nombreux (2% de plus par an) et plus diversifiés.",
}

const quiz = [
  {
    question: "Combien un français produit de déchet par jour ?",
    choices: ["5kg", "200g", "1kg"],
    answer: "1kg",
    explication: [
      "Avec l'augmentation de la consommation et de la population, la concentration des familles dans les villes, ces déchets sont devenus à la fois plus nombreux (2% de plus par an) et plus diversifiés.",
    ],
  },
  {
    question: "Faut-il laver les emballages avant de les jeter ?",
    choices: ["Oui", "Non"],
    answer: "Non",
    explication: [
      "Les usines de recyclage ont des process qui nettoient les emballages avant de les transformer.",
      "Il est inutile de laver les emballages et surtout de les passer au lave-vaisselle :",
      "L'eau est une denrée rare à ne surtout pas gaspiller",
      "En lavant les emballages gras on envoie vers les stations d'épuration des eaux usées ce gras ce qui apporte un surcroît de contraintes pour leur bon fonctionnement.",
      "Il est donc inutile de laver les emballages et de les passer au lave-vaisselle."
    ],
  },
]

const someWordMatch = (words=[],wordToMatch="") => {
  if(words?.length > 0 && wordToMatch)
    return words.some(word => {
      console.log(word)
      return wordToMatch.includes(word)
    })
  return false
}

const everyWordMatch = (words = [], wordToMatch = "") => {
  if (words?.length > 0 && wordToMatch)
    return words.every((word) =>{ wordToMatch.includes(word)})
  return false
}

const everySimilarWordMatch = (words = [[]], wordToMatch = "")=> {
  if (words[0].length > 0 && wordToMatch)
    return words.every((word) => someWordMatch(word,wordToMatch))
  return false
}

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    if (typeof message == 'string') {
      message = message.toLowerCase()
    }
    if (
      someWordMatch(["salut", "bonjour", "bjr", "slt", "yo", "coucou","hey","hello"], message)
    ) {
      actions.sendText(messagesBot.hello)
    }

    if (everyWordMatch(["recyclable","infini"],message)) {
      actions.sendText(messagesBot.matiereRecyclableInfini)
    }

    if (everyWordMatch(["combien", "français", "produ", "déchet"],message)) {
      actions.sendText(messagesBot.productionDechetFrancais)
    }

    if (everySimilarWordMatch([["devien"],["matière","matiere","matire"],["premières","premier"], ["recyclées","recyle","recyclé"]],message)) {
      actions.sendText(messagesBot.productionDechetFrancais)
    }
      
      
      if (message.includes("dog")) {
        actions.handleDog()
      }
  }

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        })
      })}
    </div>
  )
}

export default MessageParser
