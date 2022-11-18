import React, { useContext, useEffect, useRef, useState } from 'react';
import { GlobalContext } from 'src/context/globalState';
import { debounce, fetchStarWarsAPI, guid } from 'src/utils';
import Vehicle from './vehicle';

const Vehicles = () => {
  const { setFilms, setVehicles, vehicles } = useContext(GlobalContext);

  const [disabled, setDisabled] = useState(false);
  const [filter, setFilter] = useState('');
  const [initialVehicles, setInitialVehicles] = useState<Vehicle[]>([]);
  const [page, setPage] = useState(1);
  const [vehicleCount, setVehicleCount] = useState(0);

  const filterInputRef = useRef(null);

  useEffect(() => {
    fetchStarWarsAPI('films?format=json', setFilmsData);
  }, []);

  useEffect(() => {
    setDisabled(true);
    fetchStarWarsAPI(`vehicles?page=${page}&format=json`, setVehiclesData);
  }, [page]);

  const clear = (event: MouseEvent | TouchEvent) => {
    event.preventDefault();

    filterInputRef.current.value = '';
    setVehicles(initialVehicles);
  };

  const onClick = (event: MouseEvent | TouchEvent) => {
    event.preventDefault();

    if ((event.target as HTMLElement).id === 'next-page')
      setPage((previousPage) => (previousPage <= Math.floor(vehicleCount / 10) ? (previousPage += 1) : previousPage));

    if ((event.target as HTMLElement).id === 'previous-page')
      setPage((previousPage) => (previousPage > 1 ? (previousPage -= 1) : previousPage));
  };

  const onInput = (event: KeyboardEvent) => {
    debounce(() => {
      setFilter((event.target as HTMLInputElement).value);
      setDisabled(true);
      fetchStarWarsAPI(`vehicles?format=json`, setVehiclesData);
    }, 25);
  };

  const setVehiclesData = ({ count, results }) => {
    const vehicles = results.map((vehicle) => ({ ...vehicle, key: guid() }));
    const filteredVehicles = filter
      ? vehicles.filter((vehicle) => vehicle.name.toLowerCase().includes(filter.toLowerCase()))
      : [];

    if (!initialVehicles.length) setInitialVehicles(vehicles);

    setVehicles(filteredVehicles.length ? filteredVehicles : vehicles);
    setVehicleCount(filteredVehicles.length || count);

    setDisabled(false);
  };

  const setFilmsData = (films) => {
    setFilms(films.results);
  };

  return (
    <>
      <h2 className="text-lg">List of Vehicles</h2>

      <div className="relative">
        <input
          className="border border-solid border-blue-500 p-4 rounded"
          onInput={onInput}
          placeholder="Filter by name"
          ref={filterInputRef}
        />
        <div className="absolute right-2 top-1/2 -translate-y-1/2">
          <button
            className="bg-blue-500 border border-blue-500 border-solid h-6 relative rounded-full text-white w-6"
            onClick={clear}
          >
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">X</span>
          </button>
        </div>
      </div>

      <ul className="p-4">
        {vehicles.map(({ key, ...vehicle }: Partial<Vehicle>, index) => (
          <Vehicle index={Math.floor((page - 1) * 10 + (index + 1))} key={key} {...vehicle} />
        ))}
      </ul>

      {vehicleCount >= 10 && (
        <div className="flex gap-x-4 justify-between items-center mt-4">
          <button
            className="disabled:bg-blue-100 bg-blue-500 border disabled:border-blue-100 border-blue-500 border-solid px-4 py-1 rounded text-white"
            disabled={disabled}
            id="previous-page"
            onClick={onClick}
          >
            {`<`} Previous
          </button>
          Page {page} of {Math.ceil(vehicleCount / 10)} / Total Vehicles: {vehicleCount}
          <button
            className="disabled:bg-blue-100 bg-blue-500 border disabled:border-blue-100 border-blue-500 border-solid px-4 py-1 rounded text-white"
            disabled={disabled}
            id="next-page"
            onClick={onClick}
          >
            Next {`>`}
          </button>
        </div>
      )}
    </>
  );
};

export default Vehicles;
