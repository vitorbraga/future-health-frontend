import { call, put, select, takeLatest } from 'redux-saga/effects';
import { getDoctorById, registerDoctor } from 'services/doctor-service';

import { errorHandling } from 'sagas/error-handling';

export default function* doctorSaga() {
  yield [
    takeLatest('GET_DOCTOR_BY_ID_REQUEST', action => {
      const { accessToken, doctorId } = action.payload;
      return getDoctorByIdWorker(accessToken, doctorId);
    }),
    yield takeLatest('DOCTOR_REGISTER_REQUEST', action => {
      const { doctor } = action.payload;
      return registerDoctorWorker(doctor);
    })
  ];
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

function* registerDoctorWorker(doctor) {
  const response = yield call(registerDoctor, doctor);
}
