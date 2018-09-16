import './DoctorLogin.scss';

import React, { Component } from 'react';

import InputTextField from 'components/base/InputTextField';
import PropTypes from 'prop-types';
import SubmitButton from 'components/base/SubmitButton';

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
    return (
      <div className="doctor-login">
        <div className="login-wrapper">
          <div className="col-lg-12 d-flex flex-column">
            <InputTextField
              type="email"
              name="email"
              placeholder="Email"
              onChange={this.handleInputChange}
            />
          </div>
          <div className="col-lg-12 d-flex flex-column">
            <InputTextField
              type="password"
              name="password"
              placeholder="Password"
              onChange={this.handleInputChange}
            />
          </div>

          <div className="col-lg-12 d-flex justify-content-center send-btn">
            <SubmitButton label="Login" onClick={() => this.handleLogin()} />
          </div>

          <div className="alert-msg" />
        </div>
      </div>
    );
  }
}

export default DoctorLogin;
