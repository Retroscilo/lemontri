import { Button } from "@mui/material"


const Options = ({options,...props}) => {
  console.log({props})
  
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

  const buttonsMarkup =  options.map(({id,handler,text,...option}) => (
      <Button
        variant="outlined"
        size="small"
        key={id}
        onClick={()=> props.actionProvider[handler](text)}
        className="option-button"
      >
        {text}
      </Button>
  ))

  return <div className="options-container flex gap-2 flex-wrap">{buttonsMarkup}</div>
}

export default Options
