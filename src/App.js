import LiveText from './LiveText'
import Background from './components/Background/Background'

import { Home } from './components'
import { Testing } from './components'
import { Results } from './components'

import GlobalStyle from './GlobalStyles'

function App() {
  return (
    <>
      <Background></Background>
      <GlobalStyle />
      {/* <Home /> */}
      {/* <LiveText /> */}
      <Testing />
      {/* <Results /> */}
    </>
  );
}

export default App;
