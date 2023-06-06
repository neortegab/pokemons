import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { 
  getTypes, 
  filterPokemon, 
  filterPokemonOrigin,
  orderPokemonsByName,
  orderPokemonsByAttack,
  reset
} from '../../../redux/actions/actions'
import './styles/SideBar.css'

export default function SideBar() {
  
  const { types } = useSelector(state => state)
  
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getTypes());
  },[dispatch])

  function handleFilterByType(e){
    e.preventDefault();
    const type = e.target.value;
    dispatch(filterPokemon(type));
  }

  function handleFilterByOrigin(e){
    e.preventDefault();
    const origin = e.target.value;
    dispatch(filterPokemonOrigin(origin));
  }

  function handleOrderByName(e){
    e.preventDefault();
    const order = e.target.value;
    dispatch(orderPokemonsByName(order));
  }

  function handleOrderByAttack(e){
    e.preventDefault();
    const order = e.target.value;
    dispatch(orderPokemonsByAttack(order));
  }

  function handleReset(){
    dispatch(reset());
  }
  return (
    <div className='sidebar-container'>
        <h2>Filters</h2>
        <div>
          <h4>Type</h4>
          <select onChange={(e) => handleFilterByType(e)}>
            <option value="All">All</option>
            {types && types.map((type, index) => (
              <option key={index} value={type.name}>{type.name}</option>
            ))}
          </select>
        </div>
        <div>
          <h4>Created by</h4>
          <select onChange={(e) => handleFilterByOrigin(e)}>
            <option value="All">All</option>
            <option value="Api">Api</option>
            <option value="Database">Database</option>
          </select>
        </div>
        <h2>Order by</h2>
        <div>
          <h4>Name</h4>
          <select onChange={(e) => handleOrderByName(e)}>
            <option value="A">Ascending</option>
            <option value="D">Descending</option>
          </select>
        </div>
        <div>
        <h4>Attack</h4>
          <select onChange={(e) => handleOrderByAttack(e)}>
            <option value="A">Ascending</option>
            <option value="D">Descending</option>
          </select>
        </div>
        <button onClick={() => handleReset()}>Reset</button>
    </div>
  )
}
