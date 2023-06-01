import styled from "styled-components";
// import imagem_home from "../../assets/imagem_home.png";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
  align-items: center;
  margin-top: 70px;
  font-family: "latoBold";
`;
export const DivImg = styled.div`
  display: flex;
  width: 80%;
  height: 273px;
  align-self: center;
`;

// Início das divs da HOME - LIGUE SEU PONTO

export const TituloPonto = styled.div`
  display: flex;
  color: #ffa000;
  text-align: center;
  align-content: center;
  align-self: center;
  justify-content: center;
  width: 100%;
  height: auto;
  margin-top: 20px;
`;
export const MeuPonto = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
  align-items: center;
  background-color: #1f1a1a;
  height: auto;
  margin-bottom: 20px;
  font-size: 25px;
`;
export const JogadorJogo = styled.div`
  display: flex;
  color: #ffa000;
  text-align: left;
  width: auto;
  height: auto;
`;
export const NomesVar = styled.div`
  display: flex;
  font-family: "latoRegular";
  color: white;
  text-align: left;
  width: auto;
  height: auto;
`;
export const TituloVar = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  color: #ffa000;
  text-align: left;
  width: 100%;
  height: auto;
  margin-bottom: 20px;
  @media (max-width: 715px){
    text-align: center;
    justify-content: center;
    align-self: center;
  }
`;
export const DadosBotão = styled.div`
  display: flex;
  flex-direction: row;
  color: #ffa000;
  width: 100%;
  height: auto;

  @media (max-width: 715px){
    flex-direction: column;
  }
`;
export const UsuarioPonto = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  align-items: center;
  background-color: #1f1a1a;
  height: auto;
  margin-top: 20px;
  margin-left: 30px;
  @media (max-width: 715px){
    margin-left: 0px;
    justify-content: center;
    align-self: center;
  }
`;
export const BotãoLigar = styled.div`
  display: flex;
  width: 100%;
  background-color: #1f1a1a;
  height: auto;
  align-items: center;
  justify-content: end;
  margin-right: 22px;
  @media (max-width: 715px){
    justify-content: center;
    margin-right: 0px;
    margin-bottom: 20px;
  }
`;
export const ListaPonto = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  align-items: center;
  background-color: #1f1a1a;
  height: auto;
`;

// Fim das divs HOME - LIGUE SEU PONTO

// export const Pontoadm = styled.div`
// background-color: #1f1a1a;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin-top: 70px;
//   font-family: "latoBold";
//   width: 90%;
//   margin-left: 5%;
//   height: 250px;

//   @media (max-width: 768px) {
//     height: 150px;
//   }
// `;
// export const Titulo1 = styled.div`
//   text-align: center;
//   font-size: 25px;
//   height: 82px;
//   color: #ffa000;
//   margin-top: 10px;
// `;
// export const Botaoadm = styled.button`
//   display: flex;
//   width: 120px;
//   flex-direction: column;
//   border: none;
//   border-radius: 5px;
//   height: 80px;
//   @media (max-width: 768px) {
//     margin-left: 0;
//     margin-top: 0;
//     width: 90%;
//     height: 40px;
//   }
// `;
// export const PontoLogado = styled.div`
//   background-color: #1f1a1a;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin-top: 70px;
//   font-family: "latoBold";
//   width: 90%;
//   margin-left: 5%;
//   height: 250px;
// `;
// export const Labelg = styled.p`
//   position: absolute;
//   top: 700px;
//   left: 8%;
//   color: #ffa000;

//   position: absolute;

//   @media (max-width: 768px) {
//     top: 610px;
//     left: 30%;
//   }
// `;
// export const Botaologado = styled.button`
//   border: none;
//   border-radius: 5px;
//   display: flex;
//   width: 100px;
//   margin-left: 80%;
//   height: 25%;

//   @media (max-width: 768px) {
//     margin-left: 0;
//     margin-top: 75px;
//     width: 90%;
//     height: 40px;
//   }
// `;
// export const Botaoligado = styled.button`
//   border: none;
//   border-radius: 5px;
//   display: flex;
//   width: 100px;
//   margin-left: 80%;
//   height: 25%;

//   @media (max-width: 768px) {
//     margin-left: 0;
//     margin-top: 75px;
//     width: 90%;
//     height: 40px;
//   }
// `;
// export const PontoLigado = styled.div`
//   background-color: #1f1a1a;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin-top: 70px;
//   font-family: "latoBold";
//   width: 90%;
//   margin-left: 5%;
//   height: 250px;
// `;
// export const Logados = styled.div`
//   background-color: #1f1a1a;
//   display: flex;
//   margin-top: 20px;
//   font-family: "latoBold";
//   width: 90%;
//   margin-left: 5%;
// `;
// export const Labelq = styled.p`
//   position: absolute;
//   top: 700px;
//   left: 8%;
//   color: #ffa000;
//   @media (max-width: 768px) {
//     top: 580px;
//     left: 35%;
//   }
// `;
// export const Labelw = styled.p`
//   position: absolute;
//   left: 8%;
//   color: #ffa000;
//   top: 650px;
//   @media (max-width: 768px) {
//     top: 560px;
//     left: 35%;
//   }
// `;
// export const Jogador = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   margin-top: 100px;
//   width: 80%;
//   height: 60px;
//   background-color: yellow;
// `;
