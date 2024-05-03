import { Route, Routes } from 'react-router-dom';

import Pokemons from './pages/Pokemons';
import Regions from './pages/Regions';

function App() {
  return (
    <div>
      <main>
        <Routes>
          <Route path="/" element={<Pokemons />} />
          <Route path="/regions" element={<Regions />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
