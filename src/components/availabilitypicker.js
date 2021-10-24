import React from "react";

import Checkbox from "./checkbox";

const AvailabilityPicker = ({ label, name, value, onChange, errors }) => {
  return (
    <div>
      <label>{label}</label>
      <div className="availability-container">
        <Checkbox
          name="morning"
          checked={value && value.morning}
          onChange={onChange}
        />
        <Checkbox
          name="afternoon"
          checked={value && value.afternoon}
          onChange={onChange}
        />
        <Checkbox
          name="evening"
          checked={value && value.evening}
          onChange={onChange}
        />
      </div>
      {errors && <p>{errors}</p>}
    </div>
  );
};

export default AvailabilityPicker;
