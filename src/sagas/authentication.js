import { call, put, takeLatest } from 'redux-saga/effects';

import { login } from 'services/authentication-service';

export default function* authenticationSaga() {
  yield takeLatest('API_LOGIN_REQUEST', action => {
    const { credentials, entity } = action.payload;
    return loginWorker(credentials, entity);
  });
}

function* loginWorker(credentials, entity) {
  try {
    const response = yield call(login, credentials, entity);

    const { accessToken, refreshToken } = response.data;

    yield put({ type: 'LOGIN_SUCCESS', payload: { accessToken, refreshToken, entity } });
  } catch (error) {
    yield put({ type: 'LOGIN_FAILURE', error });
  }
}
