"use client"
import React, { useState, useEffect } from "react"

const OpenAi = ({message="Hello"}) => {
  const [data, setData] = useState(null)

  useEffect(() => {
      const sendMessage = async () => {
        const init = {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message }),
        }
        const res = await fetch("/api/openai", init)
          .then((res) => res.json())
          .then(({ name }) => {
            console.log({ name })
            setData(name)
            return data
          })
      }
    console.log("ça marche ")
    sendMessage()
  },[])


  return (
    <div>
      {data ? (
        <div>
          <h2>Data from local api</h2>
          {data}
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  )
}

export default OpenAi
