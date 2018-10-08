import { call, put, select, takeLatest } from 'redux-saga/effects';

import { errorHandling } from 'sagas/error-handling';
import { getDoctorById } from 'services/doctor-service';

export default function* doctorSaga() {
  yield takeLatest('GET_DOCTOR_BY_ID_REQUEST', action => {
    const { accessToken, doctorId } = action.payload;
    return getDoctorByIdWorker(accessToken, doctorId);
  });
}

function* getDoctorByIdWorker(doctorId) {
  try {
    const accessToken = yield select(
      state => state.authentication.doctor.accessToken
    );
    const response = yield call(getDoctorById, accessToken, doctorId);

    const doctor = response.data;
    yield put({ type: 'GET_DOCTOR_SUCCESS', payload: { doctor } });
  } catch (error) {
    yield errorHandling(error, 'doctor');
  }
}
