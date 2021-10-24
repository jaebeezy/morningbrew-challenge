import React from "react";
import TextInput from "./textinput";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const DatePicker = ({ label, name, value, onChange }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <div className="date-picker-container">
        <select
          name="month"
          id={name}
          value={value && value.month}
          onChange={onChange}
        >
          <option value="">Month</option>
          {months.map((val, idx) => (
            <option key={idx}>{val}</option>
          ))}
        </select>
        <TextInput
          name="day"
          id={name}
          placeholder="Day"
          value={value && value.day}
          onChange={onChange}
          max={2}
        />
        <TextInput
          name="year"
          id={name}
          placeholder="Year"
          value={value && value.year}
          onChange={onChange}
          max={4}
        />
      </div>
    </div>
  );
};

export default DatePicker;
