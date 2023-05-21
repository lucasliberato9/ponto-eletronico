import { Container, Titulo, Form, Label, Input, DivButton } from "./Styles";
import { BotaoGenerico } from "../../components";

function Cadastro() {

  return (
    <Container>
      <Titulo>
        Preencha os seus dados para se cadastrar!
      </Titulo>
      <Form>
        {/* as divs abaixo futuramente se tornarão components */}
        <div>
          <Label> Nome: </Label>
          <Input placeholder= "Seu nome aqui"></Input>
        </div>
        <div>
          <Label> Nickname: </Label>
          <Input placeholder= "Seu nickname aqui"></Input>
        </div>
        <div>
          <Label> Email: </Label>
          <Input placeholder= "exemplo@email.com"></Input>
        </div>
        <div>
          <Label> Jogo: </Label>
          <Input placeholder= "Seu jogo aqui"></Input>
        </div>
        <div>
          <Label> Elo: </Label>
          <Input placeholder= "Seu elo no jogo aqui"></Input>
        </div>
        <div>
          <Label> Senha: </Label>
          <Input placeholder= "Escolha uma senha"></Input>
        </div>
        <div>
          <Label> Confirmação de senha: </Label>
          <Input placeholder= "Confirme sua senha"></Input>
        </div>
      </Form>
      <DivButton>
        <BotaoGenerico name= "Enviar" color= "#FFA000"/>
      </DivButton>    
    </Container>
  )
}
  
export default Cadastro;