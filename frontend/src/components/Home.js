import React from "react";
import Container from "@mui/material/Container";
import { Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import Lobby from "../img/lobby.jpg";
import "../index.css";

const Home = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{ textAlign: "center", paddingBottom: "7rem" }}
    >
      <Typography
        variant="h1"
        sx={{
          fontWeight: 700,
          color: "#F30A49",
          fontSize: { xs: "1.2rem", md: "1.8rem", lg: "2rem" },
          padding: "1rem",
        }}
      >
        Welcome to Adam's Corner!
      </Typography>

      <Typography
        variant="h2"
        sx={{
          fontWeight: 700,
          color: "#F30A49",
          fontSize: { xs: "1rem", md: "1.4rem", lg: "1.8rem" },
          paddingY: "1rem",
        }}
      >
        Explore the delightful flavors of classic American cuisine at our diner,
        where every dish is crafted with love and care.
      </Typography>
      <Typography
        variant="h2"
        sx={{
          fontWeight: 700,
          color: "#F30A49",
          fontSize: { xs: "1rem", md: "1.4rem", lg: "1.8rem" },
          paddingY: "1rem",
        }}
      >
        Come and experience mouth-watering dishes that will leave you craving
        for more...
      </Typography>
      <img src={Lobby} alt="Lobby" id="lobbyImage" />
      <Button
        variant="contained"
        size="large"
        component={Link}
        to="/menu"
        sx={{
          fontSize: "1rem",
          bgcolor: "#F30A49",
          "&:hover": {
            bgcolor: "#FA99B3",
          },
          marginTop: "2rem",
        }}
      >
        View Menu
      </Button>
    </Container>
  );
};

export default Home;
