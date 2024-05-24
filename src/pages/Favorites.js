import { API_URL } from '../config';

import classes from './Favorites.module.css';
import ListPokeHome from '../components/Pokemons/ListPokeHome';
import { useEffect, useState } from 'react';
import confused from '../img/not found.jpg';

const Favorites = () => {
  const [favorites, setFavorites] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const favoritesJSON = localStorage.getItem('favorites-pokemon');

  useEffect(() => {
    const parsedFavorites = favoritesJSON ? JSON.parse(favoritesJSON) : {};
    setFavorites(parsedFavorites);
    setIsLoading(false);
  }, [favoritesJSON]);

  const favoriteIds = Object.keys(favorites);

  if (favoriteIds.length < 1 && !isLoading) {
    return (
      <div className={classes.notfound}>
        <img src={confused} alt="Favorites not found" />
        <p>
          Looks like you dont have any pokemon as favorite yet. Try choosing one
        </p>
      </div>
    );
  }

  const favs = favoriteIds.map((id, index) => (
    <ListPokeHome
      key={index}
      id={favorites[id].id}
      name={favorites[id].name}
      image={favorites[id].image}
      url={`${API_URL}pokemon/${favorites[id].id}`}
    />
  ));

  return (
    <div className={classes.favorites}>
      <h1>Favorites</h1>
      {favs}
    </div>
  );
};

export default Favorites;
