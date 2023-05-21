import PropTypes from "prop-types";
import { Button } from "./Styles";

function BotaoGenerico({name, width, height, backgroundColor, color, hoverBackgroundColor}) {
    return (
        <Button type="submit" width={width} height={height} backgroundColor={backgroundColor} color={color} hoverBackgroundColor={hoverBackgroundColor}>
            {name}
        </Button>
    )
  }

  Button.defaultProps = {
    name: "Submit",
    width: "250px",
    height: "40px",
    backgroundColor: "#FFA000",
    color: "black",
    hoverBackgroundColor: "#E08E00",
  };
  
  Button.propTypes = {
    name: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
    hoverBackgroundColor: PropTypes.string,
  };

  export default BotaoGenerico;