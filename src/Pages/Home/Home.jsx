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
  TempoPonto,
  BotãoLogin,
  UsuarioTempo,
  TempoVar,
  InicioTempo,
  DivSpace,
  InicioTempoInicio,
  DadosBotãoLigado,
  // UsuarioAtivo,
  // TituloListaPonto,
} from "./Styles";
import { BotaoGenerico } from "../../components";
import {Link, useNavigate} from "react-router-dom";
import useAuthStore from "../../stores/auth";

function Home() {
  const usuario = useAuthStore((state) => state.usuario);
  // const sessao = useAuthStore((state) => state.sessao);
  const navigate = useNavigate();

  const login = () => {
    navigate("/login");
  }

  return (
    <Container>

      <DivImg></DivImg>

      {!usuario && (
        <MeuPonto>
          <TituloPonto> ADMINISTRE SEU PONTO </TituloPonto>

          <DivSpace/>

          <BotãoLogin>
            {/* Esse botão deve redirecionar para a página Login */}
            <BotaoGenerico
              type="button"
              
              name="Login / Cadastre-se"
              onClick={login}
              backgroundColor="#BC0E03"
              color="#d9d9d9"
              hoverBackgroundColor="#990D03"
              width="200px"
              widthResponsive715="200px"
              height="50px"
              heightResponsive715="50px"
              fontSize="20px"
            />
          </BotãoLogin>
        </MeuPonto>
      )}

      {!!usuario && (// !sessao && // Ativa se existir usuário mas não existir sessão

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
              {/* Esse botão deve criar uma sessão para o usuário */}
              <BotaoGenerico
                type="button"
                name="Ligar Ponto"
                backgroundColor="#BC0E03"
                color="#d9d9d9"
                hoverBackgroundColor="#990D03"
                width="160px"
                widthResponsive715="210px"
                height="80px"
                heightResponsive715="50px"
                fontSize="20px"
              />
            </BotãoLigar>
          </DadosBotão>
        </MeuPonto>
      )}

      {!!usuario && (// !!sessao &&  // Ativa se existir usuário e sessão
        
        <MeuPonto>
          <TituloPonto> SEU PONTO ESTÁ LIGADO </TituloPonto>

          <DadosBotãoLigado>
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

            <UsuarioTempo>
              <TempoPonto>
                <InicioTempoInicio> Início: </InicioTempoInicio>
                <TempoVar> 00:00 </TempoVar>
              </TempoPonto>

              <TempoPonto>
                <InicioTempo> Tempo: </InicioTempo>
                <TempoVar> 00:00 </TempoVar>
              </TempoPonto>
            </UsuarioTempo>

            <BotãoLigar> 
              {/* Esse botão deve deletar a sessão do usuário */}
              <BotaoGenerico
                type="button"
                name="Desligar Ponto"
                backgroundColor="#BC0E03"
                color="#d9d9d9"
                hoverBackgroundColor="#990D03"
                width="160px"
                widthResponsive715="210px"
                height="80px"
                heightResponsive715="50px"
                fontSize="20px"
              />
            </BotãoLigar>
          </DadosBotãoLigado>
        </MeuPonto>
      )} 

      <ListaPonto>
        {/* <TituloListaPonto>
          <TituloPonto> Jogador </TituloPonto>
          <TituloPonto> Jogo </TituloPonto>
          <TituloPonto> Início </TituloPonto>
          <TituloPonto> Tempo </TituloPonto>
        </TituloListaPonto> */}
        {/* <UsuarioAtivo></UsuarioAtivo> */}
      </ListaPonto>
    </Container>
  );
}

export default Home;
