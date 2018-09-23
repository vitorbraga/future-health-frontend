import './DoctorHome.scss';

import React, { Component } from 'react';

import PropTypes from 'prop-types';

class DoctorHome extends Component {
  static propTypes = {
    doctor: PropTypes.object,
    accessToken: PropTypes.string.isRequired,
    getDoctor: PropTypes.func
  };

  constructor(props, context) {
    super(props);
  }

  handleClick = () => {
    this.props.getDoctor(this.props.accessToken, 1);
  };

  render() {

    const { doctor } = this.props;
    return (
      <div>
        <span>Doctor home</span><br/>
        {doctor && <span>{doctor.firstName} {doctor.lastName}</span>}<br/>
        <button onClick={() => this.handleClick()}>Click</button>
      </div>
    );
  }
}

export default DoctorHome;
