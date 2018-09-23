import { call, put, takeLatest } from 'redux-saga/effects';

import { getDoctorById } from 'services/doctor-service';

export default function* doctorSaga() {
  yield takeLatest('GET_DOCTOR_BY_ID_REQUEST', action => {
    const { accessToken, doctorId } = action.payload;
    return getDoctorByIdWorker(accessToken, doctorId);
  });
}

function* getDoctorByIdWorker(accessToken, doctorId) {
  try {
    const response = yield call(getDoctorById, accessToken, doctorId);

    const doctor = response.data;
    yield put({ type: 'GET_DOCTOR_SUCCESS', payload: { doctor } });
  } catch (error) {
    console.log(error);
    // yield put({ type: LOGIN_FAILURE, error });
  }
}
