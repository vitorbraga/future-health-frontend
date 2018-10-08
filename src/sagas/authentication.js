import {
  LOGIN_FAILURE,
  LOGIN_START,
  LOGIN_SUCCESS,
  UPDATE_ACCESS_TOKEN
} from 'constants/authentication';
import { call, put, takeLatest } from 'redux-saga/effects';
import {
  login,
  refreshToken as refreshTokenApi
} from 'services/authentication-service';

import history from '../history';

export default function* authenticationSaga() {
  yield [
    takeLatest('API_LOGIN_REQUEST', action => {
      const { credentials, entity } = action.payload;
      return loginWorker(credentials, entity);
    }),
    takeLatest('API_REFRESH_TOKEN_REQUEST', action => {
      const { refreshToken, entity } = action.payload;
      return refreshTokenWorker(refreshToken, entity);
    })
  ];
}

function* loginWorker(credentials, entity) {
  try {
    yield put({ type: LOGIN_START, payload: { entity } });
    const response = yield call(login, credentials, entity);
    const { accessToken, refreshToken } = response.data;

    yield put({
      type: LOGIN_SUCCESS,
      payload: { accessToken, refreshToken, entity }
    });

    yield history.push(`/${entity}`);
  } catch (error) {
    yield put({ type: LOGIN_FAILURE, payload: { entity, error } });
  }
}

function* refreshTokenWorker(refreshTokenString, entity) {
  try {
    const response = yield call(refreshTokenApi, refreshTokenString, entity);

    const { accessToken, refreshToken } = response.data;

    yield put({
      type: UPDATE_ACCESS_TOKEN,
      payload: { accessToken, refreshToken, entity }
    });
  } catch (error) {
    yield put({ type: LOGIN_FAILURE, error }); //fixme
  }
}
