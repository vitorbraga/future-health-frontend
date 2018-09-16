import "./InputTextField.scss";

import React from "react";

const InputTextField = ({ type, name, placeholder, onChange, required }) => (
  <div>
    <input
      className="input-text-field form-control mt-20"
      name={name}
      placeholder={placeholder}
      required={required}
      type={type}
      onChange={onChange}
    />
  </div>
);

export default InputTextField;
