import Options from "./options"
import { useState, useEffect } from "react"

  const quiz = [
    {
      question: "Combien un français produit de déchet par jour ?",
      choices: ["5kg", "200g", "1kg"],
      correct: 3,
      explication: [
        "Avec l'augmentation de la consommation et de la population, la concentration des familles dans les villes, ces déchets sont devenus à la fois plus nombreux (2% de plus par an) et plus diversifiés.",
      ],
    },
    {
      question: "Faut-il laver les emballages avant de les jeter ?",
      choices: ["Oui", "Non"],
      correct: 2,
      explication: [
        "Les usines de recyclage ont des process qui nettoient les emballages avant de les transformer.",
        "Il est inutile de laver les emballages et surtout de les passer au lave-vaisselle :",
        "L'eau est une denrée rare à ne surtout pas gaspiller",
        "En lavant les emballages gras on envoie vers les stations d'épuration des eaux usées ce gras ce qui apporte un surcroît de contraintes pour leur bon fonctionnement.",
        "Il est donc inutile de laver les emballages et de les passer au lave-vaisselle.",
      ],
    },
    {
      question: "Peut-on recycler une bouteille d'huile en plastique ?",
      choices: ["Oui", "Non"],
      correct: 1,
      explication: [
        "Depuis le mois d'avril 2006, il est possible de recycler les bouteilles en plastique ayant contenu de l'huile.",
      ],
    },
    {
      question: "Peut-on recycler une bouteille d'huile en plastique ?",
      choices: ["Oui", "Non"],
      correct: 1,
      explication: [
        "Depuis le mois d'avril 2006, il est possible de recycler les bouteilles en plastique ayant contenu de l'huile.",
      ],
    },
    {
      question: "Le verre, l'aluminium et l'acier sont recyclables à l'infini",
      choices: ["Vrai", "Faux"],
      correct: 1,
      explication: [],
    },
    {
      question: "Les papiers et les cartons sont recyclables à l'infini",
      choices: ["Vrai", "Faux"],
      correct: 2,
      explication: ["Ils sont recyclables à 90%"],
    },
    {
      question: "On peut jeter son fer à cheveux dans le bac jaune",
      choices: ["Vrai", "Faux"],
      correct: 2,
      explication: [
        "Depuis le 1er janvier 2019 les petits appareils électroménagers ne peuvent plus être déposés dans le bac à couvercle jaune.",
      ],
    },
  ]

// const Quiz = () => {

//   //  const [currentQuiz, setCurrentQuiz] = useState()

//   //  useEffect(() => {
//   //    const randomQuiz = quiz[Math.floor(Math.random() * quiz.length)]
//   //    console.log({ randomQuiz })
//   //    setCurrentQuiz(randomQuiz)
//   //  }, [setCurrentQuiz])
  

//   const options = currentQuiz.choices.map((choices,index) => ({
//     text: choices,
//     handler: index == currentQuiz?.correct ? "handlerExactAnswer" : "handlerWrongAnswer"
//   }))
  
//   return (
//     <div>yoooo</div>
//     // <div className="questions">
//     //   <div>
//     //     {currentQuiz?.question}
//     //   </div>
//     //   <Options options={options} />
//     // </div>
//   )
// }

const Quiz = (props) => {
  const [currentQuiz, setCurrentQuiz] = useState()

  useEffect(() => {
    const randomQuiz = quiz[Math.floor(Math.random() * quiz.length)]
    console.log({ randomQuiz })
    setCurrentQuiz(randomQuiz)
  }, [setCurrentQuiz])

  const options = currentQuiz?.choices?.map((choices,index) => ({
    text: choices,
    argsFunc: [choices,currentQuiz?.explication, index + 1 == currentQuiz?.correct ],
    handler: "handleQuizAnswer"
  }))

  return (
    <div className="questions">
      <div>
        {currentQuiz?.question}
      </div>
      <Options options={options || []} {...props} />
    </div>
  )
}


export default Quiz

