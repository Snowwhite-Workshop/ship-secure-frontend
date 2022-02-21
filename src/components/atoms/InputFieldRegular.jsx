import React from "react";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Box from "@mui/material/Box";

function InputFieldRegular({
  required,
  label,
  icon,
  validateMessage,
  ...rest
}) {
  return (
    <Box>
      <FormControl fullWidth variant="outlined">
        <FormLabel
          sx={{ mb: 1 }}
          required={required}
          id="demo-row-radio-buttons-group-label"
        >
          {label}
        </FormLabel>
        <OutlinedInput
          {...rest}
          endAdornment={
            <InputAdornment position="end">
              <IconButton edge="end">{icon ? icon : null}</IconButton>
            </InputAdornment>
          }
        />
        <FormHelperText children={validateMessage} error />
      </FormControl>
    </Box>
  );
}

export default InputFieldRegular;
