import { useState } from "react";
import { fetchListSearch, fetchList } from "./fetchList";

export const SearchAndList = ({toGraphFunc}) => {

    const [list, setList] = useState([]);

    const fetchData = async () => {
        const newList = await fetchList();
        setList(newList);
    };

    const fetchSearch = async (event) =>{
        const searchWord = event.target.value;
        const updatedList = await fetchListSearch(searchWord);
        setList(updatedList);
    };

    if(list.length === 0){
        fetchData();
    };
    if(list.length > 0){
        return(
        <div id="flex2">
            <h1 className="tittle">Control Panel</h1>
            <div className="input-container">
                <input
                    className="input"
                    onChange={fetchSearch}
                    placeholder="   Enter your search request... "
                />
            </div>
            <h3 className="borderBottom">Trending cryptos</h3>
            <ul className="flex list">
                {list.map((el) => (
                    <li className="listOutsideElement" key={el.id} onClick={toGraphFunc}>
                        <div className="listElement">
                            <img
                                width="40px" 
                                height="40px" 
                                alt={`${el.name} icon`}
                                src={el.image}
                            />
                            <div className="nameAndSymbol" style={{display: "flex", flexDirection: "column"}}>
                                <p>{el.name}</p>
                                <p className="symbol">{el.symbol}</p>
                            </div>
                            <p className="price">
                                ${el.price}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
        );
    }else{
        fetchData();
        return(
            <div>
                <h3>Loading...</h3>
            </div>
        );
    };
};