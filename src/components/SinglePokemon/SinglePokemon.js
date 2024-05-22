/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';

import { useLocation } from 'react-router-dom';
import { API_URL, COLOR_IM, TYPES } from '../../config';
import weight from '../../img/weighing.png';
import height from '../../img/height.png';
import pokeball from '../../img/pokeball.png';
import LoadingSpinner from '../UI/LoadingSpinner';
import Evolution from './Evolution';
import classes from './SinglePokemon.module.css';

const SinglePokemon = props => {
  const location = useLocation();
  const { id, typesPoke } = location.state;
  const { isLoading, httpError } = location.state;
  console.log(id);
  console.log(typesPoke);
  const [singlePokemon, setSinglePokemon] = useState([]);
  //const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch(`${API_URL}pokemon/${id}`);
      console.log(response);

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
    };

    fetchPokemon().catch(error => {
      console.log(error);
      //setHttpError(error.message);
    });
  }, [id]);

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
        <div className={classes.category}>
          <div className={classes['category_name']}>
            <img src={weight} alt="Weight" className={classes.icon} />
            Weight:
            <div className={classes.number}>{singlePokemon[0].weight} kg</div>
          </div>
          <div className={classes['category_name']}>
            <img src={height} alt="Height" className={classes.icon} />
            Height:
            <div className={classes.number}>{singlePokemon[0].height} m</div>
          </div>
          <div className={classes['category_name']}>
            <img src={pokeball} alt="Ability" className={classes.icon} />
            Ability:
            <div className={classes.number}>
              {Capitalize(singlePokemon[0].ability)}
            </div>
          </div>
        </div>
        <div className={classes.titleevolutions}>Evolutions</div>
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
