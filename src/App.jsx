import './App.css';
import { Graphic } from './components/Graphic';
import { SearchAndList } from './components/SearchAndList';

const App = () => {



  return (
    <div className="App">
      <Graphic style={{backgroundColor: "black"}} />
      <SearchAndList />
    </div>
  );
};

export default App;
