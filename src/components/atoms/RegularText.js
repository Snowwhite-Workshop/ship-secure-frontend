import React from "react";
import Typography from "@mui/material/Typography";

export default function RegularText(props) {
  const { color, size, text, weight, align, margin } = props;
  return (
    <Typography
      color={color || "#000000"}
      fontSize={size || "14px"}
      fontWeight={weight || "normal"}
      textAlign={align || "left"}
      margin={margin}
    >
      {text}
    </Typography>
  );
}
