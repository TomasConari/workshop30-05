import { useEffect, useState } from 'react';
import './App.css';
import { SearchAndList } from './components/SearchAndList';
import { Graphic } from './components/GraphicBackground';
import { fetchList, fetchListSearch } from './helper/fetch';

const App = () => {
  const [cryptoId, setCryptoId] = useState("bitcoin");
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  console.log(list, input);

  const fetchData = async () => {
    const dataFromFetch = await fetchList();
    setList(dataFromFetch);
  };

  const performSearch = async () => {
    const selectedData = await fetchListSearch(input);
    setList(selectedData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (input) {
      performSearch();
    } else {
      fetchData();
    }
  }, [input]);

  return (
    <div className="App">
      <Graphic graphic={cryptoId} />
      <SearchAndList data={list} changeInput={setInput} />
    </div>
  );
};

export default App;
