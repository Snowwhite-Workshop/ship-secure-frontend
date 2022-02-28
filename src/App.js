<<<<<<< HEAD
import React from "react";
import HamburgerMenuIcon from "./components/atoms/HamburgerMenuIcon";
import NotificationBell from "./components/atoms/NotificationBell";

function App() {
  return (
    <div className="App">
      <h1>Ship Secure</h1>
      <HamburgerMenuIcon />
      <NotificationBell />
    </div>
=======
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./utils/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <h1>Ship Secure</h1>
      </div>
    </ThemeProvider>
>>>>>>> upload
  );
}

export default App;
