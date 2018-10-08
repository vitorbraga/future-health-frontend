import { put, select } from 'redux-saga/effects';

export function* errorHandling(error, entity) {
  if (error.response.status === 401) {
    const refreshToken = yield select(state => state.authentication[entity].refreshToken);
    yield put({
      type: 'API_REFRESH_TOKEN_REQUEST',
      payload: { refreshToken, entity }
    });
  }
}
