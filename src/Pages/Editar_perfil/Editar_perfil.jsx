import {
  Container,
  Titulo,
  Form,
  Label,
  Input,
  DivInputs,
  DivRow,
  DivEmail,
  DivButton,
} from "./Styles.js";
import { BotaoGenerico } from "../../components";
import { useState } from "react";


function Editar_perfil() {

  const [nome, setNome] = useState(usuario.nome);
  const [nickname, setNick] = useState(usuario.nickname);
  const [email, setEmailEdit] = useState(usuario.email);
  const [jogo, setJogo] = useState(usuario.jogo);
  const [elo, setElo] = useState(usuario.elo);
  const [senha, setSenhaEditarPerfil] = useState(usuario.senha);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setCarregando(true);
      const res = await api.post("/editar-perfil", {nome, nickname, email, jogo, elo, senha });

      console.log("Dados editados!", res.data);
    } catch (erro) {
      console.log("Erro ao editar os dados:", erro);
    } finally{
      setCarregando(false);
    }
  };

  if (carregando) 
    return (
      <Container>
        <h1> Editando dados... </h1>
      </Container>
  );
  return (
    <Container>
      <Titulo>Altere seus dados aqui!</Titulo>

      <Form onSubmit={handleSubmit}>
        <DivInputs>
        <DivRow>
            <Label htmlFor="nome"> Nome: </Label>
            <Input id="nome" placeholder= "Digite seu nome" value={nome} onChange={(e)=> setNome(e.target.value)}></Input>
          </DivRow>

          <DivRow>
            <Label htmlFor="nickname"> Nickname: </Label>
            <Input id="nick" placeholder= "Digite seu nickname" value={nickname} onChange={(e)=> setNick(e.target.value)}></Input>
          </DivRow>
        </DivInputs>

        <DivEmail>
          <Label htmlFor="email"> Email: </Label>
          <Input id="email" type="email" placeholder="seuemail@email.com" value={email} onChange={(e) => setEmailEdit(e.target.value)}></Input>
        </DivEmail>

        <DivInputs>
          <DivRow>
            <Label htmlFor="jogo"> Jogo: </Label>
            <Input id="jogo" placeholder= "Digite seu jogo" value={jogo} onChange={(e)=> setJogo(e.target.value)}></Input>
          </DivRow>

          <DivRow>
            <Label htmlFor="elo"> Rank/Elo: </Label>
            <Input id="elo" placeholder= "Digite seu rank/elo no jogo" value={elo} onChange={(e)=> setElo(e.target.value)}></Input>
          </DivRow>
        </DivInputs>

        <DivInputs>
          <DivRow>
            <Label htmlFor="senha"> Senha: </Label>
            <Input id="senha" type="password" placeHolder="Escolha sua nova senha"  onChange={(e)=> setSenhaEditarPerfil(e.target.value)}></Input>
          </DivRow>

        </DivInputs>
      </Form>

      <DivButton>
        <BotaoGenerico name="Confirmar" />
        <BotaoGenerico
          name="Cancelar Alterações"
          backgroundColor="#BC0E03"
          color="#d9d9d9"
          hoverBackgroundColor="#990D03"
        />
      </DivButton>
    </Container>
  );
}

export default Editar_perfil;
