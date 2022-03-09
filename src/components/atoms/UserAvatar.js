import React from 'react';
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";

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
                backgroundColor: ' #C4C4C4;',
                objectFit: 'contain'
            }}
        >
            {imgUrl && <Avatar src={imgUrl} alt="User Avatar"
                sx={{
                    width: size,
                    maxWidth: size,
                    height: size
                }}
            />}

        </Box>
    );
}

UserAvatar.defaultProps = {
    size: '32px',
    margin: 0,
    imgUrl: ''
}


export default UserAvatar; 