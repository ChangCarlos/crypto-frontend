import styled from "styled-components";


export const MarketContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 1261px;
    gap: 31px;
    margin: 0 auto;
    margin-bottom: 130px;
`

export const Title = styled.h1`
    font-size: 36px;
    font-weight: 700;
    color: #ECF1F0;
`

export const CategoryContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 22px;
`

export const CategoriesTitle = styled.p`
    font-size: 18px;
    font-weight: 500;
    font-family: 'Roboto', sans-serif;
    color: #B6B6B6;
`

export const CategoriesNavBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Categories = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 12px;
`

export const Category = styled.button`
    padding: 10px 12px;
    font-size: 16px;
    font-weight: 400;
    color: #B6B6B6;
    border-radius: 10px;
    background-color: #1D1429;
    border: 1px solid #C6C6C6;
    cursor: pointer;

    &:active {
        background-color: #EAEAEA;
        color: #211631;
    }
`

export const SearchContainer = styled.div`
    display: flex;
    width: 282px;
    padding: 10px;
    gap: 16px;
    background-color: #1D1429;
    border: 1px solid #C6C6C6;
    border-radius: 6px;
`

export const SearchInput = styled.input`
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: #B6B6B6;
    background-color: transparent;
    border: none;

    &:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
} 
`

export const TableCrypto = styled.table`
    width: 100%;
    border-collapse: collapse;
    border: 1px solid #C6C6C6;
    background-color: #1D1429;
`

export const TableHeaderRow = styled.tr`
    background-color: #1D1429;
`

export const TableHeader = styled.th`
    padding: 16px;
    text-align: left;
    font-size: 16px;
    font-weight: 500;
    color: #B6B6B6;
    border-bottom: 1px solid #C6C6C6;
`

export const TableRow = styled.tr`
    border-top: 1px solid #C6C6C6;

    &:nth-child(even) {
        background-color: #251b34;
    }
`

export const TableCell = styled.td`
    padding: 12px;
    font-size: 16px;
    color: #B6B6B6;
`

export const CoinInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`

export const CoinText = styled.p`
    font-size: 16px;
    font-weight: 400;
    color: #B6B6B6;
    
    span {
        color: #888;
        font-size: 14px;
    }
`

export const CoinImg = styled.img`
    width: 44px;
    height: 44px;
`

export const Chart = styled.img`
    width: 76px;
    height: 40px;
`

export const TradeButton = styled.button`
    width: 92px;
    height: 32px;
    background-color: #0FAE96;
    color: #FFFFFF;
    font-size: 16px;
    font-weight: 500;
    font-family: 'Raleway', sans-serif;
    border: none;
    border-radius: 10px;
    cursor: pointer;
`

export const SeeAllLink = styled.a`
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    color: #0FAE96;
    text-decoration: underline;
`

export const NoResults = styled.p`
    text-align: left;
    font-size: 16px;
    font-weight: 400;
    color: #B6B6B6;
    padding: 8px;
`;