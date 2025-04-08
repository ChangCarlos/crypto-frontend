import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export const getCryptos = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/cryptos?symbols=BTC,ETH,USDT,BNB`);
    const data = response.data;

    return Object.entries(data).map(([symbol, coin]) => ({
      symbol,
      name: coin.name,
      value: `$${coin.quote.USD.price.toFixed(2)}`,
      percent: `${coin.quote.USD.percent_change_24h.toFixed(2)}%`,
      icon: `/public/${symbol.toLowerCase()}-icon.png`,
      chart: `/public/chart-state-${symbol.toLowerCase()}.png`
    }));
  } catch (error) {
    console.error("Erro ao buscar criptomoedas:", error);
    return [];
  }
};
