import { createTheme } from "@mui/material/styles";
import { COLORS } from "./Colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: COLORS.PRIMARY,
    },
    secondary: {
      main: COLORS.SECONDARY,
      light: COLORS.SECONDARY_LIGHT,
    },
    info: {
      main: COLORS.INFORMATION,
    },
    error: {
      main: COLORS.ERROR,
    },
    success: {
      main: COLORS.SUCCESS,
    },
    warning: {
      main: COLORS.WARNING,
    },
  },
});
