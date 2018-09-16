import { applyMiddleware, compose, createStore } from 'redux';
import { loadState, saveState } from 'utils/localStorage';

import rootReducer from './reducers';
import throttle from 'lodash/throttle';
import thunk from 'redux-thunk';

const initialState = {};
// const initialState = {
//   authentication: {
//     doctor: {
//       isLogged: false,
//       token: undefined
//     },
//     patient: {
//       isLogged: false,
//       token: undefined
//     }
//   }
// };

const enhancers = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const persistedState = loadState();
const store = createStore(
  rootReducer,
  { ...initialState, ...persistedState },
  enhancers
);

store.subscribe(throttle(() => {
  saveState({
    authentication: store.getState().authentication
  });
}, 1000));

export default store;
