import './DoctorRegister.scss';

import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import InputMaskedField from 'components/base/input/InputMaskedField';
import InputSelect from 'components/base/input/InputSelect';
import InputTextField from 'components/base/input/InputTextField';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { isEmailValid } from 'utils/validation-utils';

class DoctorRegister extends Component {
  static propTypes = {
    register: PropTypes.func
  };

  constructor(props, context) {
    super(props);
    this.state = {
      form: {
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
      },
      errors: {
        firstName: false,
        lastName: false,
        registry: false,
        document: false,
        birthday: false,
        gender: false,
        email: false,
        emailConfirm: false,
        password: false,
        passwordConfirm: false
      }
    };
  }

  validateForm = () => {
    const form = this.state.form;
    const emptyFields = Object.keys(form).filter(k => form[k] === '');
    if (emptyFields.length > 0) {
      return emptyFields;
    }

    if (form.email !== form.emailConfirm) {
      return ['email', 'emailConfirm'];
    }

    if (form.password !== form.passwordConfirm) {
      return ['password', 'passwordConfirm'];
    }

    if (!isEmailValid(form.email) || !isEmailValid(form.emailConfirm)) {
      return ['email'];
    }

    return [];
  };

  isFieldWithError = fieldName => {
    return this.state.errors[fieldName] && this.state.form[fieldName] === '';
  };

  handleInputChange = e => {
    this.setState({
      form: { ...this.state.form, [e.target.name]: e.target.value }
    });
  };

  handleRegister = () => {
    const valid = this.validateForm();
    if (valid.length > 0) {
      const errors = {};
      valid.forEach(v => {
        errors[v] = true;
      });

      this.setState({ errors });
      return;
    }
  };

  render() {
    const genderItems = [
      { id: 'F', label: 'Female' },
      { id: 'M', label: 'Male' },
      { id: 'O', label: 'Other' }
    ];

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
                    error={this.isFieldWithError('firstName')}
                    label="FIRST NAME"
                    name="firstName"
                    type="text"
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="col-lg-6 d-flex flex-column">
                  <InputTextField
                    error={this.isFieldWithError('lastName')}
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
                    error={this.isFieldWithError('registry')}
                    label="REGISTRY (CRM)"
                    name="registry"
                    type="text"
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="col-lg-6 d-flex flex-column field-box">
                  <InputMaskedField
                    error={this.isFieldWithError('document')}
                    label="DOCUMENT (CPF)"
                    name="document"
                    mask="999.999.999-99"
                    type="text"
                    onChange={this.handleInputChange}
                  />
                </div>
              </div>
              <div className="form-box d-flex flex-row">
                <div className="col-lg-6 d-flex flex-column field-box">
                  <InputMaskedField
                    error={this.isFieldWithError('birthday')}
                    label="BIRTHDAY (dd/mm/yyyy)"
                    name="birthday"
                    mask="99/99/9999"
                    type="text"
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="col-lg-6 d-flex flex-column field-box">
                  <InputSelect
                    error={this.isFieldWithError('gender')}
                    label="GENDER"
                    name="gender"
                    value={this.state.form.gender}
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
                    error={this.isFieldWithError('email')}
                    label="EMAIL ADDRESS"
                    name="email"
                    type="text"
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="col-lg-6 d-flex flex-column field-box">
                  <InputTextField
                    error={this.isFieldWithError('emailConfirm')}
                    label="CONFIRM EMAIL ADDRESS"
                    name="emailConfirm"
                    type="text"
                    onChange={this.handleInputChange}
                  />
                </div>
              </div>
              <div className="form-box d-flex flex-row">
                <div className="col-lg-6 d-flex flex-column field-box">
                  <InputTextField
                    error={this.isFieldWithError('password')}
                    label="PASSWORD"
                    name="password"
                    type="password"
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="col-lg-6 d-flex flex-column field-box">
                  <InputTextField
                    error={this.isFieldWithError('passwordConfirm')}
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
                onClick={() => this.handleRegister()}
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
