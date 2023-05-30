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

  const [nome, setNome] = useState("");
  const [nick, setNick] = useState("");
  const [emailedit, setEmailEdit] = useState("");
  const [jogo, setJogo] = useState("");
  const [elo, setElo] = useState("");
  const [senhaEditarPerfil, setSenhaEditarPerfil] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({emailCadastro, senhaCadastro, nome, nick, jogo, elo});
  }

  return (
    <Container>
      <Titulo>Altere seus dados aqui!</Titulo>

      <Form onSubmit={handleSubmit}>
        <DivInputs>
        <DivRow>
            <Label htmlFor="nome"> Nome: </Label>
            <Input id="nome" placeholder= "Digite seu nome" required onChange={(e)=> setNome(e.target.value)}></Input>
          </DivRow>

          <DivRow>
            <Label htmlFor="nick"> Nickname: </Label>
            <Input id="nick" placeholder= "Digite seu nickname" required onChange={(e)=> setNick(e.target.value)}></Input>
          </DivRow>
        </DivInputs>

        <DivEmail>
          <Label htmlFor="emailedit"> Email: </Label>
          <Input id="emailEdit" type="email" placeholder="seuemail@email.com" required onChange={(e) => setEmailEdit(e.target.value)}></Input>
        </DivEmail>

        <DivInputs>
          <DivRow>
            <Label htmlFor="jogo"> Jogo: </Label>
            <Input id="jogo" placeholder= "Digite seu jogo" required onChange={(e)=> setJogo(e.target.value)}></Input>
          </DivRow>

          <DivRow>
            <Label htmlFor="elo"> Rank/Elo: </Label>
            <Input id="elo" placeholder= "Digite seu rank/elo no jogo" required onChange={(e)=> setElo(e.target.value)}></Input>
          </DivRow>
        </DivInputs>

        <DivInputs>
          <DivRow>
            <Label htmlFor="senhaEditarPerfil"> Senha: </Label>
            <Input id="senhaEditarPerfil" type="password" placeHolder="Escolha sua nova senha" required onChange={(e)=> setSenhaEditarPerfil(e.target.value)}></Input>
          </DivRow>

          <DivRow>
            <Label htmlFor="senhaEditarPerfil"> Confirmação de senha: </Label>
            <Input  id="senhaEditarPerfil" type="password" placeholder= "Confirme sua nova senha" required onChange={(e)=> setSenhaEditarPerfil(e.target.value) }></Input>
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
