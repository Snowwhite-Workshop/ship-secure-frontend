import Box from "@mui/material/Box";

function Logo({dark, light, size}) {
     return (
         <Box
            sx={{
                width: size,
                background: 'grey'
            }} 
        >
            { dark && <img src="assets/Logo-dark.svg" alt="Logo"

            />}
            { light && <img src="assets/Logo-light.svg" alt="Logo"

                />}
         </Box>
     )
}

Logo.defaultProps = {
    size: '200px'
}

export default Logo;