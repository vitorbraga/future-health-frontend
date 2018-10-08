import {
  LOGIN_FAILURE,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGOUT,
  UPDATE_ACCESS_TOKEN
} from 'constants/authentication';
import {
  requestErrorState,
  requestInitialState,
  requestLoadingState,
  requestSuccessState,
} from 'utils/reducer-utils';

const initialState = {
  doctor: {},
  patient: {}
};

const authentication = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_START:
      return {
        ...state,
        [payload.entity]: {
          ...requestLoadingState()
        }
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        [payload.entity]: {
          ...requestSuccessState(),
          accessToken: payload.accessToken,
          refreshToken: payload.refreshToken
        }
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        [payload.entity]: {
          ...requestErrorState({}, { type, payload }),
        }
      };
    case LOGOUT:
      return {
        ...state,
      };
    case UPDATE_ACCESS_TOKEN:
      return {
        ...state,
        [payload.entity]: {
          ...state[payload.entity],
          accessToken: payload.accessToken,
          refreshToken: payload.refreshToken
        }
      };
    default:
      return state;
  }
};
export default authentication;
