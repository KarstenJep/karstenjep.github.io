import React from 'react';
import { render, screen } from '@testing-library/react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import '@testing-library/jest-dom';
import Landing from '../routes/Landing';
import Portfolio from '../routes/Portfolio';
import Contact from '../routes/Contact';
import Header from '../components/Header';

test('renders landing page on default route', () => {
  render(
    <HashRouter>
      <Landing />
    </HashRouter>
  );
  
  // Assuming Landing is the component for the default route "/"
  expect(screen.getByText(/Welcome!/i)).toBeInTheDocument();
});

test('renders landing page on default route', () => {
  render(
    <HashRouter>
      <Portfolio />
    </HashRouter>
  );
  
  // Assuming Landing is the component for the default route "/"
  expect(screen.getByText(/side work & passion projects/i)).toBeInTheDocument();
});

test('renders landing page on default route', () => {
  render(
    <HashRouter>
      <Contact />
    </HashRouter>
  );
  
  // Assuming Landing is the component for the default route "/"
  expect(screen.getByText(/Contact Me/i)).toBeInTheDocument();
});

test('renders Header component on default route', () => {
  render(
    <HashRouter>
      <Header />
    </HashRouter>
  );
  
  // Assuming Landing is the component for the default route "/"
  expect(screen.getByText(/Karsten Jepsen/i)).toBeInTheDocument();
});


