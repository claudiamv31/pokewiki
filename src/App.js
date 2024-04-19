import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Regions from './pages/Regions';

function App() {
  return (
    <div>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/regions" element={<Regions />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
