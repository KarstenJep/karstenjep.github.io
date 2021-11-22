import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { HashRouter as Router, Route, Switch} from "react-router-dom";
import Landing from './landing';
import Home from './home';
import Contact from './contact';
import './App';

function App() {

  return (
      
      <Router>
        <CssBaseline />
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/home/:id">
            <Home  />
          </Route>
          <Route exact path="/contact/:id">
            <Contact/>
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
