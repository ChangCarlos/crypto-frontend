import { Search } from "lucide-react";
import { Categories, CategoriesNavBar, CategoriesTitle, Category, CategoryContainer, Chart, CoinImg, MarketContainer, SearchContainer, SearchInput, TableCrypto, TableHeader, Title, TradeButton, TableRow, TableCell, TableHeaderRow, CoinInfo, CoinText, SeeAllLink, NoResults } from "./MarketUpdate";
import { useState } from "react";

const allCategories = [
    'Popular',
    'Metaverse',
    'Entertainment',
    'Energy',
    'Gaming',
    'Music',
    'See All 12+'
]

const allCoins = [
    {
        id: 1,
        img: '/btc-icon.png',
        name: 'Bitcoin',
        alias: 'BTC',
        value: '$56,623.54',
        percent: '1.41%',
        chart: '/chart-state-1.png'
    },
    {
        id: 2,
        img: '/eth-icon.png',
        name: 'Ethereum',
        alias: 'ETH',
        value: '$4,267.90',
        percent: '2.22%',
        chart: '/chart-state-2.png'
    },
    {
        id: 3,
        img: '/bnb-icon.png',
        name: 'Binance',
        alias: 'BNB',
        value: '$587.74',
        percent: '-0.82%',
        chart: '/chart-state-3.png'
    },
    {
        id: 4,
        img: '/usdt-icon.png',
        name: 'Tether',
        alias: 'USDT',
        value: '$0.9998',
        percent: '-0.03%',
        chart: '/chart-state-4.png'
    },
    {
        id: 5,
        img: '/sol-icon.png',
        name: 'Solana',
        alias: 'SOL',
        value: '$213.67',
        percent: '-0.53%',
        chart: '/chart-state-5.png'
    },
    {
        id: 6,
        img: '/xrp-icon.png',
        name: 'XRP',
        alias: 'XRP',
        value: '$1.04',
        percent: '-0.44%',
        chart: '/chart-state-6.png'
    },
    {
        id: 7,
        img: '/usdc-icon.png',
        name: 'USD Coin',
        alias: 'USDC',
        value: '$1.00',
        percent: '-0.03%',
        chart: '/chart-state-7.png'
    },
]

const MarketUpdate = () => {
    const [search, setSearch] = useState('')
    const filteredCoins = allCoins.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase()) ||
        coin.alias.toLowerCase().includes(search.toLowerCase())
    )

    const categories = allCategories.map((category, index) => (
        <Category key={index}>{category}</Category>
    ));



    return (
        <MarketContainer>
            <Title>
                Market Update
            </Title>
            <CategoryContainer>
                <CategoriesTitle>
                    Cryptocurrency Categories
                </CategoriesTitle>
                <CategoriesNavBar>
                    <Categories>
                        {categories}
                    </Categories>
                    <SearchContainer>
                        <Search
                            size={24}
                            color="#B6B6B6"
                        />
                        <SearchInput
                            type="text"
                            placeholder="Search Coin"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />

                    </SearchContainer>
                </CategoriesNavBar>
            </CategoryContainer>

            {search === '' && (
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
                        {allCoins.map((coin) => (
                            <TableRow key={coin.id}>
                                <TableCell>
                                    {coin.id}
                                </TableCell>
                                <TableCell>
                                    <CoinInfo>
                                        <CoinImg
                                            src={coin.img}
                                            alt={coin.name}
                                        />
                                        <CoinText>
                                            {coin.name} <span>{coin.alias}</span>
                                        </CoinText>
                                    </CoinInfo>
                                </TableCell>
                                <TableCell>
                                    {coin.value}
                                </TableCell>
                                <TableCell>
                                    {coin.percent}
                                </TableCell>
                                <TableCell>
                                    <Chart
                                        src={coin.chart}
                                        alt="Chart"
                                    />
                                </TableCell>
                                <TableCell>
                                    <TradeButton>Trade</TradeButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </tbody>
                </TableCrypto>
            )}

            {search && (
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

                    {filteredCoins.length > 0 ? (
                        filteredCoins.map((coin, index) => (
                            <>
                                <tbody>
                                    <TableRow key={coin.id}>
                                        <TableCell>
                                            {coin.id}
                                        </TableCell>
                                        <TableCell>
                                            <CoinInfo>
                                                <CoinImg
                                                    src={coin.img}
                                                    alt={coin.name}
                                                />
                                                <CoinText>
                                                    {coin.name} <span>{coin.alias}</span>
                                                </CoinText>
                                            </CoinInfo>
                                        </TableCell>
                                        <TableCell>
                                            {coin.value}
                                        </TableCell>
                                        <TableCell>
                                            {coin.percent}
                                        </TableCell>
                                        <TableCell>
                                            <Chart
                                                src={coin.chart}
                                                alt="Chart"
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <TradeButton>Trade</TradeButton>
                                        </TableCell>
                                    </TableRow>
                                </tbody>
                            </>
                        ))
                    ) : (
                        <NoResults>
                            Nenhum resultado encontrado
                        </NoResults>
                    )}
                </TableCrypto>
            )}

            <SeeAllLink>
                See All Coins
            </SeeAllLink>
        </MarketContainer>
    );
};



export default MarketUpdate;