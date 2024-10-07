import React from 'react';
import { render, screen } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Landing from '../routes/Landing';
import Portfolio from '../routes/Portfolio';
import Contact from '../routes/Contact';
import Header from '../components/Header';

// All tests in this file assume Landing is the component for the default route "/"

test('renders landing page on default route', () => {
  render(
    <HashRouter>
      <Landing />
    </HashRouter>,
  );

  expect(screen.getByText(/Welcome!/i)).toBeInTheDocument();
});

test('renders landing page on default route', () => {
  render(
    <HashRouter>
      <Portfolio />
    </HashRouter>,
  );

  expect(screen.getByText(/side work & passion projects/i)).toBeInTheDocument();
});

test('renders landing page on default route', () => {
  render(
    <HashRouter>
      <Contact />
    </HashRouter>,
  );

  expect(screen.getByText(/Contact Me/i)).toBeInTheDocument();
});

test('renders Header component on default route', () => {
  render(
    <HashRouter>
      <Header />
    </HashRouter>,
  );

  expect(screen.getByText(/Karsten Jepsen/i)).toBeInTheDocument();
});
