import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./utils/theme";
import "./index";
import Error400 from "./pages/Error400";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Error400 />
      </div>
    </ThemeProvider>
  );
}

export default App;
