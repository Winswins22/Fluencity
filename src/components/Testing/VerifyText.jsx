import React, { useState, useEffect } from 'react'

import LiveText from './LiveText'
import GetText from './GetText'

//  difficulty: 1-3
const VerifyText = ({difficulty=1}) => {

  const [prevMessage, setPrevMessage] = useState("")
  const [message, setMessage] = useState("")
  const [ready, setReady] = useState(false)

  console.log("difficultyBefore", difficulty)
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

    // check for next 2 words
    for (let i = 0; i < newWords.length; i ++){
      if (newWords[i].toLowerCase === wordsToSay[i + currentSentenceIndex].toLowerCase){
        isCorrectlySaid.push(true)
        currentSentenceIndex += 1
      }
      else if (newWords[i].toLowerCase === wordsToSay[i + currentSentenceIndex + 1].toLowerCase){
        isCorrectlySaid.push(false)
        isCorrectlySaid.push(true)
        currentSentenceIndex += 2
      }
      else{
        isCorrectlySaid.push(false)
        currentSentenceIndex += 1
      }
    }
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
          ready ?
            <h1> {title} </h1>
          :
            <></>
        }
        {
          ready ?
            
            coloredWords.map((item) => {
              return <>{item}</>
            })
          :
            <></>
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
      <LiveText verbose={true} setReady={setReady} setMessage={setMessage}></LiveText>

      {
        outputWords()
      }
    </>
  )
}

export default VerifyText
