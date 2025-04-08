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

export const Logo = styled.h2`
    font-size: 24px;
    font-weight: 600;
    color: #27AE60;
`

export const Title = styled.h1`
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 24px;
    color: #FFFFFF
`

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%
`

export const Form = styled.form`

`

export const Label = styled.label`
    font-size: 14px;
    font-weight: 600;
    color: #FFFFFF;
`

export const Input = styled.input`
    width: 100%;
    height: 42px;
    padding: 10px 16px;
    gap: 10px;
    border-radius: 8px;
    border: 1px solid #2E2E2E;
    font-size: 14px;
    font-weight: 400;
    color: #898989;
    background-color: transparent;
`

export const ForgotPassword = styled.a`
    font-size: 12px;
    font-weight: 400;
    color: #3ECF8E;
    text-decoration: none;
`

export const LogInBtn = styled.button`
    height: 42px;
    padding: 12px 24px;
    border-radius: 8px;
    border: none;
    background-color: #27AE60;
    font-size: 14px;
    font-weight: 600;
    color: #FFFFFF;
    cursor: pointer;
    margin: 18px;
`

export const CreateAccountContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 16px;
    gap: 16px;
`

export const CreateAccount = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`

export const CreateAccountTitle = styled.p`
    font-size: 12px;
    font-weight: 600;
    color: #C4C4CC
`

export const CreateAccountLink = styled.a`
    font-size: 16px;
    font-weight: 600;
    color: #3ECF8E;
    text-decoration: none;
    cursor: pointer;
`

export const CreateAccountBtn = styled.button`
    height: 42px;
    padding: 12px 24px;
    border-radius: 8px;
    border: none;
    background-color: #27AE60;
    font-size: 14px;
    font-weight: 600;
    color: #FFFFFF;
    cursor: pointer;
    margin: 18px;
`