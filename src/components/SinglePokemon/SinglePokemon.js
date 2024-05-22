/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';

import { useLocation } from 'react-router-dom';
import { API_URL, COLOR_IM, TYPES } from '../../config';
import weight from '../../img/weighing.png';
import height from '../../img/height.png';
import error from '../../img/error.png';
import pokeball from '../../img/pokeball.png';
import LoadingSpinner from '../UI/LoadingSpinner';
import Evolution from './Evolution';
import classes from './SinglePokemon.module.css';

const SinglePokemon = () => {
  const location = useLocation();
  const { id, typesPoke, isLoading, httpError } = location.state;
  console.log(httpError);
  const [singlePokemon, setSinglePokemon] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(`${API_URL}pokemon/${id}`);
        if (!response.ok) {
          throw new Error('Something went wrong');
        }
        const responseData = await response.json();
        setSinglePokemon({
          id: responseData.id,
          name: responseData.name,
          height: responseData.height,
          types: responseData.types,
          weight: responseData.weight,
          image: responseData.sprites.front_default,
          ability: responseData.abilities[0].ability.name,
        });
      } catch (error) {
        console.error('Error fetching Pokemon:', error);
      }
    };

    fetchPokemon();
  }, [id]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (httpError) {
    return (
      <section className={classes.error}>
        <img src={error} alt="Pokemon not found" />
        <p>{"Could't find the pokemon you entered"}</p>
      </section>
    );
  }

  if (!singlePokemon) {
    return (
      <section className={classes.error}>
        <img src={error} alt="Pokemon not found" />
        <p>{"Could't find the pokemon you entered"}</p>
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

  return (
    <div className={classes['single-pokemon']}>
      <div className={classes['img-principal']}>
        <img src={singlePokemon.image} alt={singlePokemon.name} />
      </div>
      <div className={classes.information}>
        <h2>{Capitalize(singlePokemon.name)}</h2>
        <div className={classes.id}>N&#176; {singlePokemon.id}</div>
        <div className={classes.types}>{types}</div>
        <div className={classes.category}>
          <div className={classes['category_name']}>
            <img src={weight} alt="Weight" className={classes.icon} />
            Weight:
            <div className={classes.number}>{singlePokemon.weight} kg</div>
          </div>
          <div className={classes['category_name']}>
            <img src={height} alt="Height" className={classes.icon} />
            Height:
            <div className={classes.number}>{singlePokemon.height} m</div>
          </div>
          <div className={classes['category_name']}>
            <img src={pokeball} alt="Ability" className={classes.icon} />
            Ability:
            <div className={classes.number}>
              {Capitalize(singlePokemon.ability)}
            </div>
          </div>
        </div>
        <div className={classes.titleevolutions}>Evolutions</div>
        <Evolution
          name={singlePokemon.name}
          id={singlePokemon.id}
          types={singlePokemon.types}
        />
      </div>
    </div>
  );
};

export default SinglePokemon;
