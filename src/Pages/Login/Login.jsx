import { Container, Titulo, Form, Label, Input, DivButton, Button } from "./Styles";

function Login() {

  return (
  
    <Container>
      <Titulo>
        Faça aqui o seu login!
      </Titulo>
      <Form>
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
        <Button> Fazer login </Button>
        <Button> Quero me cadastrar </Button>
      </DivButton>    
    </Container>
  
  )
  
}
  
export default Login;