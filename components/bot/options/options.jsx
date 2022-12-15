import { Button } from "@mui/material"


const Options = (props) => {
  const options = [
    {
      text: "Conseil",
      handler: props.actionProvider.handleJavascriptQuiz,
      id: 1,
    },
    { text: "Quiz", handler: props.actionProvider.handleJavascriptQuiz, id: 2 },
    {
      text: "Consigne",
      handler: props.actionProvider.handleJavascriptQuiz, id: 3
    },
  ]

  const buttonsMarkup = options.map((option) => (
      <Button
        variant="outlined"
        size="small"
        key={option.id}
        onClick={option.handler}
        className="option-button"
      >
        {option.text}
      </Button>
  ))

  return <div className="options-container flex gap-2 flex-wrap">{buttonsMarkup}</div>
}

export default Options
