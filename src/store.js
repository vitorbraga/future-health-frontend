import 'regenerator-runtime/runtime';

import { applyMiddleware, compose, createStore } from 'redux';
import { authenticationSaga, doctorSaga } from './sagas';
import { loadState, saveState } from 'utils/localStorage';

import _ from 'lodash';
import createSagaMiddleware from 'redux-saga';
import { requestInitialState } from 'utils/reducer-utils';
import rootReducer from './reducers';
import throttle from 'lodash/throttle';
import thunk from 'redux-thunk';

const initialState = {
  authentication: {
    doctor: {
      ...requestInitialState()
    },
    patient: {
      ...requestInitialState()
    }
  },
  doctor: {}
};

const sagaMiddleware = createSagaMiddleware();

const enhancers = compose(
  applyMiddleware(thunk, sagaMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const persistedState = loadState();

const combinedState = _.merge(initialState, persistedState);

const store = createStore(
  rootReducer,
  combinedState,
  enhancers
);

store.subscribe(
  throttle(() => {
    saveState({
      authentication: {
        doctor: {
          accessToken: store.getState().authentication.doctor.accessToken,
          refreshToken: store.getState().authentication.doctor.refreshToken
        },
        patient: {}
      }
    });
  }, 1000)
);

sagaMiddleware.run(authenticationSaga);
sagaMiddleware.run(doctorSaga);

export default store;
