import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changePage } from '../../../redux/actions/actions'
import './styles/Pages.css'

export default function Pages() {

  const { pokemons, pageNumber } = useSelector(state => state);

  const [totalPages, setTotalPages] = useState((Math.ceil(pokemons.length/12)+1));
  
  const dispatch = useDispatch();

  useEffect(() => {
    let newTotalPages = (Math.floor(pokemons.length/12)+1); 
    if(totalPages !== newTotalPages){
      setTotalPages(newTotalPages);
    }
  }, [pokemons, totalPages]);

  function handleBackToStart(){
    dispatch(changePage(1));
  }

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
        (pokemons && pageNumber > 1)
        && <button onClick={handleBackToStart}>Back to Start</button>
      }
      {
        (pokemons && pageNumber !== 1) 
          && <button onClick={handlePrevious}>Previous</button>
      }
      {
        (pokemons 
          &&
          (pageNumber <= totalPages - 8)
          &&
          pokemons.map((_, index) => 
            (index < 4) && 
            <button key={pageNumber+index} 
            onClick={() => handleAnyPage(pageNumber+(index))}>
              {pageNumber+(index)}
            </button>
          ))
      }
      {
        (pokemons 
          &&
          (pageNumber > totalPages - 8 
            && pageNumber <= totalPages - 4)
          &&
          pokemons.map((_, index) => 
            (index < (totalPages-pageNumber-3)) && 
            <button key={pageNumber+index} 
            onClick={() => handleAnyPage(pageNumber+(index))}>
              {pageNumber+(index)}
            </button>
          ))
      }
      {
        pokemons 
        && pageNumber < (totalPages-7) 
        && <p> . . . </p>
      }
      {
        (pokemons && 
          pokemons.map((_, index) => 
            (index < 4 && (totalPages-(3-index) > 0)) 
            && 
            <button key={totalPages-(3-index)} 
            onClick={() => handleAnyPage(totalPages-(3-index))}>
              {totalPages-(3-index)}
            </button>
          ))
      }
      {
        (pokemons 
          && (pageNumber < totalPages)) 
          && <button onClick={handleNext}>Next</button>
      }
    </div>
  )
}
