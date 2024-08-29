import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { HashRouter as Router, Route, Routes} from "react-router-dom";
import Header from './components/Header.tsx';
import Landing from './Landing.tsx';
import Home from './Home.tsx';
import Contact from './Contact.tsx';
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
