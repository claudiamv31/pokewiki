import { useEffect, useState } from 'react';
import ListPokeHome from '../Pokemons/ListPokeHome';
import LoadingSpinner from '../UI/LoadingSpinner';
import { useLocation } from 'react-router-dom';

const PokemonsRegions = props => {
  const location = useLocation();
  const { pokedex } = location.state;
  const [pokemonRegion, setPokemonRegion] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch(`${pokedex}`);

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      const reponseData = await response.json();

      const pokemonRegion = [];

      for (const key in reponseData.results) {
        pokemonRegion.push({
          key: key,
          id: parseInt(key) + 1,
          name: reponseData.results[key].name,
          url: reponseData.results[key].url,
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
  }, [pokedex]);

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
        url={poke.url}
        showRegions={props.showRegions}
      />
    ));

  return <di>{pokemons}</di>;
};

export default PokemonsRegions;
