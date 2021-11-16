import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';

// reducer!
const userReducer = (state = [], action) => {
  console.log(`Hey!!! I'm a reducer y'all!!!`);
  switch (action.type) {
    case 'USER':
        return action.payload;
    default:
        return state;
  }
};

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
