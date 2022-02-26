import React from 'react';
import Box from "@mui/material/Box";

function UserAvatar({ 
    size,
    margin,
    imgUrl
}) {
    return (
        <Box
        sx={{
            width: size,
            height: size,
            margin: margin,
            borderRadius: '50%',
            background: `url('${imgUrl}')`,
            backgroundColor: ' #C4C4C4;'
        }}
                >
                    
        </Box>
    );
}

UserAvatar.defaultProps = {
    size: '32px',
    margin: 0,
    imgUrl: ''
}


export default UserAvatar;