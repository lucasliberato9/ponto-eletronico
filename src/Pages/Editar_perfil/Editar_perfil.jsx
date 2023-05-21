import { Container, Titulo, Form, Label, Input, DivInputs, DivRow, DivEmail, DivButton } from "./Styles.js";
import { BotaoGenerico } from "../../components";

function Editar_perfil() {

  return (

    <Container>

      <Titulo>
        Altere seus dados aqui!
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
            <Label> Nova senha: </Label>
            <Input placeholder= "Escolha uma nova senha"></Input>
          </DivRow>

          <DivRow>
            <Label> Confirmação da nova senha: </Label>
            <Input placeholder= "Confirme sua nova senha"></Input>
          </DivRow>
        </DivInputs>

      </Form>

      <DivButton>
        <BotaoGenerico name= "Confirmar" />
        <BotaoGenerico name= "Cancelar Alterações" backgroundColor= "#BC0E03" color="#d9d9d9" hoverBackgroundColor="#990D03"/>
      </DivButton> 

    </Container>
  ) 
}

export default Editar_perfil;