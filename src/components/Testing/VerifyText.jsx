import React, { useState, useEffect } from 'react'

import LiveText from './LiveText'
import GetText from './GetText'

//  difficulty: 1-3
const VerifyText = ({setReady, difficulty=1}) => {

  const [prevMessage, setPrevMessage] = useState("")
  const [message, setMessage] = useState("")

  const [items, setItems] = useState(GetText(difficulty))

  const title = items.title

  const wordsToDisplay = items.text.split(" ")
  const wordsToSay = items.text.split(/[ ,]+/)

  function extractNewWords(){
    if (message === prevMessage){
      return ""
    }
    else{
      if (message.length < prevMessage.length){
        return message.split(" ")
      }
      else if (message.length > prevMessage.length){
        let msg = message
        return msg.replace(prevMessage, "").split(" ")
      }
    }
  }

  function checkWords(){

  }

  function outputWords(){
    return (
      <div style={{marginTop:"20vh"}}>
        {
          wordsToDisplay.map((word) => {
          return(
            <>
              
              <h2 style={{display: "inline"}}> {word} </h2>
              
            </>
          )
          })
        }
      </div>
    )
  }


  useEffect(() =>{
    checkWords()

    setPrevMessage(message)
  }, [message])

  return (
    <>
      <LiveText verbose={true} setReady={setReady} setMessage={setMessage}></LiveText>

      {
        outputWords()
      }
    </>
  )
}

export default VerifyText
