import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";

function RadioButton({ label, ...rest }) {
  return (
    <FormControlLabel
      control={<Radio />}
      label={label || "Add label"}
      {...rest}
    />
  );
}

export default RadioButton;
