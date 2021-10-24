import React from "react";

const Checkbox = ({ name, checked, onChange }) => {
  // capitalizing first letter of string
  const capitalize = (string) => {
    return string[0].toUpperCase() + string.slice(1);
  };

  return (
    <div className="checkbox-container">
      <input
        type="checkbox"
        name={name}
        id={name}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={name}>{capitalize(name)}</label>
    </div>
  );
};

export default Checkbox;
