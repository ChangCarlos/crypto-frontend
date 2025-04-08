import styled from "styled-components";

export const FeaturesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 1256px;
    margin: 0 auto;
    gap: 69px;
    margin-bottom: 127px;
`

export const FeatureTitle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
`

export const Title = styled.h1`
    font-size: 36px;
    font-weight: 700;
    color: #ECF1F0;   
`

export const Subtitle = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    font-weight: 400;
    color: #B6B6B6;   
`

export const FeaturesCardsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 24px;
`

export const FeaturesCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 18px;
    padding: 30px;
    gap: 18px;
    background-color: #1D1429;
    border: 1px solid #C6C6C6;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 38px;
`

export const ItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 27px;
`

export const ItemImage = styled.img`
    width: 80px;
    height: 80px;
`

export const Item = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`

export const ItemTitle = styled.h1`
    font-size: 20px;
    font-weight: 500;
    color: #ECF1F0;
`

export const ItemDescription = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: #B6B6B6;
`

export const LinkContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
`

export const Link = styled.a`
    font-size: 16px;
    font-weight: 500;
    color: #0FAE96;
    cursor: pointer;
`