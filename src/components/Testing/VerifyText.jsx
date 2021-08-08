import React, { useState, useEffect, useRef } from 'react'

import LiveText from './LiveText'
import GetText from './GetText'

//  difficulty: 1-3
const VerifyText = ({setCurrentPage, state, setState, difficulty=1}) => {




  // useEffect(() =>{
  //   checkWords()

  //   setPrevMessage(message)
  // }, [message])

  return (
    <>
      <LiveText setCurrentPage={setCurrentPage} difficulty={difficulty} state={state} setState={setState}></LiveText>
    </>
  )
}

export default VerifyText
