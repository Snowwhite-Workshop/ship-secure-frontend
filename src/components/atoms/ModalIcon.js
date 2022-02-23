import { Box } from "@mui/material";

function ModalIcon({icon}) {
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