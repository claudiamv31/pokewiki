import { useEffect, useState } from 'react';
import { API_URL, COLOR_IM, TYPES } from '../../config';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './SingleEvolution.module.css';

const SingleEvolution = props => {
  const [pokemon, setPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch(`${API_URL}/pokemon/${props.name}`);

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      const reponseData = await response.json();

      const pokemon = [];

      pokemon.push({
        id: reponseData.id,
        name: reponseData.name,
        image: reponseData.sprites.front_default,
        types: reponseData.types,
      });

      setPokemon(pokemon[0]);
      setIsLoading(false);
    };

    fetchPokemon().catch(error => {
      console.log(error);
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, [props.name]);

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

  const Capitalize = str => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  console.log(pokemon);

  const types = pokemon.types
    .filter(type => type.slot <= pokemon.types.length)
    .map((poke, index) => (
      <li
        className={classes['background-color']}
        key={index}
        style={{ backgroundColor: COLOR_IM[poke.type.name] }}
      >
        <img
          className={classes['type-img']}
          src={TYPES[poke.type.name]}
          alt={poke.type.name}
        />
      </li>
    ));

  return (
    <div className={classes.evolution}>
      <div className={classes.images}>
        <img
          className={classes.bkgimg}
          src={TYPES[pokemon.types[0].type.name]}
          alt={pokemon.name}
        />
        <img
          className={classes.pokemon}
          src={pokemon.image}
          alt={pokemon.name}
        />
      </div>
      <div className={classes.information}>
        <h3 className={classes.name}>{Capitalize(props.name)}</h3>
        <div className={classes.id}>N&#176;{pokemon.id}</div>
        <div className={classes.types}>{types}</div>
      </div>
    </div>
  );
};

export default SingleEvolution;
