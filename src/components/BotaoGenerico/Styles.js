import styled from "styled-components";

export const Button = styled.button`
<<<<<<< HEAD
    font-family : 'latoBold';
    border: none;
    border-radius: 2px;

    width: ${(props) => props.width};
    height: ${(props) => props.height};
    background-color: ${(props) => props.backgroundColor};
    color: ${(props) => props.color};

    &:hover {
        background-color: ${(props) => props.hoverBackgroundColor};
        cursor: pointer;
    }
=======
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    color: #d9d9d9;
    background-color: ${(props) => props.color};
>>>>>>> a29e0af (BotaoGenerico com props width e height)
`