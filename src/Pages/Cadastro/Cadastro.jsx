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
            <Input placeholder= "Digite seu nome"></Input>
          </DivRow>

          <DivRow>
            <Label> Nickname: </Label>
            <Input placeholder= "Digite seu nickname"></Input>
          </DivRow>
        </DivInputs>

        <DivEmail>
          <Label> Email: </Label>
          <Input placeholder= "exemplo@email.com"></Input>
        </DivEmail>

        <DivInputs>
          <DivRow>
            <Label> Jogo: </Label>
            <Input placeholder= "Digite seu jogo"></Input>
          </DivRow>

          <DivRow>
            <Label> Rank/Elo: </Label>
            <Input placeholder= "Digite seu rank/elo no jogo"></Input>
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
<<<<<<< HEAD
        <BotaoGenerico name= "Enviar" />
=======
        <BotaoGenerico name= "Fazer cadastro" backgroundColor= "#FFA000"/>
>>>>>>> ccfb22d (fix de botões nas páginas + pequenos ajustes nas páginas)
      </DivButton> 

    </Container>
  ) 

}

export default Cadastro;