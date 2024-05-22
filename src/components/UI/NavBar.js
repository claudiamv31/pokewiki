import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import classes from './NavBar.module.css'; // assuming you have a CSS module for styling
import { API_URL } from '../../config';
import pokeball from '../../logo.png';

const NavBar = () => {
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
        state: { httpError: true, error: error.message },
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
              value={pokemon}
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
