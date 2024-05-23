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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as regular } from '@fortawesome/free-regular-svg-icons';
import { faHeart as solid } from '@fortawesome/free-solid-svg-icons';

const SinglePokemon = () => {
  const location = useLocation();
  const { id, typesPoke, isLoading, httpError } = location.state;
  const [singlePokemon, setSinglePokemon] = useState(null);
  const [, setIsFavorite] = useState(false);

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

  const convertToKgM = value => {
    return value / 10;
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

  if (!singlePokemon && !isLoading && !httpError) {
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

  const handlerFavorite = event => {
    event.stopPropagation();

    const favoritesJSON = localStorage.getItem('favorites-pokemon');
    let favorites = favoritesJSON ? JSON.parse(favoritesJSON) : {};

    // Check if the item exists
    if (favorites.hasOwnProperty(singlePokemon.id)) {
      // Item exists, remove it
      delete favorites[singlePokemon.id];
    } else {
      // Item doesn't exist, add it
      favorites[singlePokemon.id] = {
        id: singlePokemon.id,
        name: singlePokemon.name,
        image: singlePokemon.image,
      };
    }

    // Stringify the modified object
    const updatedFavoritesJSON = JSON.stringify(favorites);
    // Store the updated JSON string back into localStorage
    localStorage.setItem('favorites-pokemon', updatedFavoritesJSON);
    setIsFavorite(isFavorite => !isFavorite);
  };

  const isFavoritePokemon = () => {
    const favoritesJSON = localStorage.getItem('favorites-pokemon');
    const favorites = favoritesJSON ? JSON.parse(favoritesJSON) : {};

    return favorites.hasOwnProperty(singlePokemon.id);
  };

  const isFavoritePokemonValue = isFavoritePokemon();

  return (
    <div className={classes['single-pokemon']}>
      <div className={classes.favoritesbtn}>
        <button className={classes.btn} onClick={handlerFavorite}>
          <FontAwesomeIcon
            icon={isFavoritePokemonValue ? solid : regular}
            className={`${
              isFavoritePokemonValue ? classes.active : classes.favorite
            }`}
            onClick={handlerFavorite}
            size={'2xl'}
          />
        </button>
      </div>
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
            <div className={classes.number}>
              {convertToKgM(singlePokemon.weight)} Kg
            </div>
          </div>
          <div className={classes['category_name']}>
            <img src={height} alt="Height" className={classes.icon} />
            Height:
            <div className={classes.number}>
              {convertToKgM(singlePokemon.height)} m
            </div>
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
