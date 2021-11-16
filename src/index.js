import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

// reducer!
const userReducer = (state = [], action) => {
  console.log('in UR', action.payload)
  switch (action.type) {
      case 'USER':
          return action.payload;
      default:
          return state;
  }
}

// store!
const storeInstance = createStore(
  combineReducers(
      {
          userReducer,
      }
  )
);

// Provider lets redux and react talk to one another
ReactDOM.render(
  <React.StrictMode>
      <Provider store={storeInstance}>
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
