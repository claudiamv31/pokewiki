import { Route, Routes } from 'react-router-dom';

import Pokemons from './pages/Pokemons';
import Regions from './pages/Regions';
import NavBar from './components/UI/NavBar';
import SinglePokemon from './components/SinglePokemon/SinglePokemon';
import PokemonsRegions from './components/Regions/PokemonsRegions';

function App() {
  return (
    <div>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Pokemons />} />
          <Route path="/regions" element={<Regions />} />
          <Route
            path="/regions/region-pokemons"
            element={<PokemonsRegions />}
          />
          <Route name="pokemon" path="/pokemon" element={<SinglePokemon />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
