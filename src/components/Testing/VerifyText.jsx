import React, { useState, useEffect, useRef } from 'react'

import LiveText from './LiveText'
import GetText from './GetText'

//  difficulty: 1-3
const VerifyText = ({state, setState, difficulty=1}) => {




  // useEffect(() =>{
  //   checkWords()

  //   setPrevMessage(message)
  // }, [message])

  return (
    <>
      <LiveText difficulty={difficulty} state={state} setState={setState}></LiveText>
    </>
  )
}

export default VerifyText
