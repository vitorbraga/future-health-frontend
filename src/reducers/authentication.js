import { UPDATE_TOKEN } from 'constants/authentication';

const authentication = (state = [], { type, payload }) => {
  switch (type) {
    case UPDATE_TOKEN:
      return {
        ...state,
        [payload.entity]: {
          ...state[payload.entity],
          token: payload.token
        }
      };
    default:
      return state;
  }
};
export default authentication;
