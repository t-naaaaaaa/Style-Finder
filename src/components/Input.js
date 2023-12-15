import React from "react";

const Input = ({ type, placeholder, onChange, value, name, className }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      name={name}
      className={`input ${className}`}
    />
  );
};

export default Input;
