import PropTypes from "prop-types";
import { Button } from "./Styles";

function BotaoGenerico({onClick, name, type, width, height, backgroundColor, color, hoverBackgroundColor}) {
    return (
        <Button onClick={onClick} type={type} width={width} height={height} backgroundColor={backgroundColor} color={color} hoverBackgroundColor={hoverBackgroundColor}>
            {name}
        </Button>
    )
  }

  Button.defaultProps = {
    onClick: () => {},
    name: "Submit",
    type: "submit",
    width: "250px",
    height: "40px",
    backgroundColor: "#FFA000",
    color: "black",
    hoverBackgroundColor: "#E08E00",
  };
  
  Button.propTypes = {
    onClick: PropTypes.func,
    name: PropTypes.string,
    type: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
    hoverBackgroundColor: PropTypes.string,
  };

  export default BotaoGenerico;