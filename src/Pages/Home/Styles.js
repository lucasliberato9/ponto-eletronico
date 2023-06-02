import styled from "styled-components";
import imagem_home from "../../assets/imagem_home.png";

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
  flex-direction: row;
  background-image: url(${imagem_home}); 
  background-size: cover;
  margin-bottom: 20px;
  width: 60%;
  height: 294px;
  align-items: center;
  background-position: center;
  justify-content: space-between;

  @media (max-width: 550px) {
  }
`;

// Início das divs da HOME -  PONTO

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
export const TituloPontoResponse = styled.div`
  display: flex;
  color: #ffa000;
  text-align: center;
  align-content: center;
  align-self: center;
  justify-content: center;
  width: 100%;
  height: auto;
  margin-top: 20px;
  @media (max-width:"800px"){
  width: 0%;
  }
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
  @media (max-width: 300px){
    width: 80%;
  }
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
  @media (max-width: 1050px){
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

  @media (max-width: 1050px){
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
  @media (max-width: 1050px){
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
  @media (max-width: 1050px){
    justify-content: center;
    margin-right: 0px;
    margin-bottom: 20px;
  }
`;
export const BotãoLogin = styled.div`
  display: flex;
    width: 100%;
    background-color: #1f1a1a;
    height: auto;
    align-items: center;
    justify-content: center;
    margin-right: 0;
    margin-bottom: 10px;
  @media (max-width: 1050px){
    justify-content: center;
    align-items: center;
    margin-right: 0px;
    margin-bottom: 20px;
  }
`;
export const TempoPonto = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  color: #ffa000;
  text-align: left;
  width: 100%;
  height: auto;
  justify-items: center;

  @media (max-width: 1050px){
    text-align: center;
    justify-content: center;
    align-self: center;
  }
`;
export const TempoVar = styled.div`
  display: flex;
  font-family: "latoBold";
  background-color: #D9D9D9;
  color: black;
  text-align: left;
  width: auto;
  height: auto;
`;
export const UsuarioTempo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: auto;
  align-items: center;
  background-color: #1f1a1a;
  height: auto;
  margin-top: 20px;
  @media (max-width: 1050px){
    margin-bottom: 20px;
    flex-direction: row;
    margin-top: -5px;
    justify-content: center;
    align-self: center;
  }
  @media (max-width: 550px){
    flex-direction: column;
  } 
`;
export const InicioTempo = styled.div`
  display: flex;
  color: #ffa000;
  text-align: center;
  margin-right: 2px;
  width: auto;
  height: auto;
`;
export const DadosBotãoLigado = styled.div`
  display: flex;
  flex-direction: row;
  color: #ffa000;
  width: 100%;
  height: auto;

  @media (max-width: 1050px){
    flex-direction: column;
  }
`;
export const InicioTempoInicio = styled.div`
  display: flex;
  color: #ffa000;
  text-align: center;
  margin-right: 15px;
  width: auto;
  height: auto;
`;
export const DivSpace = styled.div`
  margin-top: 20px;
`

// Fim das divs HOME - PONTO

export const ListaPonto = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 65%;
  align-items: center;
  background-color: #1f1a1a;
  height: auto;
`;
export const TituloListaPonto = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 25px;
  margin-bottom: 20px;
  width: 100%;
  align-items: center;
  background-color: #1f1a1a;
  height: auto;
`;
