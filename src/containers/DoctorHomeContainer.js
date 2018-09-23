import { getAccessToken, getDoctor } from 'selectors';

import DoctorHome from 'components/doctor-home/DoctorHome';
import { connect } from 'react-redux';
import { getDoctorById } from 'actions';

const mapStateToProps = state => ({
  accessToken: getAccessToken(state, 'doctor'),
  doctor: getDoctor(state),
});

const mapDispatchToProps = dispatch => ({
  getDoctor: (accessToken, doctorId) => dispatch(getDoctorById(accessToken, doctorId))
});

export default connect(mapStateToProps, mapDispatchToProps)(DoctorHome);
