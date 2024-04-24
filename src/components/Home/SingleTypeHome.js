const SingleTypeHome = props => {
  const Capitalize = str => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div>
      <button onClick={() => props.showTypes(props.url)}>
        {Capitalize(props.type)}
      </button>
    </div>
  );
};

export default SingleTypeHome;
