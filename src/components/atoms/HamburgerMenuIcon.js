import React from "react";
import SortSharpIcon from "@material-ui/icons/SortSharp";

const HamDivStyle = {
  justifyContent: "center",
  width: "1.5rem",
  height: "1.5rem",
  padding: "1rem",
  backgroundColor: "#ffffff",
  borderRadius: "11px",
  backgroundColor: "white",
  marginLeft: "1rem",
};

export default function HamburgerMenuIcon() {
  return (
    <div style={HamDivStyle}>
      {" "}
      <SortSharpIcon fontSize="larger" style={{ color: "#850DCE" }} />
    </div>
  );
}
