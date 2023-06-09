export const SearchAndList = ({ data, changeInput}) => {

    if(data.length > 0){

        const handleChange = (event) => {
            const newInput = event.target.value;
            changeInput(newInput);
        };

        return(
            <div id="flex2">
                <h1 className="tittle">Control Panel</h1>
                <div className="input-container">
                    <input
                        className="input"
                        onChange={(event) => handleChange(event)}
                        placeholder="   Enter your search request... "
                    />
                </div>
                <h3 className="borderBottom">Trending cryptos</h3>
                <ul className="flex list">
                    {data.map((el) => (
                        <li className="listOutsideElement" key={el.id}>
                            <div className="listElement">
                                <img
                                    width="40px"
                                    height="40px"
                                    alt={`${el.name} icon`}
                                    src={el.image}
                                />
                                <div className="nameAndSymbol" style={{ display: "flex", flexDirection: "column" }}>
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
        return(
            <div>
                <h1 className="tittle">Control Panel</h1>
                <div className="input-container">
                    <input
                        className="input"
                        onChange={(event) => changeInput(event.target.value)}
                        placeholder="   Enter your search request... "
                    />
                </div>
                <h3 className="borderBottom">Trending cryptos</h3>
                <h3>Loading...</h3>
            </div>
        );
    };
};