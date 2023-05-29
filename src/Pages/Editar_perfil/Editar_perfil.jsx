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

function Editar_perfil() {
  
  return (
    <Container>
      <Titulo>Altere seus dados aqui!</Titulo>

      <Form>
        <DivInputs>
        <DivRow>
            <Label htmlFor="nome"> Nome: </Label>
            <Input id="nome" placeholder= "Digite seu nome" required></Input>
          </DivRow>

          <DivRow>
            <Label htmlFor="nick"> Nickname: </Label>
            <Input id="nick" placeholder= "Digite seu nickname" required></Input>
          </DivRow>
        </DivInputs>

        <DivEmail>
          <Label htmlFor="email"> Email: </Label>
          <Input id="email" type="email" placeholder="seuemail@email.com" required></Input>
        </DivEmail>

        <DivInputs>
          <DivRow>
            <Label htmlFor="jogo"> Jogo: </Label>
            <Input id="jogo" placeholder= "Digite seu jogo" required></Input>
          </DivRow>

          <DivRow>
            <Label htmlFor="elo"> Rank/Elo: </Label>
            <Input id="elo" placeholder= "Digite seu rank/elo no jogo" required></Input>
          </DivRow>
        </DivInputs>

        <DivInputs>
          <DivRow>
            <Label htmlFor="senha"> Senha: </Label>
            <Input type="password" placeHolder="Escolha sua nova senha" required></Input>
          </DivRow>

          <DivRow>
            <Label htmlFor="senha"> Confirmação de senha: </Label>
            <Input  id="senha" type="password" placeholder= "Confirme sua nova senha" required></Input>
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
