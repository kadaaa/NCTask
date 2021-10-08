import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import './App.css';
import Home from './components/Home';
import LinkStations from './components/LinkStations';
import NavBar from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Container>
        <Switch>
          <Route path='/stations'>
            <LinkStations />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
