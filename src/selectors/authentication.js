import { jwtTokenIsValid } from 'utils/auth-utils';

export const isLogged = (state, entity) => {
  if (state.authentication[entity]) {
    const { accessToken } = state.authentication[entity];
    return jwtTokenIsValid(accessToken);
  }
  return false;
}

