import { ReactSVG } from "react-svg";
import { css } from "glamor";
import React, { useState } from "react";

const Icon = ({
  name,
  color = null,
  width = null,
  height = null,
  style = {},
  forceColor = null,
}) => {
  const [iconColor, setIconColor] = useState(color);
  const onMouseEnter = () => {
    setIconColor(forceColor);
  }
  const onMouseLeave = () => {
    setIconColor(color);
  }
  const stylesIcon = css({
    " path": {
      fill: iconColor,
    },
    " polyline": {
      fill: iconColor,
    },
    " polygon": {
      fill: iconColor,
    },
    " svg": {
      height: height,
      width: width,
    },
  });
  return <ReactSVG src={`/icons/${name}`} {...stylesIcon} style={style} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onMouseOut={onMouseLeave}/>;
};
export default Icon;
