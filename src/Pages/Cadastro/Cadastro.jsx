import { Container, Titulo, Form, Label, Input, DivInputs, DivRow, DivEmail, DivButton } from "./Styles.js";
import { BotaoGenerico } from "../../components";

function Editar_perfil() {

  return (

    <Container>

      <Titulo>
        Preencha os seus dados para se cadastrar!
      </Titulo>

      <Form>
        {/* as DivRows abaixo futuramente se tornarão components */}

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
        <BotaoGenerico name= "Fazer cadastro" backgroundColor= "#FFA000"/>
      </DivButton> 

    </Container>
  ) 
}

export default Editar_perfil;