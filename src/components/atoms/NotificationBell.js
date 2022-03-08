import React from "react";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

const HamDivStyle = {
  justifyContent: "center",
  width: "1.5rem",
  height: "1.5rem",
  padding: "1rem",
  backgroundColor: "#ffffff",
  borderRadius: "11px",
  backgroundColor: "white",
  marginLeft: "1rem",
  marginTop: "1rem",
};

export default function NotificationBell() {
  return (
    <div style={HamDivStyle}>
      <NotificationsActiveIcon fontSize="larger" style={{ color: "#850DCE" }} />
    </div>
  );
}
