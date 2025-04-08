import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  z-index: 10;
`

export const ModalContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #1a1a1a;
    width: 440px;
    border-radius: 8px;
    border: 1px solid #2E2E2E;
    padding: 24px;
    z-index: 11;
`

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 32px;
`

export const ItemImage = styled.img`
    width: 80px;
    height: 80px;
`

export const Item = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    padding: 8px;
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
    line-height: 125%;
`