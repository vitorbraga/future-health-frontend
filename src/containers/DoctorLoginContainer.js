import DoctorLogin from 'components/doctor-login/DoctorLogin';
import { connect } from 'react-redux';
import { login } from 'actions';

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
  authenticate: (credentials) => dispatch(login(credentials, 'doctor')),
})

export default connect(mapStateToProps, mapDispatchToProps)(DoctorLogin)
