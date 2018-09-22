import { LOGIN_FAILURE, LOGIN_SUCCESS, UPDATE_TOKEN } from 'constants/authentication';

const authentication = (state = [], { type, payload }) => {
  switch (type) {
    case UPDATE_TOKEN:
      return {
        ...state,
        [payload.entity]: {
          ...state[payload.entity],
          accessToken: payload.accessToken,
          refreshToken: payload.refreshToken,
        }
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        [payload.entity]: {
          ...state[payload.entity],
          accessToken: payload.accessToken,
          refreshToken: payload.refreshToken,
        }
      };
    case LOGIN_FAILURE:
      console.log('FAILURE');
    default:
      return state;
  }
};
export default authentication;
