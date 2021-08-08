import { Background } from './components'
import React, { useState, useEffect, useRef } from 'react'

import { Home } from './components'
import { Testing } from './components'
import { Results } from './components'

import GlobalStyle from './GlobalStyles'


function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const currentPageRef = useRef(0);


  const HandleNavigation = (PageClicked) => {
    setCurrentPage(PageClicked);
    currentPageRef.current = PageClicked;
  }

  // global variables to keep track of
  const [state, setState] = useState({
    duration: 0,
    Level: 1,
    results: {
      wpm: 0,
      acc: "0%",
      result: 0
    }
  });

  useEffect(() => {
    setCurrentPage("Home");
    currentPageRef.current = "Home";
  },[])
  return (
    <>
      <GlobalStyle />

      <Background HandleNavigation={HandleNavigation}></Background>
      {currentPageRef.current === 'Home' ? <Home setCurrentPage={setCurrentPage} state={state} setState={setState}></Home> : null};
      {currentPageRef.current === 'Results' ? <Results setCurrentPage={setCurrentPage} state={state}></Results> : null};
      {currentPageRef.current === 'Testing' ? <Testing setCurrentPage={setCurrentPage} state={state} setState={setState}></Testing> : null};

    </>
  );
}

export default App;
