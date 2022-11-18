const fetchStarWarsAPI = async (route: string, callback: (data: Record<string, any>) => void) => {
  await fetch(`https://swapi.dev/api/${route}`, {
    headers: new Headers({ Accept: 'application/json' }),
    method: 'GET',
    redirect: 'follow',
  })
    .then((response) => response.json())
    .then((data) => {
      callback(data);
    })
    .catch((error) => console.error(`Failed to fetch data due to: ${error}`));
};

export { fetchStarWarsAPI };
