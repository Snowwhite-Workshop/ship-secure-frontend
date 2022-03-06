import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./utils/theme";
import "./index";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <h1>Ship Secure</h1>
        <h3 style={{ color: "red" }}>
          Don't Push App.js in your PR's (for now)
        </h3>
      </div>
    </ThemeProvider>
  );
}

export default App;
