import PropTypes from "prop-types";
import { Button } from "./Styles";

function BotaoGenerico({name, width, height, color}) {
    return (
        <Button type="submit" width={width} height={height} color={color}>
            {name}
        </Button>
    )
  }

  Button.defaultProps = {
    name: "Submit",
    color: "#FFA000",
    width: "367px",
    height: "40px",
  };
  
  Button.propTypes = {
    name: PropTypes.string,
    color: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
  };

  export default BotaoGenerico;