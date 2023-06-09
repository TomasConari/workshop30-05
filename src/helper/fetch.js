// import { localData } from "./fetchdata"; 

export const fetchList = async () => {
    const rawData = await fetch("https:api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en");
    const dataJson = await rawData.json();
    const selectedData = dataJson.map((crypto) => {
        return {
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
    const rawData = await fetch(`https:api.coingecko.com/api/v3/search?query=${value}`);
    const searchDataJson = await rawData.json();
    const dataArr = searchDataJson.coins;
    const selectedData = dataArr.map((crypto) => {
        return {
            id: crypto.id,
            symbol: crypto.symbol,
            name: crypto.name,
            image: crypto.large,
        };
    });
    return selectedData;
};
export const fetchGraph = async (value) => {
    const rawData = await fetch(`https:api.coingecko.com/api/v3/coins/${value}/market_chart?vs_currency=usd&days=10&interval=daily`);
    const dataJson = await rawData.json();
    const priceArr = dataJson.prices;
    const prices = priceArr.map((array) => array[1]);
    return prices;
};

// export const fetchList = async () => {
//     const selectedData = localData.map((crypto) => {
//         return {
//             id: crypto.id,
//             symbol: crypto.symbol,
//             name: crypto.name,
//             image: crypto.image,
//             price: crypto.current_price
//         };
//     });
//     return selectedData
// };