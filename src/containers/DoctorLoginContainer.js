import DoctorLogin from 'components/doctor-login/DoctorLogin';
import { connect } from 'react-redux';
import { isAuthenticating } from 'selectors';
import { login } from 'actions';

const mapStateToProps = (state) => ({
  isAuthenticating: isAuthenticating(state, 'doctor'),
})

const mapDispatchToProps = (dispatch) => ({
  authenticate: (credentials) => dispatch(login(credentials, 'doctor')),
})

export default connect(mapStateToProps, mapDispatchToProps)(DoctorLogin)
