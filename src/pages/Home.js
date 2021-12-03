import { CardMedia, Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container
      sx={{
        display: "flex",
        height: "100vh",
        alignItems: "center",
      }}
    >
      <Container>
        <Container>
          <Typography variant="h2" sx={{ p: 3, textAlign: "center" }}>
            Titulo
          </Typography>
          <Typography sx={{ p: 2, textAlign: "center" }}>
            in purus at libero tempor iaculis. Vestibulum quis bibendum metus,
            vitae la magna aliquam eu. Donec a dictum erat. Nam eget accumsan
            orci.
          </Typography>
          <Button
            component={Link}
            to="/create"
            variant="contained"
            color="secondary"
            sx={{ marginLeft: "25%", marginTop: "5%", p: 2, width: "55%" }}
          >
            crear nota
          </Button>
          <Button
            component={Link}
            to="/notes"
            variant="contained"
            color="secondary"
            sx={{ marginLeft: "25%", marginTop: "5%", p: 2, width: "55%" }}
          >
            notas
          </Button>
        </Container>
      </Container>
      <Container>
        <CardMedia
          image="/img/character.svg"
          alt="image"
          sx={{
            p: 1,
            margin: "auto",
            height: 580,
            width: "79%",

            objectFit: "cover",
          }}
        />
      </Container>
    </Container>
  );
};

export default Home;
