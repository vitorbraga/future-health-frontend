import "./SubmitButton.scss";

import React from "react";

const SubmitButton = ({ label, onClick }) => (
  <button className="submit-button submit-btn primary-btn mt-20" onClick={onClick}>
    {label}
  </button>
);

export default SubmitButton;
