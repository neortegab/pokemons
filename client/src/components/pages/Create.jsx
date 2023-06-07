import React, { useEffect, useState } from "react";
import FormInput from "./CreateComponents/FormInput";
import FormSelector from "./CreateComponents/FormSelector";
import Button from "../Button";
import { useSelector, useDispatch } from "react-redux";
import { getTypes, createPokemon } from "../../redux/actions/actions";
import validation from "./utils/validation.js";
import "./styles/Create.css";

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
    types: [],
  });

  const [errors, setErrors] = useState({});

  const allTypes = useSelector((state) => state.types);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!(allTypes.length > 0)) dispatch(getTypes());
  }, [dispatch, allTypes]);

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
    if (inputs.types.find((type) => type.name === value))
      return alert(`Type ${value} already selected!`);
    else setInputs({ ...inputs, types: [...inputs.types, type] });
  }

  function resetTypes(e) {
    e.preventDefault();
    setInputs({ ...inputs, types: [] });
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
      types: [],
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setErrors(validation(inputs));
    if (!(Object.keys(errors).length > 0)) {
      const pokemon = {
        name: inputs.name,
        image: inputs.image,
        hp: inputs.hp,
        attack: inputs.attack,
        defense: inputs.defense,
        speed: inputs.speed,
        height: inputs.height,
        weight: inputs.weight,
        types: inputs.types,
      };
      dispatch(createPokemon(pokemon));
    }
  }

  return (
    <div className="create-container">
      <h1>Create Your Own Pokemon!</h1>
      <form className="form-container">
        <FormInput
          name="name"
          value={inputs.name}
          placeholder="Pika pika!"
          onChange={(e) => handleInputChange(e)}
          error={errors.name}
        />
        <FormInput
          name="image"
          value={inputs.image}
          placeholder="https://pokemon-project.com/pokedex/img/sprite/EscarlataPurpura/2/025-sinnoh-cap.png"
          onChange={(e) => handleInputChange(e)}
          error={errors.image}
        />
        <FormInput
          name="hp"
          value={inputs.hp}
          placeholder="60"
          onChange={(e) => handleInputChange(e)}
          error={errors.hp}
        />
        <FormInput
          name="attack"
          value={inputs.attack}
          placeholder="45"
          onChange={(e) => handleInputChange(e)}
          error={errors.attack}
        />
        <FormInput
          name="defense"
          value={inputs.defense}
          placeholder="50"
          onChange={(e) => handleInputChange(e)}
          error={errors.defense}
        />
        <FormInput
          name="speed"
          value={inputs.speed}
          placeholder="35"
          onChange={(e) => handleInputChange(e)}
          error={errors.speed}
        />
        <FormInput
          name="height"
          value={inputs.height}
          placeholder="12"
          onChange={(e) => handleInputChange(e)}
          error={errors.height}
        />
        <FormInput
          name="weight"
          value={inputs.weight}
          placeholder="5"
          onChange={(e) => handleInputChange(e)}
          error={errors.weight}
        />
        <FormSelector
          allTypes={allTypes}
          types={inputs.types}
          handleSelected={(e) => handleSelectedAType(e)}
          reset={(e) => resetTypes(e)}
          error={errors.types}
        />
        <div className="form-container-buttons">
          <Button text="Clear" onClick={(e) => resetAll(e)} />
          <Button text="Create Pokemon" onClick={(e) => handleSubmit(e)} />
        </div>
      </form>
    </div>
  );
}
