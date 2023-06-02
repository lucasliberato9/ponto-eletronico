import PropTypes from "prop-types";
import { Button } from "./Styles";

function BotaoGenerico({
  name,
  width,
  height,
  widthResponsive715,
  heightResponsive715,
  fontSize,
  backgroundColor,
  color,
  hoverBackgroundColor,
  onClick,
}) {
  return (
    <Button
      onClick="submit"
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
  name: "Submit",
  width: "250px",
  height: "40px",
  widthResponsive715: "250px",
  heightResponsive715: "40px",
  fontSize: "14px",
  backgroundColor: "#FFA000",
  color: "black",
  hoverBackgroundColor: "#E08E00",
};

Button.propTypes = {
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

export default BotaoGenerico;