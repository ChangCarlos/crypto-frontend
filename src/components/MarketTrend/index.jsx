import { useState, useEffect } from "react";
import { getMarketTrend, getCryptoChart } from "../../services/coinGecko";
import { ClipLoader } from "react-spinners";
import CoinChart from "../CoinChart";
import {
  MarketTrendContainer, MarketTrendTitle, MarketTrendContent,
  CoinTrendItem, CoinInfo, Coin, CoinImg, CoinAlias, CoinName, Divider, CoinValue, ValueContainer, Value, Percent, LoaderContainer
} from "./MarketTrend";
import { ChevronRight } from "lucide-react";

const coinGeckoIds = {
    BTC: "bitcoin",
    ETH: "ethereum",
    USDT: "tether",
    BNB: "binancecoin"
  };

const MarketTrend = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrendData = async () => {
      setLoading(true);
      const data = await getMarketTrend();

      const withChart = await Promise.all(data.map(async (coin) => {
        try {
          const chartData = await getCryptoChart(coin.id);
          return {
            id: coin.id,
            name: coin.name,
            symbol: coin.symbol,
            alias: coin.symbol.toUpperCase(),
            icon: coin.image,
            value: `$${coin.current_price.toLocaleString()}`,
            percent: `${coin.price_change_percentage_24h.toFixed(2)}%`,
            chartData
          };
        } catch (error) {
          console.error(`Erro ao carregar gráfico de ${coin.id}:`, error.message);
          return {
            id: coin.id,
            name: coin.name,
            symbol: coin.symbol,
            alias: coin.symbol.toUpperCase(),
            icon: coin.image,
            value: `$${coin.current_price.toLocaleString()}`,
            percent: `${coin.price_change_percentage_24h.toFixed(2)}%`,
            chartData: null // Sem gráfico
          };
        }
      }));

      setCoins(withChart);
      setLoading(false);
    };

    fetchTrendData();
  }, []);

  if (loading) {
    return (
      <MarketTrendContainer>
        <MarketTrendTitle>Market Trend</MarketTrendTitle>
        <LoaderContainer>
          <ClipLoader size={60} color="#8ec649" />
        </LoaderContainer>
      </MarketTrendContainer>
    );
  }

  return (
    <MarketTrendContainer>
      <MarketTrendTitle>Market Trend</MarketTrendTitle>
      <MarketTrendContent>
        {coins.map((coin, index) => (
          <CoinTrendItem key={index}>
            <CoinInfo>
              <Coin>
                <CoinImg src={coin.icon} />
                <CoinAlias>{coin.alias}</CoinAlias>
                <CoinName>{coin.name}</CoinName>
                <ChevronRight size={48} color="#B6B6B6" cursor={'pointer'} />
              </Coin>
            </CoinInfo>
            <Divider />
            <CoinValue>
              <ValueContainer>
                <Value>{coin.value}</Value>
                <Percent>{coin.percent}</Percent>
              </ValueContainer>
              {coin.chartData ? <CoinChart data={coin.chartData} /> : <span style={{ color: '#999' }}>Gráfico não disponível</span>}

            </CoinValue>
          </CoinTrendItem>
        ))}
      </MarketTrendContent>
    </MarketTrendContainer>
  );
};

export default MarketTrend;
