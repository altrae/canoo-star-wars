import React, { key, useContext, useEffect, useState } from 'react';
import { GlobalContext } from 'src/context/globalState';
import { guid } from 'src/utils';

const Vehicle = ({ created, index, manufacturer, model, name, url }: Partial<Vehicle>) => {
  const { films: allFilms, setFilm } = useContext(GlobalContext);

  const [films, setFilms] = useState([]);

  const onClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setFilm({ title: event.target.innerText, url });
  };

  useEffect(() => {
    setFilms(allFilms.filter((film) => film.vehicles.includes(url)));
  }, [allFilms]);

  return (
    <li className="border border-solid active:border-blue-500 hover:border-blue-500 border-transparent gap-x-4 mb-1 px-4 py-2">
      # {index}. {name} / {model} / {manufacturer} /
      {films.map((film) => (
        <a className="hover:cursor-pointer mx-2 text-blue-500 underline" key={guid()} onClick={onClick}>
          {film.title}
        </a>
      ))}
      / {created}
    </li>
  );
};

type Vehicle = {
  created: string;
  index: number;
  key: key;
  manufacturer: string;
  model: string;
  name: string;
  url: string;
};

export default Vehicle;
