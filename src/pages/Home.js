import { useEffect, useState } from 'react';

import { API_URL } from '../config';
import ListPokeHome from '../components/Home/ListPokeHome';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import ListTypesHome from '../components/Home/ListTypesHome';
import ListOrderHome from '../components/Home/ListOrderHome';

const Home = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);
  let [showTypes, setShowTypes] = useState(false);
  let [showFilter, setShowFilter] = useState(false);

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

  const showTypesResults = () =>
    setShowTypes(showTypes === true ? false : true);

  const showFilterResults = () =>
    setShowFilter(showFilter === true ? false : true);

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
      <div>
        <div>
          <button onClick={showTypesResults}>All Types</button>
        </div>
        <div>
          <div>
            <button onClick={showFilterResults}>Filter</button>{' '}
          </div>
        </div>
        {showFilter ? <ListOrderHome /> : null}
      </div>
      <div>
        <div>{showTypes ? <ListTypesHome /> : null}</div>
        <div>
          <ul>{pokemons}</ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
