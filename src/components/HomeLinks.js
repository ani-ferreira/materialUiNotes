import React from "react";
import { Paper, Container, Button, Typography, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mui/material";

const HomeLinks = () => {
  const tabletActive = useMediaQuery(
    "(min-width: 800px) and (max-width: 1200px )"
  );
  const desktopActive = useMediaQuery("(min-width: 1200px)");

  return (
    <Paper
      sx={{
        display: "flex",
        justifyContent: "space-around",
        gridGap: "1%",
        height: "92vh",
        alignItems: "center",
      }}
    >
      <Container>
        <Container>
          <Typography
            variant="h2"
            sx={{ p: 3, textAlign: "center", marginBottom: "5%" }}
          >
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
            color="primary"
            sx={{ marginLeft: "25%", marginTop: "5%", p: 2, width: "55%" }}
          >
            crear nota
          </Button>
          <Button
            component={Link}
            to="/notes"
            variant="contained"
            color="primary"
            sx={{ marginLeft: "25%", marginTop: "5%", p: 2, width: "55%" }}
          >
            notas
          </Button>
          <Button
            component={Link}
            to="/notes"
            variant="contained"
            color="primary"
            sx={{
              marginLeft: "25%",
              marginTop: "5%",
              p: 2,
              width: "55%",
              height: 50,
            }}
          >
            otro
          </Button>
        </Container>
      </Container>

      {tabletActive && (
        <Container
          sx={{
            width: "45%",
            margin: 5,
            p: 2,
          }}
        >
          <CardMedia
            component="img"
            image="/img/girl.png"
            alt="image"
            sx={{
              height: "28rem",
              width: "100%",
              objectFit: "fill",
            }}
          />
        </Container>
      )}

      {desktopActive && (
        <Container
          sx={{
            width: "50%",
            margin: 9,
            p: 3,
          }}
        >
          <CardMedia
            component="img"
            image="/img/girl.png"
            alt="image"
            sx={{
              height: "37rem",
              width: "100%",
              objectFit: "fill",
            }}
          />
        </Container>
      )}
    </Paper>
  );
};

export default HomeLinks;
