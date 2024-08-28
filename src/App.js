import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { HashRouter as Router, Route, Routes} from "react-router-dom";
import Header from './components/Header.jsx';
import Landing from './Landing.jsx';
import Home from './Home.jsx';
import Contact from './Contact.jsx';
import { theme } from './Theme.jsx';
import './App.css';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/portfolio" element={<Home />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
