import { useState } from 'react';
import './App.css';
import { SearchAndList } from './components/SearchAndList';
import { Graphic } from './components/GraphicBackground';

const App = () => {
    const [cryptoId, setCryptoId] = useState("bitcoin");

    const updateGraphic = (event) => {
      setCryptoId(event.target.value);
    };

    return (
      <div className="App">
        <Graphic graphic={cryptoId} />
        <SearchAndList toGraphFunc={updateGraphic} />
      </div>
    );
};
export default App;