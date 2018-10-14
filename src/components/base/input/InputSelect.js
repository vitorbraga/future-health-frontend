import './InputSelect.scss';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import React from 'react';
import Select from '@material-ui/core/Select';

const InputSelect = ({ error, name, label, items, onChange, customClass, value }) => (
  <FormControl className="input-select" error={error}>
    <InputLabel htmlFor={`${name}-field`}>{label}</InputLabel>
    <Select
      className={`select-field ${customClass}`}
      value={value}
      inputProps={{ name, id: `${name}-field` }}
      onChange={onChange}
    >
    {items && items.map(item => {
      return <MenuItem value={item.id} key={item.id}>{item.label}</MenuItem>
    })}
    </Select>
  </FormControl>
);

export default InputSelect;
