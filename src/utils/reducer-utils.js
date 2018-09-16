import { prop } from 'ramda';

export const requestInitialState = (state = {}) => ({
  ...state,
  isLoading: false,
  loaded: false,
  error: null,
});

export const requestLoadingState = state => ({
  ...state,
  isLoading: true,
  loaded: false,
});

export const requestSuccessState = state => ({
  ...state,
  isLoading: false,
  loaded: true,
});

export const requestErrorState = (state, action, errorExtractor = prop('error')) => ({
  ...state,
  isLoading: false,
  loaded: false,
  error: errorExtractor(action),
});

export const requestAlteredConfigState = (state, config) => ({
  ...state,
  ...config,
});
