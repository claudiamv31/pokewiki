import { COLOR_IM } from '../../config';

import classes from './SingleTypeHome.module.css';

const SingleTypeHome = props => {
  const Capitalize = str => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div>
      <button
        style={{ backgroundColor: COLOR_IM[props.type] }}
        onClick={() => props.showTypes(props.url)}
        className={classes['filter-type']}
      >
        {Capitalize(props.type)}
      </button>
    </div>
  );
};

export default SingleTypeHome;
