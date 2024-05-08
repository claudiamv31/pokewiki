import { useEffect, useState } from 'react';
import ListPokeHome from '../Pokemons/ListPokeHome';

const PokemonsRegions = props => {
  const [pokemonRegion, setPokemonRegion] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

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
