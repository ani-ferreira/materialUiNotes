import { Container, Typography } from "@mui/material";

const Welcome = () => {
  return (
    <Container
      sx={{
        position: "absolute",
        width: "100vw",
        height: "100vh",
        zIndex: 5000,
        textAlign: "center",
      }}
    >
      <Typography variant="h2" sx={{ marginTop: "20%" }}>
        Welcome!
      </Typography>
      {/* <CardMedia
        component="img"
        image="/img/girl.png"
        alt="image"
        sx={{
          height: "10rem",
          marginTop: "20%",
          width: "10%",
          objectFit: "fill",
          margin: "auto",
        }}
      /> */}
    </Container>
  );
};

export default Welcome;
