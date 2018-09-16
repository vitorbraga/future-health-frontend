import PatientLogin from 'components/patient-login/PatientLogin';
import { connect } from 'react-redux';
import { login } from 'actions';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  authenticate: credentials => dispatch(login(credentials, 'patient'))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PatientLogin);
