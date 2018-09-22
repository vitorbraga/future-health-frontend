import './DoctorLogin.scss';

import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

class DoctorLogin extends Component {
  static propTypes = {
    authenticate: PropTypes.func
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
    const { classes } = this.props;
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
              <Button className="login-button" variant="contained" onClick={() => this.handleLogin()}>
                Login
              </Button>
            </div>

            <div className="alert-msg" />
          </div>
        </div>
      </div>
    );
  }
}

export default DoctorLogin;
