import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Background } from './components'
import React, { useState, useEffect } from 'react'

import { Home } from './components'
import { Testing } from './components'
import { Results } from './components'

import GlobalStyle from './GlobalStyles'


function App() {
  const [currentPage, setCurrentPage] = useState(null);

  const HandleNavigation = (PageClicked) => {
    setCurrentPage(PageClicked);
    console.log(PageClicked);
  }

  // global variables to keep track of
  const [state, setState] = useState({
    duration: 5,
    Level: 0,
    results: {
      wpm: 0,
      acc: "0%",
      result: 0
    }
  });

  useEffect(() => {
    setCurrentPage("Home")
  },[])
  return (
    <>
      <GlobalStyle />

      <Background HandleNavigation={HandleNavigation}></Background>
      {currentPage === 'Home' ? <Home setCurrentPage={setCurrentPage} state={state} setState={setState}></Home> : null};
      {currentPage === 'Results' ? <Results setCurrentPage={setCurrentPage} state={state}></Results> : null};
      {currentPage === 'Testing' ? <Testing setCurrentPage={setCurrentPage} state={state}></Testing> : null};

    </>
  );
}

export default App;
