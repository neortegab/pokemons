import React from "react";
import "./styles/InputType.css";

export default function InputType(props) {
  const { attribute, value } = props;
  return (
    <div className="input-type-container">
      <h4>{attribute}</h4>
      {value}
    </div>
  );
}
