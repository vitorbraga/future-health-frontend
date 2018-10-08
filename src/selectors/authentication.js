import { jwtTokenIsValid } from 'utils/auth-utils';

export const getAccessToken = (state, entity) =>
  state.authentication[entity].accessToken;

export const isLogged = (state, entity) => {
  if (state.authentication[entity]) {
    const { accessToken } = state.authentication[entity];
    return jwtTokenIsValid(accessToken);
  }
  return false;
};

export const isAuthenticating = (state, entity) =>
  state.authentication[entity].isLoading;
