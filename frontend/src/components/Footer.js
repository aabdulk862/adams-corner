import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#0C3C78",
        color: "#ffffff",
        padding: "1.5rem",
        textAlign: "center",
        bottom: 0,
        width: "100%",
        position: "fixed",
      }}
    >
      <Typography
        variant="body2"
        sx={{ }}
      >
        © {new Date().getFullYear()} Adam Abdulkadir. GitHub: {""}
        <a
          href="https://github.com/aabdulk862"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#61dafb", textDecoration: "none" }}
        >
          aabdulk862
        </a>
      </Typography>
    </Box>
  );
};

export default Footer;
