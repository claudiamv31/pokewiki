/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';

import { useLocation } from 'react-router-dom';
import { API_URL, COLOR_IM, TYPES } from '../../config';
import LoadingSpinner from '../UI/LoadingSpinner';
import Evolution from './Evolution';
import classes from './SinglePokemon.module.css';

const SinglePokemon = props => {
  const location = useLocation();
  const { id, typesPoke } = location.state;
  console.log(typesPoke);
  const [singlePokemon, setSinglePokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  //const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch(`${API_URL}pokemon/${id}`);

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

  const Capitalize = str => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const types = typesPoke
    .filter(type => type.slot <= typesPoke.length)
    .map((poke, index) => (
      <li
        key={index}
        style={{ backgroundColor: COLOR_IM[poke.type.name] }}
        className={classes['single-type']}
      >
        <img src={TYPES[poke.type.name]} alt={poke.type.name} />
        {Capitalize(poke.type.name)}
      </li>
    ));

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className={classes['single-pokemon']}>
      <div className={classes['img-principal']}>
        <img src={singlePokemon[0].image} alt={singlePokemon[0].name} />
      </div>
      <div className={classes.information}>
        <h2>{Capitalize(singlePokemon[0].name)}</h2>
        <div className={classes.id}>N&#176; {singlePokemon[0].id}</div>
        <div className={classes.types}>{types}</div>
        <div>
          Weight:<div>{singlePokemon[0].weight}</div>
        </div>
        <div>
          Height:<div>{singlePokemon[0].height}</div>
        </div>
        <div>
          Ability:<div>{singlePokemon[0].ability}</div>
        </div>
        <Evolution
          name={singlePokemon[0].name}
          id={singlePokemon[0].id}
          types={singlePokemon[0].types}
        />
      </div>
    </div>
  );
};

export default SinglePokemon;
