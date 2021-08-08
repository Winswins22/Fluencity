import React, { useState, useEffect, useRef } from 'react'

import LiveText from './LiveText'
import GetText from './GetText'

//  difficulty: 1-3
const VerifyText = ({readyRef, difficulty=1}) => {

  const [prevMessage, setPrevMessage] = useState("")
  const messageRef = useRef("");

  const [items, setItems] = useState(GetText(difficulty))

  const title = items.title

  const wordsToDisplay = items.text.split(" ")
  const wordsToSay = items.text.split(/[ ,]+/)

  function extractNewWords(){
    if (messageRef.current === prevMessage){
      return ""
    }
    else{
      if (messageRef.current.length < prevMessage.length){
        return messageRef.current.split(" ")
      }
      else if (messageRef.current.length > prevMessage.length){
        let msg = messageRef.current
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

    setPrevMessage(messageRef.current)
  }, [messageRef.current])

  return (
    <>
      <LiveText verbose={true} readyRef={readyRef} messageRef={messageRef}></LiveText>

      {
        outputWords()
      }
    </>
  )
}

export default VerifyText
