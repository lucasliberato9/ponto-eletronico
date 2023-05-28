import { Container, Form, Rodape, Botaoadm,Pontoadm, Titulo1,
  Botaologado, PontoLogado, Titulo2, Labelj, Labelg, Labelb, Labela, Labelq,Labelw,
  PontoLigado,Titulo3, Botaoligado, 
  Logados, Time, Dados} from "./Styles";
import { BotaoGenerico } from "../../components";

function Home() {

  return (
    <Container>
    <Form>
      <>
        <Rodape></Rodape>

        <Pontoadm>
          <Titulo1>ADMINISTRE SEU PONTO</Titulo1>
          <Botaoadm>
            <BotaoGenerico
              height="100%" width="100%" name="Login/Cadastre-se" backgroundColor="#BC0E03" color="#d9d9d9" hoverBackgroundColor="#990D03"
            />
          </Botaoadm>
        </Pontoadm>
      </>

      <Logados>
        <Dados>JOGADOR</Dados>
        <Dados>JOGO</Dados>
        <Time>INÍCIO</Time>
        <Time>TEMPO</Time>
      </Logados>
    </Form>
  </Container>




  )
  

}
  
export default Home;