import { TYPES } from '../../config';

import classes from './SinglePokeHome.module.css';

const SinglePokeHome = props => {
  const url = props.types[0].type.name;
  const name = url;
  const Capitalize = str => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  console.log(TYPES[name]);

  return (
    <div className={classes.pokemon}>
      <div className={classes.images}>
        <img src={TYPES[name]} className={classes.background} />
        <img src={props.image} className={classes.image} alt={props.name} />
      </div>
      <div>
        <div>N&#176; {props.id}</div>
        <div>{Capitalize(props.name)}</div>
        <div></div>
      </div>
    </div>
  );
};

export default SinglePokeHome;
