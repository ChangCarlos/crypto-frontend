import styled from "styled-components";

export const Container = styled.div`
    display: flex; 
    justify-content: space-between;
    align-items: center;
    max-width: 1258px;
    padding: 20px 60px;
    border-radius: 12px;
    background-color: #1D1429;
    border: 1px solid #C6C6C6;
    margin: 0 auto;
    margin-bottom: 136px;
`

export const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 536px;
    gap: 12px
`

export const Title = styled.h1`
    font-size: 24px;
    font-weight: 500;
    color: #ECF1F0;
    line-height: 32px;
`

export const Description = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    font-weight: 400;
    color: #B6B6B6;
`

export const Button = styled.button`
    font-family: 'Raleway', sans-serif;
    padding: 16px 24px;
    font-size: 16px;
    font-weight: 500;
    color: #FFFFFF;
    background-color: #0FAE96;
    border-radius: 10px;
    border: none;
    cursor: pointer;
`