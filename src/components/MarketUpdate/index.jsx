import { useEffect, useState } from "react";
import { getMarketUpdate, getCryptoChart } from "../../services/coinGecko";
import {
    MarketContainer, Title, CategoryContainer, CategoriesTitle,
    CategoriesNavBar, Categories, Category, SearchContainer,
    SearchInput, TableCrypto, TableHeader, TableHeaderRow,
    TableRow, TableCell, CoinInfo, CoinImg, CoinText, Chart,
    TradeButton, SeeAllLink, NoResults
} from "./MarketUpdate";
import { Search } from "lucide-react";

const categoriesList = [
    'Popular',
    'Metaverse',
    'Entertainment',
    'Energy',
    'Gaming',
    'Music',
    'See All 12+'
]

const MarketUpdate = () => {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchCoins = async () => {
            const data = await getMarketUpdate();

            const formatted = await Promise.all(data.map(async (coin, index) => {
                try {
                    const chartData = await getCryptoChart(coin.id);

                    return {
                        id: index + 1,
                        img: coin.image,
                        name: coin.name,
                        alias: coin.symbol.toUpperCase(),
                        value: `$${coin.current_price.toLocaleString()}`,
                        percent: `${coin.price_change_percentage_24h.toFixed(2)}%`,
                        chart: chartData 
                    };
                } catch (error) {
                    console.error(`Erro ao buscar gráfico de ${coin.id}:`, error.message);

                    return {
                        id: index + 1,
                        img: coin.image,
                        name: coin.name,
                        alias: coin.symbol.toUpperCase(),
                        value: `$${coin.current_price.toLocaleString()}`,
                        percent: `${coin.price_change_percentage_24h.toFixed(2)}%`,
                        chart: null
                    };
                }
            }));

            setCoins(formatted);
        };

        fetchCoins();
    }, []);

    const filteredCoins = coins.filter((coin) =>
        coin.name.toLowerCase().includes(search.toLowerCase()) ||
        coin.alias.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <MarketContainer>
            <Title>Market Update</Title>
            <CategoryContainer>
                <CategoriesTitle>Cryptocurrency Categories</CategoriesTitle>
                <CategoriesNavBar>
                    <Categories>
                        {categoriesList.map((cat, i) => <Category key={i}>{cat}</Category>)}
                    </Categories>
                    <SearchContainer>
                        <Search size={24} color="#B6B6B6" />
                        <SearchInput
                            type="text"
                            placeholder="Search Coin"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </SearchContainer>
                </CategoriesNavBar>
            </CategoryContainer>

            <TableCrypto>
                <thead>
                    <TableHeaderRow>
                        <TableHeader>NO</TableHeader>
                        <TableHeader>NAME</TableHeader>
                        <TableHeader>LAST PRICE</TableHeader>
                        <TableHeader>CHANGE</TableHeader>
                        <TableHeader>MARKET STATS</TableHeader>
                        <TableHeader>TRADE</TableHeader>
                    </TableHeaderRow>
                </thead>
                <tbody>
                    {(search ? filteredCoins : coins).map((coin) => (
                        <TableRow key={coin.id}>
                            <TableCell>{coin.id}</TableCell>
                            <TableCell>
                                <CoinInfo>
                                    <CoinImg src={coin.img} alt={coin.name} />
                                    <CoinText>
                                        {coin.name} <span>{coin.alias}</span>
                                    </CoinText>
                                </CoinInfo>
                            </TableCell>
                            <TableCell>{coin.value}</TableCell>
                            <TableCell>{coin.percent}</TableCell>
                            <TableCell>
                                {coin.chart ? (
                                    <Chart
                                        as="img"
                                        src="/chart-placeholder.png"
                                        alt="Chart"
                                    />
                                ) : (
                                    <span style={{ fontSize: '0.75rem', color: '#999' }}>Gráfico indisponível</span>
                                )}
                            </TableCell>
                            <TableCell>
                                <TradeButton>Trade</TradeButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </tbody>
            </TableCrypto>

            {!filteredCoins.length && search && <NoResults>Nenhum resultado encontrado</NoResults>}
            <SeeAllLink>See All Coins</SeeAllLink>
        </MarketContainer>
    );
};

export default MarketUpdate;
