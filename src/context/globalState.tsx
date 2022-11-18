import React, { createContext, useReducer } from 'react';
import AppReducer from './appReducer';

const initialState = {};

const GlobalContext = createContext(initialState);

const GlobalProvider = ({ children }: Partial<GlobalProvider>) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const setFilm = (film) => {
    dispatch({ payload: film, type: 'SET_FILM' });
  };

  const setFilms = (films) => {
    dispatch({ payload: films, type: 'SET_FILMS' });
  };

  const setVehicles = (vehicles) => {
    dispatch({ payload: vehicles, type: 'SET_VEHICLES' });
  };

  return (
    <GlobalContext.Provider
      value={{
        film: state.film,
        films: state.films || [],
        setFilm,
        setFilms,
        setVehicles,
        vehicles: state.vehicles || [],
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

type GlobalProvider = {
  children: React.ReactChild | React.ReactChild[];
};

export { GlobalContext, GlobalProvider };
