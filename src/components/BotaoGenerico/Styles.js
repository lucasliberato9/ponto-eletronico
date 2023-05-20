import styled from "styled-components";

export const Button = styled.button`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    color: #d9d9d9;
    background-color: ${(props) => props.color};
`