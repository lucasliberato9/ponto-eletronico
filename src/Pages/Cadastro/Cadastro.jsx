import { Container, Titulo, Form, Label, Input, DivInputs, DivRow, DivEmail, DivButton } from "./Styles.js";
import { BotaoGenerico } from "../../components";
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import api from "../../services/api.js";


function Cadastro() {
  const [nome, setNome] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [jogo, setJogo] = useState("");
  const [elo, setElo] = useState("");
  const [senha, setSenha] = useState("");
  const [carregando, setCarregando] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setCarregando(true);
      const res = await api.post("/usuarios", {nome, nickname, email, jogo, elo, senha});
      console.log("Dados enviados!", res.data);
      navigate("/login");
    } catch (erro) {
      console.log("Erro ao enviar os dados:", erro);
    } finally{
      setCarregando(false);
    }
  };

  if (carregando) 
    return (
      <Container>
        <h1> Salvando dados... </h1>
      </Container>
  );

  return (

    <Container>

      <Titulo>
        Preencha os seus dados para se cadastrar!
      </Titulo>

      <Form onSubmit={handleSubmit}>

        <DivInputs>
          <DivRow>
            <Label htmlFor="nome"> Nome: </Label>
            <Input id="nome" placeholder= "Digite seu nome" required onChange={(e) => setNome(e.target.value) } ></Input>
          </DivRow>

          <DivRow>
            <Label htmlFor="nickname"> Nickname: </Label>
            <Input id="nickname" placeholder= "Digite seu nickname" required onChange={(e) => setNickname(e.target.value)}></Input>
          </DivRow>
        </DivInputs>

        <DivEmail>
          <Label htmlFor="email"> Email: </Label>
          <Input id="email" type="email" placeholder="seuemail@email.com" required onChange={(e)=> setEmail(e.target.value)}></Input>
        </DivEmail>

        <DivInputs>
        <DivRow>
            <Label htmlFor="jogo"> Jogo: </Label>
            <Input
              id="jogo"
              list="jogos"
              placeholder="Digite seu jogo"
              required
              onChange={(e) => setJogo(e.target.value)}
            ></Input>
            <datalist id="jogos">
              <option value="FIFA 23" />
              <option value="Fortnite" />
              <option value="League of Legends" />
              <option value="RainbowSix: Siege" />
              <option value="Valorant" />
            </datalist>
          </DivRow>

          <DivRow>
            <Label htmlFor="elo"> Rank/Elo: </Label>
            <Input id="elo" placeholder= "Digite seu rank/elo no jogo" required onChange={(e) => setElo(e.target.value)}></Input>
            
          </DivRow>
        </DivInputs>

        <DivInputs>
          <DivRow>
            <Label htmlFor="senha"> Senha: </Label>
            <Input id="senha" type="password" placeHolder="Escolha uma senha" required onChange={(e) => setSenha(e.target.value)}></Input>
          </DivRow>
        </DivInputs>

        <DivButton/>
        
        <BotaoGenerico name= "Enviar" />
      </Form>

    </Container>
  ) 

}

export default Cadastro;