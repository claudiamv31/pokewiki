/* eslint-disable jsx-a11y/alt-text */
import { TYPES, COLOR_B, COLOR_IM } from '../../config';

import classes from './SinglePokeHome.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const SinglePokeHome = props => {
  const url = props.types[0].type.name;
  const name = url;
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

  const onFavorite = () => {
    localStorage.setItem(props.id, props.name);
  };

  return (
    <div style={{ backgroundColor: COLOR_B[name] }} className={classes.pokemon}>
      <div className={classes.information}>
        <div>N&#176; {props.id}</div>
        <div className={classes.name}>{Capitalize(props.name)}</div>
        <div>
          <ul className={classes.types}>{types}</ul>
        </div>
      </div>
      <div className={classes.images}>
        <FontAwesomeIcon icon={faHeart} onClick={onFavorite} />
        <img src={TYPES[name]} className={classes.background} alt={name} />
        <img src={props.image} className={classes.image} alt={props.name} />
      </div>
    </div>
  );
};

export default SinglePokeHome;
