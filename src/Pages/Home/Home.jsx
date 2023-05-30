import {
  Container,
  Form,
  Rodape,
  Botaoadm,
  Pontoadm,
  Titulo1,
  Botaologado,
  PontoLogado,
  Titulo2,
  Labelj,
  Labelg,
  Labelb,
  Labela,
  Labelq,
  Labelw,
  PontoLigado,
  Titulo3,
  Botaoligado,
  Logados
  
} from "./Styles";
import { BotaoGenerico } from "../../components";

function Home() {
  return (
    <Container>
      <Form>
        <Rodape></Rodape>
        <PontoLigado>
          <Titulo3>SEU PONTO ESTÁ LIGADO</Titulo3>
          <Labelw> JOGADOR: </Labelw>
          <Labelq> JOGO: </Labelq>
          <Labelb> INÍCIO</Labelb>
          <Labela> TEMPO </Labela>
          <Botaoligado>
            <BotaoGenerico
              height="100%"
              width="100%"
              name="Desligar Ponto"
              backgroundColor="#BC0E03"
              color="#d9d9d9"
              hoverBackgroundColor="#990D03"
            />
          </Botaoligado>
        </PontoLigado>
        <Logados>
          
        </Logados>
      </Form>
    </Container>
  );
}

export default Home;
