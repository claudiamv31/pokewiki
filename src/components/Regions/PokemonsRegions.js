import { useEffect, useState } from 'react';

import { useLocation } from 'react-router-dom';
import { API_URL } from '../../config';
import ListPokeHome from '../Pokemons/ListPokeHome';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './PokemonRegion.module.css';

const PokemonsRegions = props => {
  const location = useLocation();
  const { url, name } = location.state;
  console.log(name);
  const [pokemonRegion, setPokemonRegion] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch(`${url}`);

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      const reponseData = await response.json();

      const pokemonRegion = [];

      for (const key in reponseData.pokemon_entries) {
        pokemonRegion.push({
          key: key,
          id: parseInt(key) + 1,
          name: reponseData.pokemon_entries[key].pokemon_species.name,
          url: reponseData.pokemon_entries[key].pokemon_species.url,
        });
      }

      setPokemonRegion(pokemonRegion);
      setIsLoading(false);
    };

    fetchPokemon().catch(error => {
      console.log(error);
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, [url]);

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

  const pokemons = pokemonRegion
    .filter(pokemon => pokemon.key < pokemonRegion.length)
    .map((poke, index) => (
      <ListPokeHome
        key={index}
        id={poke.id}
        name={poke.name}
        image={poke.image}
        url={`${API_URL}/pokemon/${poke.name}`}
        showRegions={props.showRegions}
      />
    ));

  return (
    <div className={classes['pokemon-region']}>
      <h1>{name}</h1>
      {pokemons}
    </div>
  );
};

export default PokemonsRegions;
