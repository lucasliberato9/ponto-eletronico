import styled from "styled-components";

export const Button = styled.button`
    width: 175px;
    height: 40px;
    color: #d9d9d9;
    background-color: ${(props) => props.color};
    border: none;
    border-radius: 2px;
`