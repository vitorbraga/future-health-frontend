import 'regenerator-runtime/runtime';

import { applyMiddleware, compose, createStore } from 'redux';
import { authenticationSaga, doctorSaga } from './sagas';
import { loadState, saveState } from 'utils/localStorage';

import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import throttle from 'lodash/throttle';
import thunk from 'redux-thunk';

const initialState = {
  doctor: {},
};

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
sagaMiddleware.run(doctorSaga);

export default store;
