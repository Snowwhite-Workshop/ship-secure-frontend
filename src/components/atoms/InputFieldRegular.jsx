import React from "react";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import { Box, Typography } from "@mui/material";

function InputFieldRegular({ label, icon, ...rest }) {
  return (
    <Box>
      <Typography sx={{ mb: 0.5 }} children={label} />
      <FormControl fullWidth variant="outlined">
        <OutlinedInput
          {...rest}
          endAdornment={
            <InputAdornment position="end">
              <IconButton edge="end">{icon ? icon : null}</IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </Box>
  );
}

export default InputFieldRegular;
