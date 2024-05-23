/* eslint-disable jsx-a11y/alt-text */
import { useNavigate } from 'react-router-dom';

import { TYPES, COLOR_B, COLOR_IM } from '../../config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as regular } from '@fortawesome/free-regular-svg-icons';
import { faHeart as solid } from '@fortawesome/free-solid-svg-icons';
import classes from './SinglePokeHome.module.css';
import { useState } from 'react';

const SinglePokeHome = props => {
  const navigate = useNavigate();
  const url = props.types[0].type.name;
  const name = url;
  const [, setIsFavorite] = useState(false);

  const Capitalize = str => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const isFavoritePokemon = () => {
    const favoritesJSON = localStorage.getItem('favorites-pokemon');
    const favorites = favoritesJSON ? JSON.parse(favoritesJSON) : {};

    return favorites.hasOwnProperty(props.id);
  };

  const types = props.types
    .filter(type => type.slot <= props.types.length)
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
    if (favorites.hasOwnProperty(props.id)) {
      // Item exists, remove it
      delete favorites[props.id];
    } else {
      // Item doesn't exist, add it
      favorites[props.id] = {
        id: props.id,
        name: props.name,
        image: props.image,
      };
    }

    // Stringify the modified object
    const updatedFavoritesJSON = JSON.stringify(favorites);

    console.log(updatedFavoritesJSON);
    // Store the updated JSON string back into localStorage
    localStorage.setItem('favorites-pokemon', updatedFavoritesJSON);
    setIsFavorite(isFavorite => !isFavorite);
  };

  const redirectToPokemonPage = () => {
    navigate('/pokemon', { state: { id: props.id, typesPoke: props.types } });
  };

  const isFavoritePokemonValue = isFavoritePokemon();

  return (
    <div
      id="pokemon"
      style={{ backgroundColor: COLOR_B[name] }}
      className={classes.pokemon}
      onClick={redirectToPokemonPage}
      pokemon={props}
    >
      <div className={classes.information}>
        <div>N&#176; {props.id}</div>
        <div className={classes.name}>{Capitalize(props.name)}</div>
        <div>
          <ul className={classes.types}>{types}</ul>
        </div>
      </div>
      <div className={classes.images}>
        <FontAwesomeIcon
          icon={isFavoritePokemonValue ? solid : regular}
          className={`${isFavoritePokemonValue ? classes.active : ''}`}
          onClick={handlerFavorite}
          size={'lg'}
        />
        <img src={TYPES[name]} className={classes.background} alt={name} />
        <img src={props.image} className={classes.image} alt={props.name} />
      </div>
    </div>
  );
};

export default SinglePokeHome;
