import React from "react";
import Typography from "@mui/material/Typography";

export default function RegularText(props) {
  const {
    color = "#000000",
    size = "14px",
    text,
    weight = "normal",
    padding,
    margin,
    textAlign,
  } = props;
  return (
    <Typography
      color={color}
      fontSize={size}
      fontWeight={weight}
      padding={padding}
      margin={margin}
      textAlign={textAlign}
    >
      {text}
    </Typography>
  );
}
