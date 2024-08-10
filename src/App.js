import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { HashRouter as Router, Route, Routes} from "react-router-dom";
import Header from './header.jsx';
import Landing from './landing';
import Home from './home';
import Inbox from './Inbox';
import Contact from './contact';
import './App';

function App() {

  return (
    <>
      <Router>
        <Header />
        <CssBaseline />
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/portfolio" element={<Home />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/inbox" element={<Inbox />} />
        </Routes>
      </Router>
      </>
  );
}

export default App;
