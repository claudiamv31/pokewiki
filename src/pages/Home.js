import { useEffect, useState } from 'react';

import { API_URL } from '../config';
import ListPokeHome from '../components/Home/ListPokeHome';

const Home = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch(`${API_URL}/pokemon/?offset=0&limit=20`);

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      const reponseData = await response.json();

      const pokemonList = [];

      for (const key in reponseData.results) {
        pokemonList.push({
          key: key,
          id: parseInt(key) + 1,
          name: reponseData.results[key].name,
          url: reponseData.results[key].url,
        });
      }

      setPokemonList(pokemonList);
      setIsLoading(false);
    };

    fetchPokemon().catch(error => {
      console.log(error);
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  const pokemons = pokemonList
    .filter(pokemon => pokemon.key < pokemonList.length)
    .map((poke, index) => (
      <ListPokeHome
        key={index}
        id={poke.id}
        name={poke.name}
        image={poke.image}
        url={poke.url}
      />
    ));

  return (
    <div>
      <h1>Pokemons</h1>
      <ul>{pokemons}</ul>
    </div>
  );
};

export default Home;
