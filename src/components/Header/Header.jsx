//import PropTypes from "prop-types";
import { Container, DivButton, Titulo } from "./Styles";
import { BotaoGenerico } from "../../components";
function Header() {
  return (
    <Container>
      <Titulo>UFMG FÊNIX Esports</Titulo>
      <DivButton>
        <BotaoGenerico
          name="Login / Cadastre-se"
          width="150px"
          widthResponsive715="150px"
        />
      </DivButton>
    </Container>
  );
}

export default Header;
