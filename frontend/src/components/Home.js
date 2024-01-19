import React from "react";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import Lobby from "../img/lobby.jpg";
import "../index.css";
import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container maxWidth="xl" sx={{paddingBottom: "7rem"}}>
      <Typography
        variant="h1"
        sx={{
          fontWeight: 700,
          textDecoration: "none",
          textAlign: "center",
          color: "#F30A49",
          fontSize: { xs: "1.5rem", md: "1.5rem", lg: "2rem" },
          padding: "1rem",
        }}
      >
        Welcome to Adam's Corner!
      </Typography>
      <Box>
        {" "}
        <img src={Lobby} alt="Lobby" id="lobbyImage" />
      </Box>
      <Typography
        variant="h2"
        sx={{
          fontWeight: 700,
          textDecoration: "none",
          textAlign: "center",
          color: "#F30A49",
          fontSize: { xs: "1rem", md: "1rem", lg: "1.5rem" },
          paddingTop: "1rem",
          paddingBottom: "1rem",
        }}
      >
        We offer a classic American cuisine at our diner, where every dish is
        made with love and care.
      </Typography>
      <Typography
        variant="h2"
        sx={{
          fontWeight: 700,
          textDecoration: "none",
          textAlign: "center",
          color: "#F30A49",
          fontSize: { xs: "1rem", md: "1rem", lg: "1.5rem" },
          paddingBottom: "1rem",
        }}
      >
        Come and experience the mouth-watering flavors that will leave you
        craving for more...
      </Typography>
      <Box style={{ paddingBottom: "2rem" }}>
        <Button
          variant="contained"
          size="large"
          component={Link}
          to="/menu"
          sx={{
            marginLeft: "50%",
            transform: "translateX(-50%)",
            fontSize: "1.2rem",
            bgcolor: "#F30A49",
            "&:hover": {
              bgcolor: "#FA99B3",
            },
          }}
        >
          View Menu
        </Button>
      </Box>
    </Container>
  );
};

export default Home;
