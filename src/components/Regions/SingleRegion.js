import { useNavigate } from 'react-router-dom';
import { API_URL, IMAGES_REGION } from '../../config';

import classes from './SingleRegion.module.css';
import { useEffect, useState } from 'react';
import LoadingSpinner from '../UI/LoadingSpinner';

const SingleRegion = props => {
  const navigate = useNavigate();
  const [regionsList, setRegionsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch(`${API_URL}region/${props.id}`);

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      const reponseData = await response.json();

      const regionsList = [];

      regionsList.push({
        id: 1,
        name: reponseData.pokedexes[0].name,
        url: reponseData.pokedexes[0].url,
      });

      setRegionsList(regionsList[0]);
      setIsLoading(false);
    };

    fetchPokemon().catch(error => {
      console.log(error);
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, [props.id]);

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

  const redirectToPokemonRegionPage = () => {
    navigate('/regions/region-pokemons', {
      state: {
        id: props.id,
        pokedex: regionsList.name,
        url: regionsList.url,
        name: Capitalize(props.name),
      },
    });
  };

  return (
    <div
      className={classes['single-region']}
      onClick={redirectToPokemonRegionPage}
    >
      <div className={classes.image}>
        <img src={IMAGES_REGION[props.number]} alt={props.name} />
      </div>
      <div className={classes.text}>
        <div className={classes.name}>{Capitalize(props.name)}</div>
        <div>{props.id}&#176; Generation</div>
      </div>
    </div>
  );
};

export default SingleRegion;
