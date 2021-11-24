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
  yield takeEvery('GET_MAIL', fetchMail);
}

function* postMessage(action) {
  console.log('in PM Saga', action);
  try {
      yield axios.post('/api/message', action.payload);
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

// reducer!
const userReducer = (state = [], action) => {
  switch (action.type) {
    case 'USER':
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
