import React from "react";

const TextBox = ({ label, name, value, onChange, max }) => {
  return (
    <div className="textbox-container">
      <label htmlFor={name}>{label}</label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        maxLength={max}
      />
    </div>
  );
};

export default TextBox;
