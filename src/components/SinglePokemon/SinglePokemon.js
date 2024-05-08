/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';

import { useLocation } from 'react-router-dom';
import { API_URL } from '../../config';
import LoadingSpinner from '../UI/LoadingSpinner';
import Evolution from './Evolution';

const SinglePokemon = props => {
  const location = useLocation();
  const { id } = location.state;
  const [singlePokemon, setSinglePokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  //const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch(`${API_URL}pokemon/${id}`);
      console.log(`${API_URL}pokemon/${id}`);

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      const reponseData = await response.json();

      const singlePokemon = [];

      singlePokemon.push({
        key: reponseData.id,
        id: reponseData.id,
        name: reponseData.name,
        height: reponseData.height,
        types: reponseData.types,
        weight: reponseData.weight,
        image: reponseData.sprites.front_default,
        ability: reponseData.abilities[0].ability.name,
      });

      setSinglePokemon(singlePokemon);
      setIsLoading(false);
    };

    fetchPokemon().catch(error => {
      console.log(error);
      setIsLoading(false);
      //setHttpError(error.message);
    });
  }, [id]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <h2>{singlePokemon[0].name}</h2>
      <div>N&#176; {singlePokemon[0].id}</div>
      <div>
        <img src={singlePokemon[0].image} alt={singlePokemon[0].name} />
      </div>
      <div>
        Weight:<div>{singlePokemon[0].weight}</div>
      </div>
      <div>
        Height:<div>{singlePokemon[0].height}</div>
      </div>
      <div>
        Ability:<div>{singlePokemon[0].ability}</div>
      </div>
      <Evolution name={singlePokemon[0].name} />
    </div>
  );
};

export default SinglePokemon;
