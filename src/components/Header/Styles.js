import styled from "styled-components";
import fundoHeader from "../../assets/Header.png";
import fundoHeader900px from "../../assets/Header_900px.png";
import LatoBold from "../../fonts/LatoBlack.ttf"

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    background-image: url(${fundoHeader}); 
    background-size: cover;
    width: 100%;
    height: 140px;
    align-items: center;
    background-position: center;
    justify-content: space-between;

    @media (max-width: 900px) {
      background-image: url(${fundoHeader900px}); 
      height: 72px;
    }
`;

export const Titulo = styled.h1`
  @font-face {
          font-family: 'latoBlack';
          src: url(${LatoBold}) format('truetype');
          font-weight: normal;
          font-style: normal;
  } 
  width: 320px;
  font-family: 'latoBold';
  font-style: bold;
  font-size: 45px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #E7E7E7;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (max-width: 900px) {
    font-size: 20px;
    width: 150px;
  }
`;

export const DivButton = styled.div`
  display: flex;
  width: auto;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin-right: 1%;
`;