import "./DoctorLogin.scss";

import React, { Component } from "react";

import InputTextField from "../base/InputTextField";

class DoctorLogin extends Component {
  static propTypes = {};

  constructor(props, context) {
    super(props);
  }

  render() {
    return (
      <div className="doctor-login">
        <div className="container-fluid">
          <div class="row">
            <div class="col-lg-12 d-flex flex-column">
              <input name="email" placeholder="Patient name" className="form-control mt-20" required="" type="text" required />
            </div>
            <div class="col-lg-12 d-flex flex-column">
              <InputTextField type="password" name="password" placeholder="Password" />
            </div>

            <div class="col-lg-12 d-flex justify-content-end send-btn">
              <button class="submit-btn primary-btn mt-20 text-uppercase ">confirm booking<span class="lnr lnr-arrow-right"></span></button>
            </div>

            <div class="alert-msg"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default DoctorLogin;
