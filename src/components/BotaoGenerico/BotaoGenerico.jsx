import PropTypes from "prop-types";
import { Button } from "./Styles";

function BotaoGenerico({name, color}) {
    return (
        <Button type="submit" color={color}>
            {name}
        </Button>
    )
  }

  Button.defaultProps = {
    name: "Submit",
    color: "yellow",
  };
  
  Button.propTypes = {
    name: PropTypes.string,
    color: PropTypes.string,
  };

  export default BotaoGenerico;