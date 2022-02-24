import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormLabel from "@mui/material/FormLabel";

function DropdownMenu({ errorText, labelText, required, items, ...rest }) {
  return (
    <FormControl fullWidth required={required}>
      <FormLabel sx={{ mb: 1 }} children={labelText} />
      <Select {...rest}>
        {items && items.length > 0 ? (
          items?.map((item) => (
            <MenuItem
              //   item objects must have value and text keys
              key={item.value}
              value={item?.value}
              children={item?.child}
            />
          ))
        ) : (
          <MenuItem value={null} children={`No ${labelText} in the List`} />
        )}
      </Select>
      <FormHelperText>{errorText}</FormHelperText>
    </FormControl>
  );
}

export default DropdownMenu;
