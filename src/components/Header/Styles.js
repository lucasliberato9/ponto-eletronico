import styled from "styled-components";
import fundoHeader_full from "../../assets/Header_full.png";
import fundoHeader_mid from "../../assets/Header_mid.png";
import fundoHeader_mini from "../../assets/mini-header.png";
import LatoBold from "../../fonts/LatoBlack.ttf"

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-image: url(${fundoHeader_full}); 
  background-size: cover;
  width: 100%;
  height: 72px;
  align-items: center;
  background-position: center;
  justify-content: space-between;

  @media (max-width: 550px) {
    background-image: url(${fundoHeader_mid}); 
  }

    @media (max-width: 419px) {
      background-image: url(${fundoHeader_mini}); 
    }
`;

export const Titulo = styled.h1`
  @font-face {
          font-family: 'latoBlack';
          src: url(${LatoBold}) format('truetype');
          font-weight: normal;
          font-style: normal;
  } 
  width: 150px;
  font-family: 'latoBold';
  font-style: bold;
  font-size: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #E7E7E7;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const DivButton = styled.div`
  display: flex;
  width: 150px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin-right: 3%;
  gap: 7px;
`;