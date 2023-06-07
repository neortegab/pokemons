import React from "react";
import Button from "../../Button";
import "./styles/FormSelector.css";

export default function FormSelector(props) {
  const { allTypes, types, error, handleSelected, reset } = props;

  return (
    <div className="selector-container">
      <label>Types: &#40;select at least 2&#41;</label>
      <div className="selector-chosen-container">
        <div className="selector-options">
          <select onChange={handleSelected}>
            {allTypes &&
              allTypes.map((type, index) => (
                <option key={index} name="name">
                  {type.name}
                </option>
              ))}
          </select>
          <Button text="Reset" onClick={reset} />
        </div>
        <div className="selector-chosen-types">
          {types && types?.map((type, index) => <p key={index}>{type.name}</p>)}
        </div>
      </div>
      {error && <p>{error}</p>}
    </div>
  );
}
