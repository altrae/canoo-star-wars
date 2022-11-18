import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from 'src/context/globalState';

const FilmCard = () => {
  const { film: vehicleFilm, films } = useContext(GlobalContext);

  const [currentFilm, setCurrentFilm] = useState(null);

  useEffect(() => {
    try {
      setCurrentFilm(JSON.parse(sessionStorage.getItem('starWarsCanoo')));
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    const currentFilm = films.filter((film) => film.title === vehicleFilm.title)[0];

    if (currentFilm) {
      sessionStorage.setItem('starWarsCanoo', JSON.stringify(currentFilm));
      setCurrentFilm(currentFilm);
    }
  }, [vehicleFilm]);

  return (
    currentFilm && (
      <article className="flex flex-col gap-y-4 h-full max-w-xl">
        <h2 className="text-lg">Film Details</h2>

        <div className="border border-solid border-blue-500 flex flex-col gap-y-4 p-4">
          <div>{currentFilm.title}</div>
          <div>{currentFilm.producer}</div>
          <div>{currentFilm.director}</div>
          <div>{currentFilm.release_date}</div>
          <div>{currentFilm.opening_crawl}</div>
        </div>
      </article>
    )
  );
};

export default FilmCard;
