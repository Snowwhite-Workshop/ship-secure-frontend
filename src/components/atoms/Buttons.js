import { Button } from "@mui/material";

function Btns({
    variant,
    startIcon,
    endIcon,
    disabled,
    text,
    color,
    width,
    maxWidth,
    margin,
    marginTop,
    padding, 

}) {
    return (
        < Button
            variant={variant}
            sx={{
                borderRadius: '20px',
                textTransform: 'none',
                fontWeight: 700,
                width: width,
                maxWidth: maxWidth,
                margin: margin,
                padding: padding,
                marginTop: marginTop
            }}
            startIcon={startIcon}
            endIcon={endIcon}
            color={color}
            disabled={disabled}
            disableElevation
        >
            <span>{text}</span>
        </Button>
    )
}

Btns.defaultProps = {
    variant: "contained",
    color: "primary",
    width: "100%",
    maxWidth: "100%",
}

export default Btns;
