import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTypes, filterPokemon } from '../../../redux/actions/actions'
import './styles/SideBar.css'

export default function SideBar() {

  const { types } = useSelector(state => state)

  const dispatch = useDispatch()

  function handleFilterByType(e){
    e.preventDefault();
    const type = e.target.value;
    dispatch(filterPokemon(type));
  }

  useEffect(() => {
    dispatch(getTypes());
  },[])

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
          <select name="" id="">
            <option value="All">All</option>
            <option value="Api">Api</option>
            <option value="Database">Database</option>
          </select>
        </div>
        <h2>Order by</h2>
    </div>
  )
}
