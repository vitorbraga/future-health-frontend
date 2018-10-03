import './InputTextField.scss';

import React from 'react';
import TextField from '@material-ui/core/TextField';

const InputTextField = ({ name, label, onChange, customClass, type }) => (
  <TextField
    className={`input-text-field ${customClass}`}
    label={label}
    name={name}
    type={type}
    onChange={onChange}
  />
);

export default InputTextField;
