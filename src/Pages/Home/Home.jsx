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
  TituloListaPonto,
} from "./Styles";
import { BotaoGenerico } from "../../components";
import {Link, useNavigate} from "react-router-dom";
import useAuthStore from "../../stores/auth";
import { Usuario } from "../../components";
import { useEffect, useState } from "react";
import api from "../../services/api";

export default function Home() {
  
  const clearAuth = useAuthStore((state) => state.clearAuth);
  const usuario = useAuthStore((state) => state.usuario);
  const sessao = useAuthStore((state) => state.sessao);
  const navigate = useNavigate();
  const [usuarios, setUsuarios] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const [sessaoCriada, setSessaoCriada] = useState(false);
  const [horarioCriacaoSessao, setHorarioCriacaoSessao] = useState(null);
  const [contadorHoras, setContadorHoras] = useState(0);
  const [sessaoLigada, setSessaoLigada] = useState(false);



  console.log(usuarios);

  const getUsuarios = async () => {
    try {
      setCarregando(true);
      const res = await api.get("/usuarios" );
      setUsuarios(res.data);
   
    } catch (erro) {
      console.error(erro);
      alert(erro.response.data.message);
    } finally {
      setCarregando(false);
    }
  };
  const criarSessao = () => {
    setContadorHoras(0); 
    const horarioAtual = new Date();
    setHorarioCriacaoSessao(horarioAtual);
    setSessaoCriada(true);
    setSessaoLigada(true);
  };
  
  const desligarSessao = () => {
    setSessaoCriada(false);
    setHorarioCriacaoSessao(null);
    setSessaoLigada(false);
  };
  
  

  useEffect(() => {
    let interval;

    if (sessaoCriada) {
      interval = setInterval(() => {
        setContadorHoras((prevContador) => prevContador + 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [sessaoCriada]);


  useEffect(() => {
    getUsuarios();
  }, [])

    if (carregando) 
    return (
      <Container>
        <h1> Carregando... </h1>
      </Container>
  );

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
              backgroundColor="#BC0E03"
              color="#d9d9d9"
              hoverBackgroundColor="#990D03"
              width="200px"
              widthResponsive715="200px"
              height="50px"
              heightResponsive715="50px"
              fontSize="20px"
              onClick={login}
            />
          </BotãoLogin>
        </MeuPonto>
      )}

      {!!usuario && !sessaoLigada &&( 

        <MeuPonto>
          <TituloPonto> LIGUE SEU PONTO </TituloPonto>

          <DadosBotão>
            <UsuarioPonto>
              <TituloVar>
                <JogadorJogo> Jogador: </JogadorJogo>
                <NomesVar> {usuario.nome} </NomesVar>
              </TituloVar>

              <TituloVar>
                <JogadorJogo> Jogo: </JogadorJogo>
                <NomesVar> {usuario.jogo} </NomesVar>
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
                onClick={criarSessao}
              />
            </BotãoLigar>
          </DadosBotão>
        </MeuPonto>
      )}

      {!!usuario && !!sessaoLigada &&(  // Ativa se existir usuário e sessão
        
        <MeuPonto>
          <TituloPonto> SEU PONTO ESTÁ LIGADO </TituloPonto>

          <DadosBotãoLigado>
            <UsuarioPonto>
              <TituloVar>
                <JogadorJogo> Jogador: </JogadorJogo>
                <NomesVar> {usuario.nome} </NomesVar>
              </TituloVar>

              <TituloVar>
                <JogadorJogo> Jogo: </JogadorJogo>
                <NomesVar> {usuario.jogo} </NomesVar>
              </TituloVar>
            </UsuarioPonto>

            <UsuarioTempo>
              <TempoPonto>
                <InicioTempoInicio> Início: </InicioTempoInicio>
                  <TempoVar>
                    {horarioCriacaoSessao ? `${horarioCriacaoSessao.getHours().toString().padStart(2, '0')}:${horarioCriacaoSessao.getMinutes().toString().padStart(2, '0')}` : ''}
                  </TempoVar>
              </TempoPonto>

              <TempoPonto>
                <InicioTempo>Tempo:</InicioTempo>
                  <TempoVar>
                    {`${Math.floor(contadorHoras / 3600).toString().padStart(2, '0')}:${Math.floor((contadorHoras % 3600) / 60).toString().padStart(2, '0')}`}
                  </TempoVar>
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
                onClick={ desligarSessao }
              />
            </BotãoLigar>
          </DadosBotãoLigado>
        </MeuPonto>
      )} 

      {!!usuario && (
        <ListaPonto>

          <TituloListaPonto>
            <TituloPonto> Jogador </TituloPonto>
            <TituloPonto> Jogo </TituloPonto>
            <TituloPonto> Início </TituloPonto>
            <TituloPonto> Tempo </TituloPonto>
          </TituloListaPonto>

          {/* <TituloListaPonto>
            <NomesVar> 
              {usuarios.map((usuario) => (
                <Usuario 
                key={usuario.id}
                usuario={usuario}/>
              ))} 
            </NomesVar>

            <NomesVar> 
              {usuarios.map((usuario) => (
                <Usuario
                key={usuario.id}
                sessaoCriada={sessaoCriada}/>
              ))} 
            </NomesVar>

            <NomesVar> 
              {usuarios.map((usuario) => (
                <Usuario 
                key={usuario.id} 
                horarioCriacaoSessao={horarioCriacaoSessao}/>
              ))} 
            </NomesVar>

            <NomesVar> 
              {usuarios.map((usuario) => (
                <Usuario 
                key={usuario.id} 
                contadorHoras={contadorHoras}/>
              ))} 
            </NomesVar>
          </TituloListaPonto> */}

        </ListaPonto>
      )}

    </Container>
  );
}

