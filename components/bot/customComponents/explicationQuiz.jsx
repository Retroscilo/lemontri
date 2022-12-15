import { Button } from "@mui/material"
import { useState,useEffect } from 'react'

const ExplicationQuiz = (props) => {
  const [showButton, setShowButton] = useState (true)

  return (
    <div className="ml-[16px] flex gap-2 flex-wrap">
      <Button
        variant="outlined"
        size="small"
        disabled={!showButton}
        onClick={() => {
          setShowButton(false)
          props?.actionProvider.showQuiz()
        }}
      >
        Refaire le quiz
      </Button>
      <Button
        variant="outlined"
        size="small"
        disabled={!showButton}
        onClick={() => {
          setShowButton(false)
          props?.actionProvider.handleConseil()
        }}
      >
        Recevoir un conseil
      </Button>
    </div>
  )
}

export default ExplicationQuiz