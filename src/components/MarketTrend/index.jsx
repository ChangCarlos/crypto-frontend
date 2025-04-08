import { ChevronRight } from "lucide-react";
import { Coin, CoinAlias, CoinImg, CoinInfo, CoinName, CoinTrendItem, CoinValue, Divider, MarketTrendContainer, MarketTrendContent, MarketTrendTitle, Percent, Value, ValueContainer, LoaderContainer } from "./MarketTrend"
import { useState, useEffect } from "react";
import { getCryptos } from "../../services/coinMarketCap";
import { getCryptoChart } from "../../services/coinGecko";
import CoinChart from "../CoinChart";
import { ClipLoader } from "react-spinners";


const coinGeckoIds = {
    BTC: "bitcoin",
    ETH: "ethereum",
    USDT: "tether",
    BNB: "binancecoin"
};


const MarketTrend = () => {
    const [coins, setCoins] = useState([])
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            const data = await getCryptos()

            const withChartData = await Promise.all(
                data.map(async (coin) => {
                    const chartData = await getCryptoChart(coinGeckoIds[coin.symbol]);
                    return { ...coin, chartData };
                })
            );

            setCoins(withChartData);
            setLoading(false)
        }

        fetchData()
    }, [])

    if (loading) {
        return (
            <MarketTrendContainer>

                <MarketTrendTitle>
                    Market Trend
                </MarketTrendTitle>
                <LoaderContainer>
                <MarketTrendContent>
                        <ClipLoader size={60} color="#8ec649" />
                </MarketTrendContent>
                </LoaderContainer>
            </MarketTrendContainer>
        );
    }

    return (
        <MarketTrendContainer>
            <MarketTrendTitle>
                Market Trend
            </MarketTrendTitle>
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
                            {coin.chart && <CoinChart data={coin.chartData} />}
                        </CoinValue>
                    </CoinTrendItem>
                ))}
            </MarketTrendContent>
        </MarketTrendContainer>
    )
}

export default MarketTrend;