import './DoctorLogin.scss';

import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  wrapper: {
    position: 'relative',
    width: '100%',
  },
  buttonProgress: {
    color: '#5595c7',
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
});

class DoctorLogin extends Component {
  static propTypes = {
    authenticate: PropTypes.func,
    isAuthenticating: PropTypes.bool.isRequired,
  };

  constructor(props, context) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleLogin = () => {
    this.props.authenticate({
      email: this.state.email,
      password: this.state.password
    });
  };

  render() {
    const { isAuthenticating, classes } = this.props;

    return (
      <div className="doctor-login">
        <div className="header">
          <Link to="/">
            <div className="back-wrapper">
              <span className="lnr lnr-arrow-left mr-10" />
              Back to home
            </div>
          </Link>
          <div className="registration-wrapper">
            <span>Not a member?</span>
            <Link to="/register/doctor">
              <Button className="register-button" variant="outlined">
                Register
              </Button>
            </Link>
          </div>
        </div>
        <div className="main">
          <div className="login-logo">
            <img src="static/img/logo.png" alt="" />
          </div>
          <div className="login-form">
            <form onSubmit={() => this.handleLogin()}>
              <div className="col-lg-12 d-flex flex-column field-box">
                <TextField
                  className="login-text-field"
                  label="EMAIL ADDRESS"
                  name="email"
                  type="email"
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="col-lg-12 d-flex flex-column field-box">
                <TextField
                  className="login-text-field"
                  label="PASSWORD"
                  name="password"
                  type="password"
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="col-lg-12 d-flex justify-content-center field-box">
                <div className={classes.wrapper}>
                  <Button
                      type="submit"
                      className="login-button"
                      variant="contained"
                      disabled={isAuthenticating}
                      onClick={() => this.handleLogin()}
                    >
                    Login
                  </Button>
                  {isAuthenticating && <CircularProgress size={24} className={classes.buttonProgress} />}
                </div>
              </div>
            </form>
            <div className="alert-msg" />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(DoctorLogin);
