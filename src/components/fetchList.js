export const fetchList = async () => {
    const rawData = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en");
        const dataJson = await rawData.json();
        const sixSelected = dataJson.slice(0, 6);
        const selectedData = sixSelected.map((crypto) => {
            return{
                id: crypto.id,
                symbol: crypto.symbol,
                name: crypto.name,
                image: crypto.image,
                price: crypto.current_price
            };
        });
    return selectedData
};
export const fetchListSearch = async (value) => {
    const rawData = await fetch(`https://api.coingecko.com/api/v3/search?query=${value}`);
        const searchDataJson = await rawData.json();
        const dataArr = searchDataJson.coins;
        let selectedCrypto = [];
        if(dataArr.length > 6){
            selectedCrypto = dataArr.splice(0, 6);
        }else{
            selectedCrypto = dataArr.splice(0, dataArr.length);
        };
        const sixCrypto = selectedCrypto.slice(0, 6);
        const selectedData = sixCrypto.map((crypto) => {
            return{
                id: crypto.id,
                symbol: crypto.symbol,
                name: crypto.name,
                image: crypto.large,
            };
        });
    return selectedData;
};