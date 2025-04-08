import styled from "styled-components"

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
    margin: 8px 0;

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

export const ErrorContainer = styled.div`
    display: flex;
    margin-bottom: 8px;
`

export const ErrorMessage = styled.p`
    font-size: 12px;
    color: #ff0000;
`