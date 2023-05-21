import { Container, Titulo, Form, Label, Input, DivInputs, DivRow, DivEmail, DivButton } from "./Styles.js";
import { BotaoGenerico } from "../../components";

function Cadastro() {

  return (

    <Container>

      <Titulo>
        Preencha os seus dados para se cadastrar!
      </Titulo>

      <Form>

        <DivInputs>
          <DivRow>
            <Label> Nome: </Label>
            <Input placeholder= "Seu nome aqui"></Input>
          </DivRow>

          <DivRow>
            <Label> Nickname: </Label>
            <Input placeholder= "Seu nickname aqui"></Input>
          </DivRow>
        </DivInputs>

        <DivEmail>
          <Label> Email: </Label>
          <Input placeholder= "exemplo@email.com"></Input>
        </DivEmail>

        <DivInputs>
          <DivRow>
            <Label> Jogo: </Label>
            <Input placeholder= "Seu jogo aqui"></Input>
          </DivRow>

          <DivRow>
            <Label> Elo: </Label>
            <Input placeholder= "Seu elo no jogo aqui"></Input>
          </DivRow>
        </DivInputs>

        <DivInputs>
          <DivRow>
            <Label> Senha: </Label>
            <Input placeholder= "Escolha uma senha"></Input>
          </DivRow>

          <DivRow>
            <Label> Confirmação de senha: </Label>
            <Input placeholder= "Confirme sua senha"></Input>
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