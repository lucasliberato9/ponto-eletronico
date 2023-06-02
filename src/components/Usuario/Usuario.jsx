import { Valor, Container, Dados, Dado, TempoVar } from "./Styles";

function Usuario({ usuario, sessaoCriada, horarioCriacaoSessao, contadorHoras }) {
  const calcularTempo = () => {
    if (sessaoCriada && horarioCriacaoSessao) {
      const tempoAtual = new Date();
      const diff = Math.abs(tempoAtual - horarioCriacaoSessao);
      const horas = Math.floor(diff / (1000 * 60 * 60));
      const minutos = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      return `${horas.toString().padStart(2, "0")}:${minutos.toString().padStart(2, "0")}`;
    } else {
      return "00:00";
    }
  };

  return (
    <Container>
      <Dados>
        <Dado>
          <Valor>{usuario.nome} </Valor>
        </Dado>
        <Dado>
          <Valor> {usuario.jogo} </Valor>
        </Dado>
        <Dado>
          <Valor>
            <TempoVar>{horarioCriacaoSessao ? horarioCriacaoSessao.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : "00:00"}</TempoVar>
          </Valor>
        </Dado>
        <Dado>
          <Valor>
            <TempoVar>{calcularTempo()}</TempoVar>
          </Valor>
        </Dado>
      </Dados>
    </Container>
  );
}

export default Usuario;
