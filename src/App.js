import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./utils/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <h1>Ship Secure</h1>
      </div>
    </ThemeProvider>
  );
}

export default App;
