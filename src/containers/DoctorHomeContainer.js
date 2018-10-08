import DoctorHome from 'components/doctor-home/DoctorHome';
import { connect } from 'react-redux';
import { getDoctor } from 'selectors';
import { getDoctorById } from 'actions';

const mapStateToProps = state => ({
  doctor: getDoctor(state),
});

const mapDispatchToProps = dispatch => ({
  getDoctor: (doctorId) => dispatch(getDoctorById(doctorId))
});

export default connect(mapStateToProps, mapDispatchToProps)(DoctorHome);
