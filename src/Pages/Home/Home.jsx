import {
  Container,
  TituloPonto,
  DivImg,
  MeuPonto,
  UsuarioPonto,
  TituloVar,
  JogadorJogo,
  NomesVar,
  ListaPonto,
} from "./Styles";
import { BotaoGenerico } from "../../components";

function Home() {
  return (
    <Container>
      <DivImg></DivImg>

      <MeuPonto>
        <TituloPonto>LIGUE SEU PONTO</TituloPonto>

        <UsuarioPonto>
          <TituloVar>
            <JogadorJogo>JOGADOR:</JogadorJogo>
            <NomesVar>teste</NomesVar>
          </TituloVar>

          <TituloVar>
            <JogadorJogo>JOGO:</JogadorJogo>
            <NomesVar>teste</NomesVar>
          </TituloVar>
        </UsuarioPonto>
      </MeuPonto>

      <ListaPonto></ListaPonto>
    </Container>
  );
}

export default Home;
