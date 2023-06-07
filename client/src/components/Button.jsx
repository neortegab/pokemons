import React from "react";
import "./styles/Button.css";

export default function Button(props) {
  const { text, onClick } = props;

  return (
    <button className="pokemon-button" onClick={onClick}>
      {text}
    </button>
  );
}
