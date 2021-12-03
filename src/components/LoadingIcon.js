import EventNoteIcon from "@mui/icons-material/EventNote";
import { Container } from "@mui/material";

const LoadingIcon = () => {
  return (
    <Container className="loader-container">
      <EventNoteIcon
        color="secondary"
        sx={{ fontSize: "5rem", marginX: "50%", marginY: "20%" }}
        className="loader"
      />
    </Container>
  );
};

export default LoadingIcon;
