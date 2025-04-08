import styled from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 788px;
    margin: 0 auto;
    gap: 40px;
    margin-bottom: 136px;
`

export const HeaderTitle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
`

export const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
`

export const Title = styled.h1`
    font-size: 36px;
    font-weight: 700;
    color: #ECF1F0;
`

export const SubTitleContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 10px 150px;
`

export const SubTitle = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    font-weight: 400;
    color: #B6B6B6;
    line-height: 160%
`

export const GetStartedButton = styled.button`
    width: 190px;
    background-color: #0FAE96;
    border: none;
    border-radius: 10px;
    color: #FFFFFF;
    font-size: 16px;
    font-weight: 500;
    padding: 16px 24px;
    cursor: pointer;
`