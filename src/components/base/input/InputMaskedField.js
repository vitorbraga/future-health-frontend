import './InputTextField.scss';

import InputMask from 'react-input-mask';
import React from 'react';
import TextField from '@material-ui/core/TextField';

const InputMaskedField = ({ error, name, mask, label, onChange, customClass }) => (
  <InputMask
    error={error}
    className={`input-text-field ${customClass}`}
    onChange={onChange}
    mask={mask}
    maskChar=""
    name={name}
    label={label}
  >
    {inputProps => <TextField {...inputProps} type="text" />}
  </InputMask>
);

export default InputMaskedField;
