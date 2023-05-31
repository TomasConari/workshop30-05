import { useState } from "react";
import { fetchListSearch, fetchList } from "./fetchList";
import { ListedItems } from "./ListedItems";

export const SearchAndList = () => {

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
        <div>
            <input onChange={fetchSearch} placeholder="Search" ></input>
            <ul>
                <ListedItems 
                    keyProp={list[0].id}
                    srcProp={list[0].image}
                    nameProp={list[0].name}
                    symbolProp={list[0].symbol}
                    priceProp={list[0].price}
                />
                <ListedItems 
                    keyProp={list[1].id}
                    srcProp={list[1].image}
                    nameProp={list[1].name}
                    symbolProp={list[1].symbol}
                    priceProp={list[1].price}
                />
                <ListedItems 
                    keyProp={list[2].id}
                    srcProp={list[2].image}
                    nameProp={list[2].name}
                    symbolProp={list[2].symbol}
                    priceProp={list[2].price}
                />
                <ListedItems 
                    keyProp={list[3].id}
                    srcProp={list[3].image}
                    nameProp={list[3].name}
                    symbolProp={list[3].symbol}
                    priceProp={list[3].price}
                />
                <ListedItems 
                    keyProp={list[4].id}
                    srcProp={list[4].image}
                    nameProp={list[4].name}
                    symbolProp={list[4].symbol}
                    priceProp={list[4].price}
                />
                <ListedItems 
                    keyProp={list[5].id}
                    srcProp={list[5].image}
                    nameProp={list[5].name}
                    symbolProp={list[5].symbol}
                    priceProp={list[5].price}
                />
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