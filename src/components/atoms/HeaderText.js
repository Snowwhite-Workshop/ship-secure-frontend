import React from "react";
import Typography from "@mui/material/Typography";

export default function HeaderText(props) {
  const {
    color = "#850DCE",
    size="40px",
    text,
    weight = "700",
    align = "center",
    padding = "",
    paddingTop="",
  } = props;
  return (
    <Typography
      color={color}
      fontSize={size}
      fontWeight={weight}
      textAlign={align}
      fontFamily={"Lato"}
      padding={padding}
    >
      {text}
    </Typography>
  );
}
