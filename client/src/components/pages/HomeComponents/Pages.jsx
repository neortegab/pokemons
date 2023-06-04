import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changePage } from '../../../redux/actions/actions'
import './styles/Pages.css'

export default function Pages() {

  const { allPokemons, pageNumber } = useSelector(state => state);

  const [totalPages, setTotalPages] = useState((Math.floor(allPokemons.length/8)));
  
  const dispatch = useDispatch();

  useEffect(() => {
    let newTotalPages = (Math.floor(allPokemons.length/8)); 
    if(totalPages !== newTotalPages){
      setTotalPages(newTotalPages);
    }
  }, [allPokemons, totalPages]);

  function handlePrevious(){
    dispatch(changePage(pageNumber - 1));
  }

  function handleNext(){
    dispatch(changePage(pageNumber + 1));
  }

  function handleAnyPage(page){
    dispatch(changePage(page));
  }

  return (
    <div className='pages-container'>
      {
        (allPokemons && pageNumber !== 1) 
          && <button onClick={handlePrevious}>Previous</button>
      }
      {
        (allPokemons && 
          allPokemons.map((_, index) => 
            index < 4 && 
            <button key={index} 
            onClick={() => handleAnyPage(index+1)}>
              {index+1}
            </button>
          ))
      } 
      <p> . . . </p>
      {
        (allPokemons && 
          allPokemons.map((_, index) => 
            index < 4 && 
            <button key={totalPages-(3-index)} 
            onClick={() => handleAnyPage(totalPages-(3-index))}>
              {totalPages-(3-index)}
            </button>
          ))
      }
      {
        (allPokemons 
          && (pageNumber < Math.floor((allPokemons.length/8)))) 
          && <button onClick={handleNext}>Next</button>
      }
    </div>
  )
}
