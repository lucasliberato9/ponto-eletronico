import { Container, Titulo, Form, Label, Input, DivButton } from "./Styles";
import { BotaoGenerico } from "../../components";

function Login() {

  return (
  
    <Container>
      <Titulo>
        Faça aqui o seu login!
      </Titulo>
      <Form>
        {/* as divs abaixo futuramente se tornarão components */}
        <div>
          <Label> Email: </Label>
          <Input placeholder= "exemplo@email.com"></Input>
        </div>
        <div>
          <Label> Senha: </Label>
          <Input></Input>
        </div>
      </Form>
      <DivButton>
        <BotaoGenerico name= "Fazer Login" />
        <BotaoGenerico name= "Quero me cadastrar" color= "#BC0E03"/>
      </DivButton>    
    </Container>
  
  )
  
}
  
export default Login;