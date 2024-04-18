import { IMAGES_REGION } from '../../config';

const SingleRegion = props => {
  console.log(IMAGES_REGION);
  console.log(IMAGES_REGION[props.number]);
  const Capitalize = str => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div>
      <div>
        <img src={IMAGES_REGION[props.number]} alt={props.name} />
      </div>
      <div>{Capitalize(props.name)}</div>
      <div>{props.id}&#176; Generation</div>
    </div>
  );
};

export default SingleRegion;
