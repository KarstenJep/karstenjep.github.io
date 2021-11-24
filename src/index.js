import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';
import logger from 'redux-logger';
import axios from 'axios';
import './index.css';
import App from './App';


// The rootSaga generator function
function* rootSaga() {
  yield takeEvery('NEW_MSG', postMessage);
  yield takeEvery('NEW_NAME', postName);
  yield takeEvery('FETCH_MAIL', fetchMail);
  yield takeEvery('FETCH_VISITORS', fetchVisitors);

}

function* postMessage(action) {
  console.log('in PM Saga', action);
  try {
      yield axios.post('/api/mail', action.payload);
      // yield put({ type: 'FETCH_ELEMENTS' });
  } catch (error) {
      console.log('error posting a message', error);
  }    
}

function* postName(action) {
  console.log('in P name', action);
  try {
      yield axios.post('/api/visitor', action.payload);
      // yield put({ type: 'FETCH_ELEMENTS' });
  } catch (error) {
      console.log('error posting a message', error);
  }    
}

function* fetchMail() {
  console.log('in FM 1')
  try {
      const mail = yield axios.get('/api/mail');
      yield put({ type: 'SET_MAIL', payload: mail.data });
      console.log('in FM', mail);
  } catch (error) {
      console.log('error fetching mail', error);
  }
}

function* fetchVisitors() {
  console.log('in FV 1')
  try {
      const visitors = yield axios.get('/api/visitor');
      yield put({ type: 'VISITORS', payload: visitors.data });
      console.log('in FV', visitors.data);
  } catch (error) {
      console.log('error fetching visitors', error);
  }
}

// reducer!
const userReducer = (state = [], action) => {
  switch (action.type) {
    case 'USER':
        return action.payload;
    default:
        return state;
  }
};

const visitorsReducer = (state = [], action) => {
  switch (action.type) {
    case 'VISITORS':
        return action.payload;
    default:
        return state;
  }
};


// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// store!
const storeInstance = createStore(
  combineReducers({
          userReducer,
          visitorsReducer,
  }),
  applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

// Provider lets redux and react talk to one another
ReactDOM.render(
  <React.StrictMode>
     <Provider store={storeInstance}>
        <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
