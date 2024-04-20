import Home from '../../pages/Home';

const SingleTypeHome = props => {
  const showResults = () => {
    return <Home id={props.id} type={props.type} url={props.url} />;
  };
  const Capitalize = str => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div>
      <button onClick={showResults}>{Capitalize(props.type)}</button>
    </div>
  );
};
export default SingleTypeHome;
