import { SET_LOGGED_STATUS, UPDATE_TOKEN } from 'constants/authentication';

import authenticate from 'services/authentication-service';

const updateToken = (entity, token) => ({
  type: UPDATE_TOKEN,
  payload: { entity, token }
});

const loginAndDispatch = (dispatch, { credentials, entity }) => {
  authenticate(credentials, entity)
    .then(success => {
      dispatch(updateToken(entity, success.data.accessToken));
    })
    .catch(error => {
      // TODO
    });
};

export const login = (credentials, entity) => (dispatch, getState) => {
  loginAndDispatch(dispatch, { credentials, entity });
  return {
    type: 'AUTHENTICATE'
  };
};
