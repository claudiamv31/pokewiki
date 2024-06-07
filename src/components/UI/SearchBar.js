import { API_URL } from '../../config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useState} from 'react';

const SearchBar = () => {
  const [pokemon, setPokemon] = useState('');

  const navigate = useNavigate();

  const pokemonChangeHandler = event => {
    setPokemon(event.target.value);
  };

  const searchPokemonHandler = async event => {
    event.preventDefault();

    try {
      const response = await fetch(`${API_URL}pokemon/${pokemon}`);

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      const responseData = await response.json();

      navigate('/pokemon', {
        state: { id: responseData.id, typesPoke: responseData.types },
      });

      setPokemon('');
    } catch (error) {
      console.log(error);

      // Navigate to '/pokemon' after setting states
      navigate('/pokemon', {
        state: { httpErrorSearch: true, error: error.message },
      });
    }
  };
  return (
    <form onSubmit={searchPokemonHandler}>
      <input
        type="text"
        placeholder="Search Pokemon"
        onChange={pokemonChangeHandler}
        value={pokemon}
      />
      <button type="submit">
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </form>
  );
};

export default SearchBar;
