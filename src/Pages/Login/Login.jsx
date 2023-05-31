import { Container, Titulo, Form, Campo, Label, Input, DivButton } from "./Styles";
import { BotaoGenerico } from "../../components";
import { useState } from "react";
import api from "../../services/api";
import useAuthStore from "../../stores/auth";
import {useNavigate} from "react-router-dom";

export default function Login() {

const [email, setEmail] = useState("");
const [senha, setSenha] = useState("");
const [carregando, setCarregando] = useState(false);
const navigate = useNavigate();
const setToken = useAuthStore((state) => state.setToken);
const token = useAuthStore((state) => state.token);
const usuario = useAuthStore((state) => state.usuario);
console.log({ token, usuario});

const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    setCarregando(true);
    const res = await api.post("/login", {email, senha} );
    const {token} = res.data;

    setToken(token);
    navigate("/");

  } catch (erro) {
    console.error(erro);
    alert(erro.message);
  } finally {
    setCarregando(false);
  }
};

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
        <Campo>
          <Label htmlFor="email"> Email: </Label>
          <Input id="email" type="email" placeholder= "seuemail@email.com" required onChange={(e)=> setEmail(e.target.value)}></Input>
        </Campo>
        <Campo>
          <Label htmlFor="senha"> Senha: </Label>
          <Input id="senha" type= "password" placeholder="Digite sua senha" required onChange={(e) => setSenha(e.target.value)}></Input>
        </Campo>
        <BotaoGenerico name= "Fazer Login" />
      </Form>
      <DivButton>
        <BotaoGenerico name= "Quero me cadastrar" backgroundColor= "#BC0E03" color="#d9d9d9" hoverBackgroundColor="#990D03"/>
      </DivButton>
    </Container>
  
  )
  
}