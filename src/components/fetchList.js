export const fetchList = async () => {
    try{
        const rawData = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en");
        const dataJson = await rawData.json();
        const selectedData = dataJson.map((crypto) => {
            return{
                id: crypto.id,
                symbol: crypto.symbol,
                name: crypto.name,
                image: crypto.image,
                price: crypto.current_price
            };
        });
        return selectedData
    }catch{
        throw new Error();
    };
};