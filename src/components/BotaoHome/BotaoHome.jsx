import PropTypes from "prop-types";
import { Button } from "./Styles";

function BotaoHome({
  onClick,
  name,
  width,
  height,
  widthResponsive715,
  heightResponsive715,
  fontSize,
  backgroundColor,
  color,
  hoverBackgroundColor,
}) {
  return (
    <Button
      onClick={onClick}
      type="submit"
      width={width}
      height={height}
      widthResponsive715={widthResponsive715}
      heightResponsive715={heightResponsive715}
      fontSize={fontSize}
      backgroundColor={backgroundColor}
      color={color}
      hoverBackgroundColor={hoverBackgroundColor}
    >
      {name}
    </Button>
  );
}

Button.defaultProps = {
  onClick: () => {},
  name: "UFMG FÊNIX Esports",
  width: "400px",
  height: "60px",
  widthResponsive715: "250px",
  heightResponsive715: "40px",
  fontSize: "20px",
  backgroundColor: "#D60000",
  color: "#d9d9d9",
  hoverBackgroundColor: "#D60000",
};

Button.propTypes = {
  onClick: PropTypes.func,
  name: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  widthResponsive715: PropTypes.string,
  heightResponsive715: PropTypes.string,
  fontSize: PropTypes.string,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  hoverBackgroundColor: PropTypes.string,
};

export default BotaoHome;