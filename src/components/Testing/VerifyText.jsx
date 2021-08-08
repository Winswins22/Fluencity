import React, { useState, useEffect } from 'react'

import LiveText from './LiveText'
import GetText from './GetText'

//  difficulty: 1-3
const VerifyText = (difficulty=1) => {

  const [prevMessage, setPrevMessage] = useState("")
  const [message, setMessage] = useState("")
  const [ready, setReady] = useState(false)

  const items = GetText(difficulty)

  const title = items.title

  const wordsToDisplay = items.text.split(" ")
  const wordsToSay = items.text.split(/[ ,]+/)

  let coloredWords = wordsToDisplay

  let currentSentenceIndex = 0
  // an array of bools. 
  let isCorrectlySaid = []

  function extractNewWords(){
    if (message === prevMessage){
      return null
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
    let newWords = extractNewWords()
  }

  function outputWords(){
    for (let i = 0; i < wordsToDisplay.length; i ++){
      if (i > isCorrectlySaid.length){
        coloredWords.push(<h1> {wordsToDisplay[i]} </h1>)
      }
      else if (isCorrectlySaid[i]){
        coloredWords.push(<h1 style={{color:"green"}}> {wordsToDisplay[i]} </h1>)
      }
      else if (!isCorrectlySaid[i]){
        coloredWords.push(<h1 style={{color:"red"}}> {wordsToDisplay[i]} </h1>)
      }
    }

    return(
      <>
        {
          coloredWords.map((item) => {
            return <>{item}</>
          })
        }
      </>
    )
  }


  useEffect(() =>{
    checkWords()

    setPrevMessage(message)
  }, [message])

  return (
    <>
      <LiveText setReady={setReady} setMessage={setMessage}></LiveText>

      {
        outputWords()
      }
    </>
  )
}

export default VerifyText
