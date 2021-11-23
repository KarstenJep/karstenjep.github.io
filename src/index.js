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
}

function* postMessage(action) {
  try {
      yield axios.post('/api/message', action.payload);
      // yield put({ type: 'FETCH_ELEMENTS' });
  } catch (error) {
      console.log('error posting an element', error);
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


// function* fetchElements() {
//   try {
//       const elementsResponse = yield axios.get('/api/element');
//       yield put({ type: 'SET_ELEMENTS', payload: elementsResponse.data });
//   } catch (error) {
//       console.log('error fetching elements', error);
//   }
// }

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
