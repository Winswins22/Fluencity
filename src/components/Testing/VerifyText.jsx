import React, { useState, useEffect, useRef } from 'react'

import LiveText from './LiveText'
import GetText from './GetText'

//  difficulty: 1-3
const VerifyText = ({setReady, difficulty=1}) => {




  // useEffect(() =>{
  //   checkWords()

  //   setPrevMessage(message)
  // }, [message])

  return (
    <>
      <LiveText verbose={true} difficulty={difficulty} setReady={setReady}></LiveText>
    </>
  )
}

export default VerifyText
