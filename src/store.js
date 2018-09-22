import 'regenerator-runtime/runtime';

import { applyMiddleware, compose, createStore } from 'redux';
import { loadState, saveState } from 'utils/localStorage';

import { authenticationSaga } from './sagas';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import throttle from 'lodash/throttle';
import thunk from 'redux-thunk';

const initialState = {};

const sagaMiddleware = createSagaMiddleware();

const enhancers = compose(
  applyMiddleware(thunk, sagaMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const persistedState = loadState();
const store = createStore(
  rootReducer,
  { ...initialState, ...persistedState },
  enhancers
);

store.subscribe(
  throttle(() => {
    saveState({
      authentication: store.getState().authentication
    });
  }, 1000)
);

sagaMiddleware.run(authenticationSaga);

export default store;
