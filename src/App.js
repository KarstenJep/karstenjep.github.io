import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { HashRouter as Router, Route, Routes} from "react-router-dom";
import Header from './Header.jsx';
import Landing from './Landing.jsx';
import Home from './home';
import Contact from './contact';
import './App.css';

function App() {

  return (
    <Router>
      <Header />
      <CssBaseline />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/portfolio" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
