import { Container, Titulo, Form, Label, Input, DivInputs, DivRow, DivEmail, DivButton } from "./Styles.js";
import { BotaoGenerico } from "../../components";
import { useState } from "react";


function Cadastro() {
  const [nome, setNome] = useState("");
  const [nick, setNick] = useState("");
  const [emailCadastro, setEmailCadastro] = useState("");
  const [jogo, setJogo] = useState("");
  const [elo, setElo] = useState("");
  const [senhaCadastro, setSenhaCadastro] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({emailCadastro, senhaCadastro, nome, nick, jogo, elo});
  }
  return (

    <Container>

      <Titulo>
        Preencha os seus dados para se cadastrar!
      </Titulo>

      <Form onSubmit={handleSubmit}>

        <DivInputs>
          <DivRow>
            <Label htmlFor="nome"> Nome: </Label>
            <Input id="nome" placeholder= "Digite seu nome" required onChange={(e) => setNome(e.target.value) } ></Input>
          </DivRow>

          <DivRow>
            <Label htmlFor="nick"> Nickname: </Label>
            <Input id="nick" placeholder= "Digite seu nickname" required onChange={(e) => setNick(e.target.value)}></Input>
          </DivRow>
        </DivInputs>

        <DivEmail>
          <Label htmlFor="email"> Email: </Label>
          <Input id="email" type="email" placeholder="seuemail@email.com" required onChange={(e)=> setEmailCadastro(e.target.value)}></Input>
        </DivEmail>

        <DivInputs>
        <DivRow>
            <Label htmlFor="jogo"> Jogo: </Label>
            <Input
              id="jogo"
              list="jogos"
              placeholder="Digite seu jogo"
              required
              onChange={(e) => setJogo(e.target.value)}
            ></Input>
            <datalist id="jogos">
              <option value="Fortnite" />
              <option value="League of Legends" />
              <option value="Valorant" />
              <option value="R6" />
            </datalist>
          </DivRow>

          <DivRow>
            <Label htmlFor="elo"> Rank/Elo: </Label>
            <Input id="elo" placeholder= "Digite seu rank/elo no jogo" required onChange={(e) => setElo(e.target.value)}></Input>
            
          </DivRow>
        </DivInputs>

        <DivInputs>
          <DivRow>
            <Label htmlFor="senhaCadastro"> Senha: </Label>
            <Input id="senhaCadastro" type="password" placeHolder="Escolha uma senha" required onChange={(e) => setSenhaCadastro(e.target.value)}></Input>
          </DivRow>

          <DivRow>
            <Label htmlFor="senhaCadastro"> Confirmação de senha: </Label>
            <Input  id="senhaCadastro" type="password" placeholder= "Confirme sua senha" required onChange={(e)=> setSenhaCadastro(e.target.value)}></Input>
          </DivRow>
        </DivInputs>

      </Form>

      <DivButton>
        <BotaoGenerico name= "Enviar" />
      </DivButton> 

    </Container>
  ) 

}

export default Cadastro;