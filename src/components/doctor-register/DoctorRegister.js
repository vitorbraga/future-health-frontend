import './DoctorRegister.scss';

import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import InputSelect from '../base/InputSelect';
import InputTextField from '../base/InputTextField';
import { Link } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';

class DoctorRegister extends Component {
  static propTypes = {};

  constructor(props, context) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      registry: '',
      document: '',
      birthday: '',
      gender: '',
      email: '',
      emailConfirm: '',
      password: '',
      passwordConfirm: ''
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const genderItems = [{ id: 'F', label: 'Female'}, { id: 'M', label: 'Male'}, { id: 'O', label: 'Other'}];

    return (
      <div className="doctor-register">
        <div className="header">
          <Link to="/">
            <div className="back-wrapper">
              <span className="lnr lnr-arrow-left mr-10" />
              Back to home
            </div>
          </Link>
        </div>

        <div className="main">
          <div className="register-form">
            <section className="form-section">
              <span className="section-title">Personal info</span>
              <div className="form-box d-flex flex-row">
                <div className="col-lg-6 d-flex flex-column">
                  <InputTextField
                    label="FIRST NAME"
                    name="firstName"
                    type="text"
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="col-lg-6 d-flex flex-column">
                  <InputTextField
                    label="LAST NAME"
                    name="lastName"
                    type="text"
                    onChange={this.handleInputChange}
                  />
                </div>
              </div>
              <div className="form-box d-flex flex-row">
                <div className="col-lg-6 d-flex flex-column field-box">
                  <InputTextField
                    label="REGISTRY (CRM)"
                    name="registry"
                    type="text"
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="col-lg-6 d-flex flex-column field-box">
                  <InputTextField
                    label="CPF"
                    name="document"
                    type="text"
                    onChange={this.handleInputChange}
                  />
                </div>
              </div>
              <div className="form-box d-flex flex-row">
                <div className="col-lg-6 d-flex flex-column field-box">
                  <InputTextField
                    label="BIRTHDAY"
                    name="birthday"
                    type="text"
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="col-lg-6 d-flex flex-column field-box">
                  <InputSelect
                    label="GENDER"
                    name="gender"
                    value={this.state.gender}
                    items={genderItems}
                    onChange={this.handleInputChange}
                  />
                </div>
              </div>
            </section>

            <section className="form-section">
              <span className="section-title">Credentials info</span>
              <div className="form-box d-flex flex-row">
                <div className="col-lg-6 d-flex flex-column field-box">
                  <InputTextField
                    label="EMAIL ADDRESS"
                    name="email"
                    type="email"
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="col-lg-6 d-flex flex-column field-box">
                  <InputTextField
                    label="CONFIRM EMAIL ADDRESS"
                    name="emailConfirm"
                    type="email"
                    onChange={this.handleInputChange}
                  />
                </div>
              </div>
              <div className="form-box d-flex flex-row">
                <div className="col-lg-6 d-flex flex-column field-box">
                  <InputTextField
                    label="PASSWORD"
                    name="password"
                    type="password"
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="col-lg-6 d-flex flex-column field-box">
                  <InputTextField
                    label="CONFIRM PASSWORD"
                    name="passwordConfirm"
                    type="password"
                    onChange={this.handleInputChange}
                  />
                </div>
              </div>
            </section>

            <br />
            <br />
            <br />
            <div className="col-lg-12 d-flex justify-content-center field-box">
              <Button
                className="register-button"
                variant="contained"
                onClick={() => this.handleLogin()}
              >
                Submit
              </Button>
            </div>

            <div className="alert-msg" />
          </div>
        </div>
      </div>
    );
  }
}

export default DoctorRegister;
