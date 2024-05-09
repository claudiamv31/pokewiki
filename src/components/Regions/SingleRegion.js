import { useNavigate } from 'react-router-dom';
import { IMAGES_REGION } from '../../config';

import classes from './SingleRegion.module.css';

const SingleRegion = props => {
  const navigate = useNavigate();

  const Capitalize = str => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const redirectToPokemonRegionPage = () => {
    navigate('/region/region-pokemons', {
      state: { id: props.id, pokedex: props.pokedex },
    });
  };

  return (
    <div
      className={classes['single-region']}
      onClick={redirectToPokemonRegionPage}
    >
      <div className={classes.image}>
        <img src={IMAGES_REGION[props.number]} alt={props.name} />
      </div>
      <div className={classes.text}>
        <div className={classes.name}>{Capitalize(props.name)}</div>
        <div>{props.id}&#176; Generation</div>
      </div>
    </div>
  );
};

export default SingleRegion;
