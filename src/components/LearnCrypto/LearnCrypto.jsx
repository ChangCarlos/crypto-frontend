import styled from "styled-components";

export const LearnContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 60px;
    max-width: 1262px;
    margin: 0 auto;
    margin-bottom: 225px;
`

export const LearnHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 15px;
`

export const HeaderTitle = styled.h1`
    font-size: 36px;
    font-weight: 700;
    color: #ECF1F0;
`

export const HeaderSubtitle = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    font-weight: 400;
    color: #B6B6B6;
`

export const ArticlesContainer = styled.div`
    display: flex;
    max-width: 100%;
    gap: 26px;
    flex-wrap: wrap;
`

export const Article = styled.div`
    display: flex;
    max-width: 296px;
    flex-direction: column;
    padding-bottom: 16px;
    border: 1px solid #C6C6C6;
    background-color: #1D1429;
    border-radius: 18px;
`

export const Thumbnail = styled.img`
    border-radius: 18px 18px 0 0;
`

export const Content = styled.div`
    display: flex; 
    flex-direction: column;
    gap: 20px;
    padding: 20px;
`

export const Label = styled.button`
    padding: 4px 6px;
    margin-right: 150px;
    border-radius: 4px;
    background-color:rgb(56, 39, 79);
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    font-weight: 500;
    color: #B6B6B6;
    border: none;
`

export const Title = styled.h1`
    font-size: 16px;
    font-weight: 600;
    color: #ECF1F0;
`

export const Subtitle = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: #B6B6B6;
`

export const SeeAllArticles = styled.a`
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    color: #0FAE96;
    text-decoration: underline;
`