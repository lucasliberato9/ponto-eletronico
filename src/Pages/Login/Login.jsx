import { Container, Titulo, Form, Campo, Label, Input, DivButton } from "./Styles";
import { BotaoGenerico } from "../../components";
import { useState } from "react";

function Login() {

const [emailLogin, setEmailLogin] = useState("");
const [senhaLogin, setSenhaLogin] = useState("");

const handleSubmit = async (e) => {
  e.preventDefault();
  console.log({emailLogin, senhaLogin});
}
  return (
  
    <Container>
      <Titulo>
        Faça aqui o seu login!
      </Titulo>
      <Form onSubmit={handleSubmit}>
        {/* as divs abaixo futuramente se tornarão components */}
        <Campo>
          <Label htmlFor="emailLogin"> Email: </Label>
          <Input id="emailLogin" type="email" placeholder= "seuemail@email.com" required onChange={(e)=> setEmailLogin(e.target.value)}></Input>
        </Campo>
        <Campo>
          <Label htmlFor="senhaLogin"> Senha: </Label>
          <Input id="senhaLogin" type= "password" placeholder="Digite sua senha" required onChange={(e) => setSenhaLogin(e.target.value)}></Input>
        </Campo>
        
      </Form>
      <DivButton type ="submit">
        <BotaoGenerico name= "Fazer Login" />
        <BotaoGenerico name= "Quero me cadastrar" backgroundColor= "#BC0E03" color="#d9d9d9" hoverBackgroundColor="#990D03"/>
      </DivButton>
    </Container>
  
  )
  
}
  
export default Login;