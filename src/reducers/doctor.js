const doctor = (state = {}, { type, payload }) => {
  switch (type) {
    case 'GET_DOCTOR_SUCCESS':
      return payload.doctor;
    default:
      return state;
  }
};
export default doctor;
