import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { HashRouter as Router, Route, Switch} from "react-router-dom";
import Landing from './landing';
import Home from './home';
import Inbox from './Inbox';
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
          <Route exact path="/visitor=:username/home/:id">
            <Home  />
          </Route>
          <Route exact path="/visitor=:username/contact/:id">
            <Contact/>
          </Route>
          <Route exact path="/inbox">
            <Inbox/>
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
