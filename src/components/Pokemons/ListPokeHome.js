import { useEffect, useState } from 'react';

import SinglePokeHome from './SinglePokeHome';
import LoadingSpinner from '../UI/LoadingSpinner';

const ListPokeHome = props => {
  const [pokemonInfo, setPokemonInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch(`${props.url}`);
      console.log(props.url);

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      const reponseData = await response.json();

      const pokemonInfo = [];

      pokemonInfo.push({
        id: reponseData.id,
        name: reponseData.name,
        image: reponseData.sprites.front_default,
        types: reponseData.types,
      });

      setPokemonInfo(pokemonInfo);
      setIsLoading(false);
    };

    fetchPokemon().catch(error => {
      console.log(error);
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, [props.url]);

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

  return (
    <li>
      <SinglePokeHome
        id={pokemonInfo[0].id}
        name={pokemonInfo[0].name}
        image={pokemonInfo[0].image}
        types={pokemonInfo[0].types}
        addToFavorites={props.addToFavorites}
      />
    </li>
  );
};

export default ListPokeHome;
