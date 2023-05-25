import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    margin-top: 70px;
    font-family: 'latoBold';
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    margin-top: 60px;
    div {
        margin-bottom: 15px;
    }
`

export const Rodape = styled.div`
    background-color: #1F1A1A;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 70px;
    font-family: 'latoBold';
    width: 82%;
    margin-left: 9%;
    height: 250px;
`

export const Pontoadm = styled.div`
    background-color: #1F1A1A;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 70px;
    font-family: 'latoBold';
    width: 90%;
    margin-left: 5%;
    height: 250px;
`

export const Titulo1 = styled.div`
    text-align: center;
    font-size: 25px;
    height: 82px;
    color: #FFA000;
`

export const Botaoadm = styled.button`
    display: flex;
    width: auto;
    flex-direction: column;
    border: none;
    border-radius: 5px;
`

export const PontoLogado = styled.div`
    background-color: #1F1A1A;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 70px;
    font-family: 'latoBold';
    width: 90%;
    margin-left: 15px;
    height: 250px;
`

export const Titulo2 = styled.div`
    text-align: center;
    font-size: 25px;
    height: 82px;
    color: #FFA000;
    margin-top: 10px;
`

export const Labelj = styled.p`
    color: #FFA000;
`

export const Labelg = styled.p`
    color: #FFA000;
`

export const Botaologado = styled.button`
    border: none;
    border-radius: 5px;
    display: flex;
    width: auto;
    gap: 25px;
    margin-top: 50px;
`

export const Botaoligado = styled.button`
    border: none;
    border-radius: 5px;
    display: flex;
    width: auto;
    gap: 25px;
    margin-top: 50px;
`

export const Titulo3 = styled.div`
    text-align: center;
    font-size: 25px;
    height: 82px;
    color: #FFA000;
    margin-top: 10px;
`

export const PontoLigado = styled.div`
    background-color: #1F1A1A;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 70px;
    font-family: 'latoBold';
    width: 90%;
    margin-left: 15px;
    height: 250px;
`

export const Labela = styled.p`
    color: #FFA000;
`
export const Labelb = styled.p`
    position: absolute;
    bottom: 420px;
    right: 5%;
    color: #FFA000;
`

export const Labelq = styled.p`
    position: absolute;
    bottom: 420px;
    left: 5%;
    color: #FFA000;
`

export const Labelw = styled.p`
    position: absolute;
    bottom: 450px;
    left: 5%;
    color: #FFA000;
`

export const Logados = styled.div`
    background-color: #1F1A1A;
    display: flex;
    margin-top: 70px;
    font-family: 'latoBold';
    width: 90%;
    margin-left: 5%;
    height: 800px;
    gap: 20%;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
        height: auto;
    }
`

export const Dados = styled.p`
    font-size: 20px;
    color: #FFA000;
    padding-top: 10px;
    padding-left: 80px;

    @media (max-width: 768px) {
        padding-left: 0;
        text-align: center;
        margin-bottom: 10px;
    }
`

export const Time = styled.p`
    display: flex;
    font-size: 20px;
    color: #FFA000;
    padding-top: 10px;

    @media (max-width: 768px) {
        justify-content: center;
    }
`
