import { useState } from 'react';

import classes from './NavBar.module.css';
import pokeball from '../../logo.png';

const NavBar = () => {
  // adding the states
  const [isActive, setIsActive] = useState(false);
  //add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };
  //clean up function to remove the active class
  const removeActive = () => {
    setIsActive(false);
  };
  return (
    <div className="App">
      <header className="App-header">
        <nav className={`${classes.navbar}`}>
          {/* logo */}
          <a href="#home" className={`${classes.logo}`}>
            <div>
              <img src={pokeball} alt="pokemon" />
            </div>
            <div className={classes['logo-name']}>
              <label>PokeApp </label>
            </div>
          </a>
          <ul
            className={`${classes.navMenu} ${isActive ? classes.active : ''}`}
          >
            <li
              onClick={removeActive}
              className={`${isActive ? classes.activeOption : ''}`}
            >
              <a href="/" className={`${classes.navLink} `}>
                Pokemons
              </a>
            </li>
            <li onClick={removeActive}>
              <a href="/regions" className={`${classes.navLink}`}>
                Regions
              </a>
            </li>
            <li onClick={removeActive}>
              <a href="#home" className={`${classes.navLink}`}>
                Favorites
              </a>
            </li>
            <li onClick={removeActive}>
              <a href="#home" className={`${classes.navLink}`}>
                Account
              </a>
            </li>
          </ul>
          <div
            className={`${classes.hamburger} ${isActive ? classes.active : ''}`}
            onClick={toggleActiveClass}
          >
            <span className={`${classes.bar}`}></span>
            <span className={`${classes.bar}`}></span>
            <span className={`${classes.bar}`}></span>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
