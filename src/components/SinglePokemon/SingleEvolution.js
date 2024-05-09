import { useEffect, useState } from 'react';
import { API_URL, COLOR_IM, TYPES } from '../../config';
import LoadingSpinner from '../UI/LoadingSpinner';

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
      <li key={index} style={{ backgroundColor: COLOR_IM[poke.type.name] }}>
        <img src={TYPES[poke.type.name]} alt={poke.type.name} />
        {Capitalize(poke.type.name)}
      </li>
    ));

  return (
    <div>
      <div>
        <img src={pokemon.image} alt={pokemon.name} />
      </div>
      <h3>{props.name}</h3>
      <div>N&#176;{pokemon.id}</div>
      <div>{types}</div>
    </div>
  );
};

export default SingleEvolution;
