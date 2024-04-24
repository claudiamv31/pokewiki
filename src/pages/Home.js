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
  const [recievedData, setRecieveData] = useState(
    `${API_URL}/pokemon/?offset=0&limit=20`
  );
  const [showedTypesPokemons, setShowedTypesPokemons] = useState(false);

  const onShowTypes = url => {
    setShowedTypesPokemons(true);
    setRecieveData(url);
    setShowTypes(false);
  };

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch(recievedData);
      console.log(recievedData);

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      const responseData = await response.json();

      const pokemonList = [];

      if (showedTypesPokemons) {
        for (const id in responseData.pokemon) {
          pokemonList.push({
            key: id,
            id: responseData.id,
            name: responseData.pokemon[id].pokemon.name,
            url: responseData.pokemon[id].pokemon.url,
          });
        }
      } else {
        for (const key in responseData.results) {
          pokemonList.push({
            key: key,
            id: parseInt(key) + 1,
            name: responseData.results[key].name,
            url: responseData.results[key].url,
          });
        }
      }

      console.log(pokemonList);
      setPokemonList(pokemonList);
      setIsLoading(false);
    };

    fetchPokemon().catch(error => {
      console.log(error);
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, [recievedData, showedTypesPokemons]);

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
        <div>
          {showTypes ? <ListTypesHome showTypes={onShowTypes} /> : null}
        </div>
        <div>
          <ul>{pokemons}</ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
