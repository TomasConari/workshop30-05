import { useState } from 'react';
import './App.css';
import { Graphic } from './components/Graphic';
import { SearchAndList } from './components/SearchAndList';

const App = () => {

  const [graphic, setGraphic] = useState("");

  return (
    <div className="App">
      <Graphic />
      <SearchAndList toGraphFunc={setGraphic} />
    </div>
  );
};

export default App;
