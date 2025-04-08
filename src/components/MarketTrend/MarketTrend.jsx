import styled from "styled-components";

export const MarketTrendContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    max-width: 1260px;
    margin: 0 auto;
    margin-bottom: 186px;
    gap: 24px;
`

export const MarketTrendTitle = styled.h1`
    font-size: 24px;
    font-weight: 500;
    color: #ECF1F0;
`

export const MarketTrendContent = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 24px;
`

export const CoinTrendItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 18px;
    padding: 18px;
    gap: 18px;
    background-color: #1D1429;
    border: 1px solid #C6C6C6;
`

export const CoinInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Coin = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 254px;
    gap: 14px;
`

export const CoinImg = styled.img`
    width: 50px;
    height: 50px;
`

export const CoinAlias = styled.p`
    font-size: 18px;
    font-weight: 500;
    color: #ECF1F0;
`

export const CoinName = styled.button`
    padding: 4px 8px;
    background-color: #C6C6C6;
    color: #000000;
    font-size: 10px;
    font-weight: 500;
    border: none;
    border-radius: 4px;
`

export const Divider = styled.div`
    heigth: 1px;
    width: 258px;
    border: 1px solid #ECF1F0;
`

export const CoinValue = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 252px;
`

export const ValueContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 140px;
    gap: 9px;
`

export const Value = styled.h1`
    font-size: 24px;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    color: #ECF1F0;
`

export const Percent = styled.p`
    font-size: 18px;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    color: #B6B6B6;
`

export const Chart = styled.img`
    width: 100px;
    height: 53px;
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30vh;
`;