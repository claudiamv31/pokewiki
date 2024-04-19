const SinglePokeHome = props => {
  const Capitalize = str => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div>
      <div>
        <img src={props.image} alt={props.name} />
      </div>
      <div>
        <div>N&#176; {props.id}</div>
        <div>{props.name}</div>
        <div></div>
      </div>
    </div>
  );
};

export default SinglePokeHome;
