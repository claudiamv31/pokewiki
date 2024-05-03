import { useEffect, useState } from 'react';

import { API_URL } from '../../config';
import LoadingSpinner from '../UI/LoadingSpinner';
import SingleTypeHome from './SingleTypeHome';

const ListTypesHome = props => {
  const [typesList, setTypes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch(`${API_URL}/type/`);

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      const reponseData = await response.json();

      const types = [];

      for (const key in reponseData.results) {
        types.push({
          key: key,
          id: parseInt(key) + 1,
          name: reponseData.results[key].name,
          url: reponseData.results[key].url,
        });
      }

      setTypes(types);
      setIsLoading(false);
    };

    fetchPokemon().catch(error => {
      console.log(error);
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (httpError) {
    return (
      <section>
        <p>{httpError}</p>
      </section>
    );
  }

  const types = typesList
    .filter(types => types.key < typesList.length)
    .map((type, index) => (
      <SingleTypeHome
        key={index}
        id={type.id}
        type={type.name}
        url={type.url}
        showTypes={props.showTypes}
      />
    ));

  return (
    <div>
      <li>{types}</li>
    </div>
  );
};

export default ListTypesHome;
