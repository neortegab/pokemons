import React from "react";
import { icons, colors } from "./utils/types.js";
import "./styles/Type.css";

export default function Type(props) {
  const { name } = props;

  const style = {
    backgroundColor: colors[name],
  };

  return (
    <div style={style} id="type-container">
      <p>{name}</p>
      <img src={icons[name]} alt={name} />
    </div>
  );
}
