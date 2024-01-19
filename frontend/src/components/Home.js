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
      sx={{ textAlign: "center", paddingBottom: "8rem" }}
    >
      <Typography
        variant="h1"
        sx={{
          fontWeight: 700,
          color: "#F30A49",
          fontSize: { xs: "1.2rem", md: "1.8rem", lg: "2rem" },
          padding: "2rem",
        }}
      >
        Welcome to Adam's Corner!
      </Typography>
      <div className="img-div">
        <img src={Lobby} alt="Lobby" id="lobbyImage" />
      </div>
      <Typography
        variant="h2"
        sx={{
          fontWeight: 700,
          color: "#F30A49",
          fontSize: { xs: "1rem", md: "1.2rem", lg: "1.6rem" },
          padding: "1.5rem",
        }}
      >
        Explore the delightful flavors of classic American cuisine at our diner,
        where every dish is crafted with love and care.
      </Typography>
      <Typography
        variant="h2"
        sx={{
          fontWeight: 700,
          textDecoration: "none",
          textAlign: "center",
          color: "#F30A49",
          fontSize: { xs: "1rem", md: "1.2rem", lg: "1.6rem" },
          padding: "1.5rem",
        }}
      >
        Come and experience the mouth-watering flavors that will leave you
        craving for more...
      </Typography>

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
          margin: "1rem",
        }}
      >
        View Menu
      </Button>
      <Button
        variant="contained"
        size="large"
        component={Link}
        to="/contact"
        sx={{
          fontSize: "1rem",
          bgcolor: "#F30A49",
          "&:hover": {
            bgcolor: "#FA99B3",
          },
          margin: "1rem",
        }}
      >
        Contact Us
      </Button>
    </Container>
  );
};

export default Home;
