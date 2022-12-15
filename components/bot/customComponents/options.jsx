import { Button } from "@mui/material"
import { useState } from 'react'


const Options = ({options,className,...props}) => {
  
  // const options = [
  //   {
  //     text: "Conseil",
  //     handler: props.actionProvider.handleJavascriptQuiz,
  //     id: 1,
  //   },
  //   { text: "Quiz", handler: props.actionProvider.handleJavascriptQuiz, id: 2 },
  //   {
  //     text: "Consigne",
  //     handler: props.actionProvider.handleJavascriptQuiz, id: 3
  //   },
  // ]

  const [showButton, setShowButton] = useState(true)

  // TODO : mettre les couleurs des boutons en secondary de custom theme mui 
  const buttonsMarkup = options?.map(({ id, handler, text, ...option }) => (
    <Button
      variant="outlined"
      size="small"
      key={id + text}
      disabled={!showButton}
      color="secondary"
      className="option-button"
      onClick={() => {
        setShowButton(false)
        if (option?.argsFunc?.length > 0)
          props?.actionProvider[handler](...option?.argsFunc)
        else props?.actionProvider[handler](text)
      }}
    >
      {text}
    </Button>
  ))

  return <div className={`options-container flex gap-2 flex-wrap ${className}`}>{buttonsMarkup}</div>
}

export default Options
