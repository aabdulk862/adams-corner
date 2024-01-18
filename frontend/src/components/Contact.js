import React, { useState } from "react";
import { Box, Container, TextField, Button, Typography } from "@mui/material";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission logic here
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ textAlign: "center" }}>
        <Typography
          variant="h1"
          sx={{
            fontWeight: 700,
            color: "#F30A49",
            fontSize: { xs: "2em", md: "2rem", lg: "2rem" },
            padding: "1rem",
            textAlign: "center",
          }}
        >
          Contact Us
        </Typography>
      </Box>
      <Box component="form" sx={{ mt: "2rem" }} onSubmit={handleSubmit}>
        <TextField
          required
          fullWidth
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          required
          fullWidth
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          required
          fullWidth
          multiline
          rows={5}
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          margin="normal"
        />
        <Button
          type="submit"
          variant="contained"
          size="large"
          sx={{
            margin: "1rem",
            fontSize: "1rem",
            bgcolor: "#F30A49",
            "&:hover": {
              bgcolor: "#FA99B3",
            },
          }}
        >
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default Contact;
