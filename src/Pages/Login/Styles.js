import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 70px;
    font-family: 'latoBold';
`

export const Titulo = styled.div`
    text-align: center;
    font-size: 25px;
    height: 82px;
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 50%;
    justify-content: center;

    div {
        margin-bottom: 15px;
    }
`

export const Campo = styled.div``

export const Label = styled.label`
    color: #FFA000;
`

export const Input = styled.input`
    width: 100%;
    height: 40px;
    background: #D9D9D9;
    padding-left: 15px;
    border: none;
    border-radius: 2px;
    font-family: 'latoRegular';
`

export const DivButton = styled.div`
    display: flex;
    width: auto;
    flex-direction: column;
    gap: 25px;
    margin-top: 50px;
`
