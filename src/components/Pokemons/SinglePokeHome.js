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
  const [isFavorite, setIsFavorite] = useState(false);
  let favorites = [];
  const Capitalize = str => {
    return str.charAt(0).toUpperCase() + str.slice(1);
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

  const handlerFavorite = () => {
    // Toggle favorite status and update state
    setIsFavorite(!isFavorite);
    if (!isFavorite) {
      console.log(props.name);
    } else {
      // If it's already in favorites and clicked again, you might want to remove it from favorites
      // Add the logic for removing from favorites here if needed
      setIsFavorite(false);
    }
  };

  const redirectToPokemonPage = () => {
    navigate('/pokemon', { state: { id: props.id } });
  };

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
        {/* Attach handlerFavorite function to onClick event */}
        <FontAwesomeIcon
          icon={isFavorite ? solid : regular}
          className={`${isFavorite ? classes.active : ''}`}
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
