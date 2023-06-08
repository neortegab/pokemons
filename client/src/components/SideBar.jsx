import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getTypes,
  filterPokemon,
  filterPokemonOrigin,
  orderPokemonsByName,
  orderPokemonsByAttack,
  reset,
} from "../redux/actions/actions";
import { useLocation, NavLink } from "react-router-dom";
import Button from "./Button";
import TypeButton from "./SideBarComponents/TypeButton";
import "./styles/SideBar.css";

export default function SideBar() {
  const { types } = useSelector((state) => state);

  const [typeButtons, setTypeButtons] = useState([]);

  const { pathname } = useLocation();

  const dispatch = useDispatch();

  useEffect(() => {
    if (!(types.length > 0)) dispatch(getTypes());
  }, [dispatch, types]);

  useEffect(() => {
    if (typeButtons.length > 0) {
      dispatch(filterPokemon(typeButtons));
    } else {
      dispatch(reset());
    }
  }, [dispatch, typeButtons]);

  function addTypeButton(type) {
    if (typeButtons.includes(type)) alert("Type already selected");
    else setTypeButtons([...typeButtons, type]);
  }

  function handleFilterByType(e) {
    e.preventDefault();
    const type = e.target.value;
    addTypeButton(type);
  }

  function handleCloseTypeButton(e) {
    e.preventDefault();
    const type = e.target.parentNode.firstChild.innerText;
    setTypeButtons(typeButtons.filter((t) => t !== type));
  }

  function handleFilterByOrigin(e) {
    e.preventDefault();
    const origin = e.target.value;
    dispatch(filterPokemonOrigin(origin));
  }

  function handleOrderByName(e) {
    e.preventDefault();
    const order = e.target.value;
    dispatch(orderPokemonsByName(order));
  }

  function handleOrderByAttack(e) {
    e.preventDefault();
    const order = e.target.value;
    dispatch(orderPokemonsByAttack(order));
  }

  function handleReset() {
    setTypeButtons([]);
    dispatch(reset());
  }

  return (
    <div className="sidebar-container">
      {pathname === "/home" && (
        <div className="sidebar-filters">
          <h2>Filters</h2>
          <div className="sidebar-filter-container">
            <h4>Type</h4>
            <div>
              {typeButtons &&
                typeButtons.map((type, index) =>
                  type !== "All" ? (
                    <TypeButton
                      key={index}
                      name={type}
                      onClick={(e) => handleCloseTypeButton(e)}
                    />
                  ) : (
                    handleReset()
                  )
                )}
            </div>
            <select onChange={(e) => handleFilterByType(e)}>
              <option value="All">All</option>
              {types &&
                types.map((type, index) => (
                  <option key={index} value={type.name}>
                    {type.name}
                  </option>
                ))}
            </select>
          </div>
          <div className="sidebar-filter-container">
            <h4>Created by</h4>
            <select onChange={(e) => handleFilterByOrigin(e)}>
              <option value="All">All</option>
              <option value="Api">Api</option>
              <option value="Database">Database</option>
            </select>
          </div>
          <h2>Order by</h2>
          <div className="sidebar-filter-container">
            <h4>Name</h4>
            <select onChange={(e) => handleOrderByName(e)}>
              <option value="A">Ascending</option>
              <option value="D">Descending</option>
            </select>
          </div>
          <div className="sidebar-filter-container">
            <h4>Attack</h4>
            <select onChange={(e) => handleOrderByAttack(e)}>
              <option value="A">Ascending</option>
              <option value="D">Descending</option>
            </select>
          </div>
          <Button text="Reset" onClick={() => handleReset()} />
        </div>
      )}
      <div className="sidebar-filter-buttons">
        {pathname !== "/home" && (
          <>
            <NavLink to="/home">
              <Button text="Back home" />
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
}
