import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changePage } from "../../../redux/actions/actions";
import Button from "../../Button";
import "./styles/Pages.css";

export default function Pages() {
  const { pokemons, pageNumber } = useSelector((state) => state);

  const [totalPages, setTotalPages] = useState(
    Math.ceil(pokemons.length / 12) + 1
  );

  const dispatch = useDispatch();

  useEffect(() => {
    let newTotalPages = Math.floor(pokemons.length / 12) + 1;
    if (totalPages !== newTotalPages) {
      setTotalPages(newTotalPages);
    }
  }, [pokemons, totalPages]);

  function handleBackToStart() {
    dispatch(changePage(1));
  }

  function handlePrevious() {
    dispatch(changePage(pageNumber - 1));
  }

  function handleNext() {
    dispatch(changePage(pageNumber + 1));
  }

  function handleAnyPage(page) {
    dispatch(changePage(page));
  }

  return (
    <div className="pages-container">
      {pokemons && pageNumber > 1 && (
        <Button text="Back to Start" onClick={handleBackToStart} />
      )}
      {pokemons && pageNumber !== 1 && (
        <Button text="<" onClick={handlePrevious} />
      )}
      {pokemons && pageNumber >= 5 && (
        <>
          <Button
            text={pageNumber - 4}
            onClick={() => handleAnyPage(pageNumber - 4)}
          />
          <p>. . .</p>
        </>
      )}
      {pokemons &&
        pageNumber <= totalPages - 8 &&
        pokemons.map(
          (_, index) =>
            index < 4 && (
              <>
                {pageNumber + index === pageNumber && <p>&#62;</p>}
                <Button
                  text={pageNumber + index}
                  key={pageNumber + index}
                  onClick={() => handleAnyPage(pageNumber + index)}
                />
                {pageNumber + index === pageNumber && <p>&#60;</p>}
              </>
            )
        )}
      {pokemons &&
        pageNumber > totalPages - 8 &&
        pageNumber <= totalPages - 4 &&
        pokemons.map(
          (_, index) =>
            index < totalPages - pageNumber - 3 && (
              <Button
                text={pageNumber + index}
                key={pageNumber + index}
                onClick={() => handleAnyPage(pageNumber + index)}
              />
            )
        )}
      {pokemons && pageNumber < totalPages - 7 && <p> . . . </p>}
      {pokemons &&
        pokemons.map(
          (_, index) =>
            index < 4 &&
            totalPages - (3 - index) > 0 && (
              <Button
                text={totalPages - (3 - index)}
                key={totalPages - (3 - index)}
                onClick={() => handleAnyPage(totalPages - (3 - index))}
              />
            )
        )}
      {pokemons && pageNumber < totalPages && (
        <Button text=">" onClick={handleNext} />
      )}
    </div>
  );
}
