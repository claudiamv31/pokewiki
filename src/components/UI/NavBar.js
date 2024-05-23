import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavBar.module.css'; // assuming you have a CSS module for styling
import pokeball from '../../logo.png';
import SearchBar from './SearchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  const [isActive, setIsActive] = useState(false);

  const displayOptions = () => {
    setIsActive(!isActive);
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
          <SearchBar />
        </nav>

        <nav className={`${classes.hamburger}`}>
          <div className={classes.showed}>
            <button onClick={displayOptions} className={classes.display}>
              <FontAwesomeIcon icon={faBars} size={'2xl'} />
            </button>
            <SearchBar />
          </div>

          {isActive && (
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
          )}
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
