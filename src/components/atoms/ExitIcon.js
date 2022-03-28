import React from "react";
import CloseIcon from "@mui/icons-material/Close";

const ExitIconStyle = {
  display: "flex",
  justifyContent: "end",
  padding: "10px",
};

export default function ExitIcon(props) {
  return (
    <div style={ExitIconStyle}>
      <CloseIcon />
    </div>
  );
}
