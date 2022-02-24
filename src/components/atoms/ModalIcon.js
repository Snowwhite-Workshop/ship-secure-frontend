import { Box } from "@mui/material";

function ModalIcon(props) {
    const {icon} = props

    return ( 
        <Box
        component="div"
        sx={{
           width: 1
        }}>
            {icon}
        </Box>
     );
}
 
export default ModalIcon;