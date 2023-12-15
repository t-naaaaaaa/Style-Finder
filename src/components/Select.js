import React from "react";

const Select = ({ options, onChange, value, name, className }) => {
  return (
    <select
      onChange={onChange}
      value={value}
      name={name}
      className={`select ${className}`}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
