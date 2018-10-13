export const getDoctorById = (accessToken, doctorId) => ({
  type: 'GET_DOCTOR_BY_ID_REQUEST',
  payload: { accessToken, doctorId }
});

export const doctorRegister = doctor => ({
  type: 'DOCTOR_REGISTER_REQUEST',
  payload: { doctor }
});
