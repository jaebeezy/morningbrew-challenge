import React from "react";

const TextInput = ({
  label,
  name,
  placeholder,
  max,
  value,
  onChange,
  errors,
}) => {
  return (
    <div className="text-input-container">
      <label htmlFor={name}>{label}</label>
      <input
        className={errors ? "error-input" : ""}
        type="text"
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        maxLength={max}
      />
      {errors && <p>{errors}</p>}
    </div>
  );
};

export default TextInput;
