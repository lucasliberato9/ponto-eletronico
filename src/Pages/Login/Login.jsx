import { Container, Titulo, Form, Campo, Label, Input, DivButton } from "./Styles";
import { BotaoGenerico } from "../../components";

function Login() {

  return (
  
    <Container>
      <Titulo>
        Faça aqui o seu login!
      </Titulo>
      <Form>
        {/* as divs abaixo futuramente se tornarão components */}
        <Campo>
          <Label> Email: </Label>
          <Input placeholder= "exemplo@email.com"></Input>
        </Campo>
        <Campo>
          <Label> Senha: </Label>
          <Input></Input>
        </Campo>
      </Form>
      <DivButton>
        <BotaoGenerico name= "Fazer Login" />
        <BotaoGenerico name= "Quero me cadastrar" backgroundColor= "#BC0E03" color="#d9d9d9" hoverBackgroundColor="#990D03"/>
      </DivButton>    
    </Container>
  
  )
  
}
  
export default Login;