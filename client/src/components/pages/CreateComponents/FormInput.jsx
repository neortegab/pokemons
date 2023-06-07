import React from "react";
import "./styles/FormInput.css";

export default function FormInput(props) {
  const { name, value, placeholder, onChange, error } = props;

  return (
    <div className="input-container">
      <label>{name.charAt(0).toUpperCase() + name.substring(1)}: </label>
      <input
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      {error && <p>{error}</p>}
    </div>
  );
}
