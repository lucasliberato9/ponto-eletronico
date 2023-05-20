import styled from "styled-components";

export const Button = styled.button`
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
`