import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./utils/theme";
import "./index";
import Error404 from "./pages/Error404";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Error404 />
      </div>
    </ThemeProvider>
  );
}

export default App;
