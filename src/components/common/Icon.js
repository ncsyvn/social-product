import { ReactSVG } from "react-svg";
import { css } from "glamor";

const Icon = ({
  name,
  color = null,
  width = null,
  height = null,
  style = {},
}) => {
  const stylesIcon = css({
    " path": {
      fill: color,
    },
    " polyline": {
      fill: color,
    },
    " polygon": {
      fill: color,
    },
    " svg": {
      height: height,
      width: width,
    },
  });
  return <ReactSVG src={`/icons/${name}`} {...stylesIcon} style={style} />;
};
export default Icon;
