import React from "react";
import Typography from "@mui/material/Typography";

export default function RegularText(props) {
  const { color = "#000000", size = "14px", text, weight = "normal" } = props;
  return (
    <Typography color={color} fontSize={size} fontWeight={weight}>
      {text}
    </Typography>
  );
}
