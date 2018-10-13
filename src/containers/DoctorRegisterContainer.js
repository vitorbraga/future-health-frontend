import DoctorRegister from 'components/doctor-register/DoctorRegister';
import { connect } from 'react-redux';
import { doctorRegister } from 'actions';

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
  register: doctor => dispatch(doctorRegister(doctor)),
})

export default connect(mapStateToProps, mapDispatchToProps)(DoctorRegister)
