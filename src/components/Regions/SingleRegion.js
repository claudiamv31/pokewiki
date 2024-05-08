import { IMAGES_REGION } from '../../config';

import classes from './SingleRegion.module.css';

const SingleRegion = props => {
  const Capitalize = str => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div
      className={classes['single-region']}
      onClick={() => props.showRegions(props.id)}
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
