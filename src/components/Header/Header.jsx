//import PropTypes from "prop-types";
import { Container, DivButton, Titulo } from "./Styles";
import { BotaoGenerico } from "../../components";
import useAuthStore from "../../stores/auth";
import {Link, useNavigate} from "react-router-dom";

function Header() {
    const usuario = useAuthStore((state) => state.usuario);
    const clearAuth = useAuthStore((state) => state.clearAuth);
    // const navigate = useNavigate();


    const logout = () => {
        clearAuth();
    //     navigate("/");
    }

    return (
        <Container>
            
            <Link to ="/"></Link>
            <Link to ="cadastro"></Link>
            <Link to ="login"></Link>
            <Link to ="editar-perfil"></Link>

            <Titulo>
                UFMG FÊNIX
                Esports
            </Titulo>
            {!!usuario && ( //Caso o usuário esteja logado
                <DivButton>
                    <BotaoGenerico type= "button" name= "Editar Perfil" width= "50%"/>
                    <BotaoGenerico onClick={logout} type= "button" name= "Logout" width= "30%"backgroundColor= "#BC0E03" color="#d9d9d9" hoverBackgroundColor="#990D03"/>
                </DivButton>
            )}
            {!usuario && ( //Caso o usuário NÃO esteja logado
                <DivButton>
                    <BotaoGenerico type= "button" name= "Fazer Login Cadastre-se" width= "50%"/>
                </DivButton>
            )}
        </Container>
    )       
  }

  export default Header;