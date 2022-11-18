import React, { FC, ReactElement } from 'react';
import { GlobalProvider } from './context/globalState';
import FilmCard from './components/film-card';
import Vehicles from './components/vehicles';

const App: FC = (): ReactElement => (
  <>
    <div
      className="bg-blue-500 flex items-center justify-center mb-4 py-4 text-center text-2xl text-white"
      role="banner"
    >
      <h1>Star Wars Vehicles</h1>
    </div>

    <div className="flex gap-4 items-start p-4" id="main-content">
      <GlobalProvider>
        <div className="flex flex-col items-center justify-center">
          <Vehicles />
        </div>
        <div className="flex flex-col grow items-center justify-center">
          <FilmCard />
        </div>
      </GlobalProvider>
    </div>
  </>
);

export default App;
