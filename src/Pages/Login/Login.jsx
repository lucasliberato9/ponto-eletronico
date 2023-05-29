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
          <Label htmlFor="email"> Email: </Label>
          <Input id="email" type="email" placeholder= "exemplo@email.com" required></Input>
        </Campo>
        <Campo>
          <Label htmlFor="senha"> Senha: </Label>
          <Input id="senha" type= "password" placeholder="Digite sua senha" required></Input>
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