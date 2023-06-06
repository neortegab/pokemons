import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTypes, createPokemon } from "../../redux/actions/actions";
import { NavLink } from "react-router-dom";
import validation from "./utils/validation.js";

export default function Create() {
  const [inputs, setInputs] = useState({
    name: "",
    image: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
  });

  const [errors, setErrors] = useState({});

  const [selectedTypes, setTypes] = useState([]);

  const { types } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!(types.length > 0)) dispatch(getTypes());
  }, [dispatch, types]);

  function handleInputChange(e) {
    e.preventDefault();
    const input = e.target.name;
    const value = e.target.value;
    setInputs({ ...inputs, [input]: value });
  }

  function handleSelectedAType(e) {
    e.preventDefault();
    const value = e.target.value;
    const type = { name: value };
    setTypes([...selectedTypes, type]);
    setInputs({ ...inputs, types: selectedTypes });
  }

  function resetTypes(e) {
    e.preventDefault();
    setTypes([]);
  }

  function resetAll(e) {
    e.preventDefault();
    setInputs({
      name: "",
      image: "",
      hp: "",
      attack: "",
      defense: "",
      speed: "",
      height: "",
      weight: "",
    });
    setTypes([]);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setErrors(validation(inputs));
    if (!(Object.keys(errors).length > 0)) {
      dispatch(createPokemon(inputs));
    }
  }

  return (
    <div>
      <h1>Create Your Own Pokemon!</h1>
      <form>
        <div>
          <label>Name: </label>
          <input
            name="name"
            value={inputs.name}
            placeholder="Pika pika!"
            onChange={(e) => handleInputChange(e)}
          ></input>
          {errors?.name && <p>{errors.name}</p>}
        </div>
        <div>
          <label>Image: </label>
          <input
            name="image"
            value={inputs.image}
            placeholder="https://pokemon-project.com/pokedex/img/sprite/EscarlataPurpura/2/025-sinnoh-cap.png"
            onChange={(e) => handleInputChange(e)}
          ></input>
          {errors?.image && <p>{errors.image}</p>}
        </div>
        <div>
          <label>Hit points: </label>
          <input
            name="hp"
            value={inputs.hp}
            placeholder="60"
            onChange={(e) => handleInputChange(e)}
          ></input>
          {errors?.hp && <p>{errors.hp}</p>}
        </div>
        <div>
          <label>Attack: </label>
          <input
            name="attack"
            value={inputs.attack}
            placeholder="45"
            onChange={(e) => handleInputChange(e)}
          ></input>
          {errors?.attack && <p>{errors.attack}</p>}
        </div>
        <div>
          <label>Defense: </label>
          <input
            name="defense"
            value={inputs.defense}
            placeholder="50"
            onChange={(e) => handleInputChange(e)}
          ></input>
          {errors?.defense && <p>{errors.defense}</p>}
        </div>
        <div>
          <label>Speed: </label>
          <input
            name="speed"
            value={inputs.speed}
            placeholder="35"
            onChange={(e) => handleInputChange(e)}
          ></input>
          {errors?.speed && <p>{errors.speed}</p>}
        </div>
        <div>
          <label>Height: </label>
          <input
            name="height"
            value={inputs.height}
            placeholder="12"
            onChange={(e) => handleInputChange(e)}
          ></input>
          {errors?.height && <p>{errors.height}</p>}
        </div>
        <div>
          <label>Weight: </label>
          <input
            name="weight"
            value={inputs.weight}
            placeholder="5"
            onChange={(e) => handleInputChange(e)}
          ></input>
          {errors?.weight && <p>{errors.weight}</p>}
        </div>
        <div>
          <label>Types: &#40;select at least 2&#41;</label>
          <select onChange={(e) => handleSelectedAType(e)}>
            {types &&
              types.map((type, index) => (
                <option key={index} name="name">
                  {type.name}
                </option>
              ))}
          </select>
          {selectedTypes &&
            selectedTypes.map((type, index) => <p key={index}>{type.name}</p>)}
          <button onClick={(e) => resetTypes(e)}>Reset</button>
          {errors?.types && <p>{errors.types}</p>}
        </div>
        <button onClick={(e) => resetAll(e)}>Clear</button>
        <button onClick={(e) => handleSubmit(e)}>Create Pokemon</button>
      </form>
      <NavLink to="/home">
        <button>Back to Home</button>
      </NavLink>
    </div>
  );
}
