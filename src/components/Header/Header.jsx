import { Container, DivButton, Titulo } from "./Styles";
import { BotaoGenerico } from "../../components";
import useAuthStore from "../../stores/auth";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const usuario = useAuthStore((state) => state.usuario);
  const clearAuth = useAuthStore((state) => state.clearAuth);
  const navigate = useNavigate();

  const logout = () => {
    clearAuth();
    navigate("/");
  };

  const login = () => {
    navigate("/login");
  };

  const editarperfil = () => {
    navigate("/editar-perfil");
  };

  return (
    <Container>
      <Titulo>UFMG FÊNIX Esports</Titulo>

      {!!usuario && ( //Caso o usuário esteja logado
        <DivButton>
          <BotaoGenerico
            onClick={editarperfil}
            type="button"
            name="Editar Perfil"
            width="50%"
            widthResponsive715="50%"
          />
          <BotaoGenerico
            onClick={logout}
            type="button"
            name="Logout"
            width="35%"
            widthResponsive715="35%"
            backgroundColor="#BC0E03"
            color="#d9d9d9"
            hoverBackgroundColor="#990D03"
          />
        </DivButton>
      )}
      {!usuario && ( //Caso o usuário NÃO esteja logado
        <DivButton>
          <BotaoGenerico
            onClick={login}
            type="button"
            name="Fazer Login Cadastre-se"
            width="75%"
            widthResponsive715="75%"
          />
        </DivButton>
      )}
    </Container>
  );
}

export default Header;
