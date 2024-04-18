import SingleRegion from './SingleRegion';

const ListRegions = props => {
  return (
    <li>
      <SingleRegion
        key={props.key}
        number={props.number}
        id={props.id}
        name={props.name}
        url={props.url}
      />
    </li>
  );
};

export default ListRegions;
