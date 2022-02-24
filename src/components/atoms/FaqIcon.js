import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import { Button } from "@mui/material";

function FaqIcon() {
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: "#850DCE",
        padding: "20px",
        borderRadius: "16px",
      }}
      disableElevation
    >
      <ChatBubbleIcon fontSize="large" color="white" />
    </Button>
  );
}

export default FaqIcon;
