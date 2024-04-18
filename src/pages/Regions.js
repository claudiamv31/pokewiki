import { useEffect, useState } from 'react';

import { API_URL } from '../config';

import ListRegions from '../components/Regions/ListRegions';

const Regions = () => {
  const [regionsList, setRegionsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch(`${API_URL}/region/`);

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      const reponseData = await response.json();

      const regionsList = [];

      for (const key in reponseData.results) {
        regionsList.push({
          key: key,
          id: parseInt(key) + 1,
          name: reponseData.results[key].name,
          url: reponseData.results[key].url,
        });
      }

      setRegionsList(regionsList);
      console.log(regionsList);
      setIsLoading(false);
    };

    fetchPokemon().catch(error => {
      console.log(error);
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  const regions = regionsList
    .filter(region => region.key < regionsList.length)
    .map((region, index) => (
      <ListRegions
        key={index}
        number={region.key}
        id={region.id}
        name={region.name}
        url={region.url}
      />
    ));

  return (
    <div>
      <h1>Regions</h1>
      <ul>{regions}</ul>
    </div>
  );
};

export default Regions;
