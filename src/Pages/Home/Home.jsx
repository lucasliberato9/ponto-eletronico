import {
  Container,
  TituloPonto,
  DivImg,
  MeuPonto,
  UsuarioPonto,
  DadosBotão,
  TituloVar,
  JogadorJogo,
  NomesVar,
  BotãoLigar,
  ListaPonto,
} from "./Styles";
import { BotaoGenerico } from "../../components";

function Home() {
  return (
    <Container>
      <DivImg></DivImg>
  
      <MeuPonto>
        <TituloPonto> LIGUE SEU PONTO </TituloPonto>

        <DadosBotão>
          <UsuarioPonto>
            <TituloVar>
              <JogadorJogo> Jogador: </JogadorJogo>
              <NomesVar> Teste123 </NomesVar>
            </TituloVar>

            <TituloVar>
              <JogadorJogo> Jogo: </JogadorJogo>
              <NomesVar> Teste123 </NomesVar>
            </TituloVar>
          </UsuarioPonto>

          <BotãoLigar>
            <BotaoGenerico
              type="button"
              name="Ligar Ponto"
              backgroundColor="#BC0E03"
              color="#d9d9d9"
              hoverBackgroundColor="#990D03"
              width="160px"
              widthResponsive715="200"
              height="80px"
              heightResponsive715="50px"
              fontSize="20px"
            />
          </BotãoLigar>
        </DadosBotão>
      </MeuPonto>

      <ListaPonto></ListaPonto>
    </Container>
  );
}

export default Home;