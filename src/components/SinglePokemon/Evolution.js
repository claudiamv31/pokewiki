import { useEffect, useState } from 'react';
import { API_URL } from '../../config';
import classes from './SinglePokemon.module.css';
import SingleEvolution from './SingleEvolution';
import LoadingSpinner from '../UI/LoadingSpinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const Evolution = props => {
  const [evolutionPokemon, setEvolutionPokemon] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    // Function to fetch the first API
    const fetchFirstAPI = async () => {
      const response = await fetch(`${API_URL}pokemon-species/${props.name}`);

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      const data = await response.json();
      // Assuming the response of the first API contains information needed for the second API call
      const secondAPIUrl = data.evolution_chain.url; // Example: extracting URL for the second API
      if (secondAPIUrl) {
        // Fetch the second API based on the response of the first API
        const secondResponse = await fetch(secondAPIUrl);

        if (!secondResponse.ok) {
          throw new Error('Something went wrong');
        }

        const secondData = await secondResponse.json();

        const evolutionPokemon = [];

        evolutionPokemon.push({
          firstEvolution: { name: secondData.chain.species.name },
          secondEvolution: {
            name: secondData.chain?.evolves_to[0].species.name,
            min_level:
              secondData.chain?.evolves_to[0].evolution_details[0].min_level,
          },
          thirdEvolution: {
            name: secondData.chain?.evolves_to[0].evolves_to[0]?.species.name,
            min_level:
              secondData.chain?.evolves_to[0].evolves_to[0]
                ?.evolution_details[0].min_level,
          },
        });
        setEvolutionPokemon(evolutionPokemon[0]);
        setIsLoading(false);
      }
    };
    fetchFirstAPI().catch(error => {
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

  return (
    <div className={classes.evolutions}>
      <SingleEvolution name={evolutionPokemon.firstEvolution.name} />
      <div className={classes.level}>
        <FontAwesomeIcon
          icon={faArrowDown}
          className={classes.arrow}
          size={'2xl'}
        />
        Level {evolutionPokemon.secondEvolution.min_level}
      </div>
      <SingleEvolution name={evolutionPokemon.secondEvolution.name} />
      <div className={classes.level}>
        <FontAwesomeIcon
          icon={faArrowDown}
          className={classes.arrow}
          size={'2xl'}
        />
        Level {evolutionPokemon.thirdEvolution.min_level}
      </div>
      <SingleEvolution name={evolutionPokemon.thirdEvolution.name} />
    </div>
  );
};

export default Evolution;
