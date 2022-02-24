import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./utils/theme";
import DropdownMenu from "./components/atoms/DropdownMenu";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <h1>Ship Secure</h1>
        <DropdownMenu labelText="Age" items={[{ value: 2, child: "One" }]} />
      </div>
    </ThemeProvider>
  );
}

export default App;
