import {
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT,
  UPDATE_ACCESS_TOKEN
} from 'constants/authentication';

const authentication = (state = [], { type, payload }) => {
  switch (type) {
    case UPDATE_ACCESS_TOKEN:
      return {
        ...state,
        [payload.entity]: {
          ...state[payload.entity],
          accessToken: payload.accessToken,
          refreshToken: payload.refreshToken
        }
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        [payload.entity]: {
          ...state[payload.entity],
          accessToken: payload.accessToken,
          refreshToken: payload.refreshToken
        }
      };
    case LOGIN_FAILURE:
      console.log('FAILURE');
    case LOGOUT:
      return {
        ...state,
        [payload.entity]: undefined
      };
    default:
      return state;
  }
};
export default authentication;
