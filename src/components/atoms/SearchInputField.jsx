import React from "react";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";

function SearchInputField({ handleSearch, ...rest }) {
  return (
    <Box>
      <FormControl fullWidth variant="outlined">
        <OutlinedInput
          {...rest}
          type="search"
          startAdornment={
            <InputAdornment position="end">
              <IconButton
                onClick={handleSearch}
                edge="start"
                type="submit"
                aria-label="search"
              >
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </Box>
  );
}

export default SearchInputField;
