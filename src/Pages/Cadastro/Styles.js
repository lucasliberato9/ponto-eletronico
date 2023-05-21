import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    margin-top: 70px;
`

export const Titulo = styled.div`
    text-align: center;
    font-size: 25px;
    height: 82px;
`

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    justify-content: center;
    margin-top: 60px;
    div {
        margin-bottom: 15px;
    }
`

export const Label = styled.p`
    color: #FFA000;
`

export const Input = styled.input`
    width: 100%;
    height: 40px;
    background: #D9D9D9;
    padding-left: 15px;
    border: none;
    border-radius: 2px;
`

export const DivInputs = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 60px;
    align-self: center;
`

export const DivRow = styled.div`
    width: 100%;
    gap: 60px;
    align-self: center;
`

export const DivEmail = styled.div`
    width: 100%;
    gap: 60px;
    align-self: center;
`

export const DivButton = styled.div`
    display: flex;
    width: auto;
    flex-direction: row;
    gap: 60px;
    margin-top: 48px;
`