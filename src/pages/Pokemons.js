import { useEffect, useState } from 'react';

import { API_URL } from '../config';
import error from '../img/error.png';
import classes from './Pokemons.module.css';
import ListPokeHome from '../components/Pokemons/ListPokeHome';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import ListTypesHome from '../components/Pokemons/ListTypesHome';

const Home = props => {
  const [pokemonList, setPokemonList] = useState([]);
  const [numberPokemons, setNumberPokemons] = useState(20);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);
  let [showTypes, setShowTypes] = useState(false);
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
        setPokemonList(pokemonList);
      } else {
        for (const key in responseData.results) {
          pokemonList.push({
            key: key,
            id: parseInt(key) + 1,
            name: responseData.results[key].name,
            url: responseData.results[key].url,
          });
        }
        setPokemonList(prev => [...prev, ...pokemonList]);
      }
      setIsLoading(false);
    };

    fetchPokemon().catch(error => {
      console.log(error);
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, [recievedData, showedTypesPokemons, numberPokemons]);

  const showTypesResults = () =>
    setShowTypes(showTypes === true ? false : true);

  const displayMorePokemons = () => {
    setNumberPokemons(numberPokemons => numberPokemons + 20);
    setRecieveData(`${API_URL}/pokemon/?offset=${numberPokemons}&limit=20`);
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (httpError && !isLoading) {
    return (
      <section className={classes.error}>
        <img src={error} alt="Pokemon not found" />
        <p>{"Could't find the pokemon you entered"}</p>
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
    <div className={classes.pokemons}>
      <div>
        <div className={classes.filters}>
          <div className={classes['filter-all types']}>
            <button onClick={showTypesResults}>
              All Types <i className={classes.arrow}></i>
            </button>
            <div>
              {showTypes ? <ListTypesHome showTypes={onShowTypes} /> : null}
            </div>
          </div>
        </div>
        <h1>Pokemons</h1>
        <div className={classes['show-pokemons']}>
          <ul className={classes['list-pokemons']}>{pokemons}</ul>
        </div>
      </div>
      <div className={classes.more}>
        <button onClick={displayMorePokemons}>More Pokemons</button>
      </div>
    </div>
  );
};

export default Home;
