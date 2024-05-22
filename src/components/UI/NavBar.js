import classes from './NavBar.module.css';
import pokeball from '../../logo.png';
import { NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { API_URL } from '../../config';

const NavBar = () => {
  const [pokemon, setPokemon] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const pokemonChangeHandler = event => {
    setPokemon(event.target.value);
  };

  let search = {};
  const searchPokemonHandler = async event => {
    event.preventDefault();

    try {
      const response = await fetch(`${API_URL}/pokemon/${pokemon}`);

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      const responseData = await response.json();

      search = responseData;
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setHttpError(true);
      setError(error.message);
    }

    if (isLoading) {
      navigate('/pokemon', {
        state: { isLoading: isLoading },
      });
    }

    if (httpError) {
      navigate('/pokemon', {
        state: { httpError: httpError, error: error },
      });
    }

    if (!isLoading && !httpError) {
      console.log('search', search.id);
      navigate('/pokemon', {
        state: { id: search.id, typesPoke: search.types },
      });
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <nav className={`${classes.navbar}`}>
          <NavLink to="/" className={classes.logo}>
            <div>
              <img src={pokeball} alt="pokemon" />
            </div>
            <div className={classes['logo-name']}>
              <label>PokeApp </label>
            </div>
          </NavLink>
          <div className={classes.options}>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? classes.active : '')}
            >
              <p>Pokemons</p>
            </NavLink>
            <NavLink
              to="/regions"
              className={({ isActive }) => (isActive ? classes.active : '')}
            >
              <p>Regions</p>
            </NavLink>
            <NavLink
              to="/favorites"
              className={({ isActive }) => (isActive ? classes.active : '')}
            >
              <p>Favorites</p>
            </NavLink>
          </div>
          <form onSubmit={searchPokemonHandler}>
            <input
              type="text"
              placeholder="Search Pokemon"
              onChange={pokemonChangeHandler}
            />
            <button type="submit">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
