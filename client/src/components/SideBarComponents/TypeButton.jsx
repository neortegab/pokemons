import React from "react";
import Type from "../Type";
import { colors } from "../utils/types.js";
import "./styles/TypeButton.css";

export default function TypeButton(props) {
  const { name, onClick } = props;

  const style = {
    backgroundColor: colors[name],
  };

  return (
    <div style={style} className="type-button-container">
      <Type name={name} />
      <button onClick={onClick}>X</button>
    </div>
  );
}
