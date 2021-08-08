import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import { Background } from './components'

import { Home } from './components'
import { Testing } from './components'
import { Results } from './components'

import GlobalStyle from './GlobalStyles'

function App() {
  return (
    <>
      <Router>
        <Background></Background>
        <GlobalStyle />

        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/testing' exact component={Testing} />
            <Route path='/results' exact component={Results} />
        </Switch>
      </Router>

    </>
  );
}

export default App;
