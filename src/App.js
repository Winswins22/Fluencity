import './App.css';
import LiveText from './LiveText'

import { Home } from './components'
import { Testing } from './components'

import GlobalStyle from './GlobalStyles'
import Results from './components/Results/Results'

function App() {
  return (
    <>
      <LiveText></LiveText>
      <GlobalStyle />
      <Home />
      {/* <Testing /> */}
      {/* <Results /> */}
    </>
  );
}

export default App;
