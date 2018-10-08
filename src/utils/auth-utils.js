import jwt_decode from 'jwt-decode';

const MILISEC_MULTIPLIER = 1000;

export const jwtTokenIsValid = token => {

  if (!token) {
    return false;
  }

  const { exp } = jwt_decode(token);
  if (exp && new Date(exp * MILISEC_MULTIPLIER) > Date.now()) {
    return true;
  }

  return false;
}
