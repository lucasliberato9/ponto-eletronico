import styled from "styled-components";
import fundoHeader from "../../assets/Header.png";
import LatoBold from "../../fonts/LatoBlack.ttf"

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    background-image: url(${fundoHeader}); 
    background-size: cover;
    width: 100%;
    height: 140px;
    align-items: center;
`;

export const Titulo = styled.h1`
  @font-face {
          font-family: 'latoBlack';
          src: url(${LatoBold}) format('truetype');
          font-weight: normal;
          font-style: normal;
  } 
  margin-left: 37px;
  width: 350px;
  height: 45px;
  font-family: 'latoBold';
  font-style: bold;
  font-size: 50px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #E7E7E7;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

`;