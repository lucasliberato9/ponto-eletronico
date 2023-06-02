import {
  Container,
  Titulo,
  Form,
  Label,
  Input,
  DivInputs,
  DivRow,
  DivEmail,
  DivButton,
} from "./Styles.js";
import { BotaoGenerico } from "../../components";
import { useState} from "react";
import api from "../../services/api.js";
import useAuthStore from "../../stores/auth.js";
import {useNavigate} from "react-router-dom";


function Editar_perfil() {
  const usuario = useAuthStore((state) => state.usuario)
  const [nome, setNome] = useState(usuario.nome);
  const [nickname, setNick] = useState(usuario.nickname);
  const [email, setEmailEdit] = useState(usuario.email);
  const [jogo, setJogo] = useState(usuario.jogo);
  const [elo, setElo] = useState(usuario.elo);
  const [senha, setSenhaEditarPerfil] = useState(usuario.senha);
  const [carregando, setCarregando] = useState(false);
  const setUsuario = useAuthStore((state) => state.setUsuario);
  
  const editarperfil = () => {
    navigate("/editar-perfil");
}
  const handleSubmit = async (e) => {
    e.preventDefault();
    //template string
//colocar o id real do usuário
//usar auth store
//atualizaar o back com requisição e o front com o setUsuario
//serve para colcoar variaveis que irao entrar para dentro das strings
    try {
      setCarregando(true);
      const res = await api.put(`/usuarios/${usuario._id}`, { nome, nickname, email, jogo, elo, senha });

      console.log("Dados do perfil atualizados!", res.data);
      setUsuario(res.data);
    } catch (erro) {
      console.log("Erro ao atualizar os dados do perfil:", erro);
    } finally {
      setCarregando(false);
    }
  };

  if (carregando) {
    return (
      <Container>
        <h1>Carregando dados do perfil...</h1>
      </Container>
    );
  }
  return (
    <Container>
      <Titulo>Altere seus dados aqui!</Titulo>

      <Form onSubmit={handleSubmit}>
        <DivInputs>
        <DivRow>
            <Label htmlFor="nome"> Nome: </Label>
            <Input id="nome" placeholder= "Digite seu nome" value={nome} onChange={(e)=> setNome(e.target.value)}></Input>
          </DivRow>

          <DivRow>
            <Label htmlFor="nickname"> Nickname: </Label>
            <Input id="nickname" placeholder= "Digite seu nickname" value={nickname} onChange={(e)=> setNick(e.target.value)}></Input>
          </DivRow>
        </DivInputs>

        <DivEmail>
          <Label htmlFor="email"> Email: </Label>
          <Input id="email" type="email" placeholder="seuemail@email.com" value={email} onChange={(e) => setEmailEdit(e.target.value)}></Input>
        </DivEmail>

        <DivInputs>
          <DivRow>
            <Label htmlFor="jogo"> Jogo: </Label>
            <Input id="jogo" placeholder= "Digite seu jogo" value={jogo} onChange={(e)=> setJogo(e.target.value)}></Input>
          </DivRow>

          <DivRow>
            <Label htmlFor="elo"> Rank/Elo: </Label>
            <Input id="elo" placeholder= "Digite seu rank/elo no jogo"  value={elo} onChange={(e)=> setElo(e.target.value)}></Input>
          </DivRow>
        </DivInputs>

        <DivInputs>
          <DivRow>
            <Label htmlFor="senha"> Senha: </Label>
            <Input id="senha" type="password" placeHolder="Escolha sua nova senha" value={senha} onChange={(e)=> setSenhaEditarPerfil(e.target.value)}></Input>
          </DivRow>
        
        </DivInputs>
        <DivButton>

          <div>
           <BotaoGenerico name="Confirmar" />
          </div>

          <div>
            <BotaoGenerico
              name="Cancelar Alterações"
              backgroundColor="#BC0E03"
              color="#d9d9d9"
              hoverBackgroundColor="#990D03"
              onClick={editarperfil}
            />
          </div>
      
        </DivButton>
      </Form>

  
    </Container>
  );
}

export default Editar_perfil;