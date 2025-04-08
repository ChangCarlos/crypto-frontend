import styled from "styled-components";

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 90px;
    padding: 0 90px;
    margin: 0 auto;
    margin-bottom: 88px;
    max-width: 1440px;
    
`

export const LogoContainer = styled.div`
    display:flex;

`

export const Logo = styled.h1`
    font-size: 24px;
    color: #FFFFFF;
`

export const NavItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 50px;
`

export const Item = styled.a`
    font-size: 16px;
    font-weight: 500;
    color: #ECF1F0;
    cursor: pointer;
`

export const LoginContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 205px;
`

export const LangSelectContainer = styled.div`
    display: flex;
    gap: 10px;
`

export const LangSelector = styled.select`
    width: 46px;
    background-color: transparent;
    border: none;
    color: #B6B6B6;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
`

export const LangOption = styled.option`
    color: #B6B6B6;
    font-size: 16px;
    font-weight: 500;
    background-color: transparent;
`

export const LoginButton = styled.button`
    width: 104px;
    height: 100%;
    background-color: #0FAE96;
    color: #FFFFFF;
    font-size: 16px;
    font-weight: 500;
    border-radius: 10px;
    padding: 13px 24px;
    border: none;
    cursor: pointer;
`
