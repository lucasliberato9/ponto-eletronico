import { Container, Titulo, Form, Campo, Label, Input, DivButton } from "./Styles";
import { BotaoGenerico } from "../../components";
import { useState } from "react";
import api from "../../services/api";
import useAuthStore from "../../stores/auth";


function Login() {

const [emailLogin, setEmailLogin] = useState("");
const [senhaLogin, setSenhaLogin] = useState("");
const [carregando, setCarregando] = useState(false);
const token = useAuthStore((state) => state.token);
const usuario = useAuthStore((state) => state.usuario);
const setToken = useAuthStore((state) => state.setToken);

const handleSubmit = async (e) => {
  e.preventDefault();
  

  try {
    setCarregando(true);
    const resposta = await api.post("/login", {emailLogin, senhaLogin} );
    const {token} = res.data;

    setToken(token);
    
  } catch (erro) {
    console.error(erro);
    alert(erro.message);
  } finally{
    setCarregando(false);
  }
}

if (carregando) 
  return (
    <Container>
      <h1> Carregando... </h1>
    </Container>
);

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
        <BotaoGenerico name= "Fazer Login" />
      </Form>
      <DivButton type ="submit">
        <BotaoGenerico name= "Quero me cadastrar" backgroundColor= "#BC0E03" color="#d9d9d9" hoverBackgroundColor="#990D03"/>
      </DivButton>
    </Container>
  
  )
  
}
  
export default Login;