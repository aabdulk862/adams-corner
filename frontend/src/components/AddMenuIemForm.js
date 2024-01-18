import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const AddMenuItemForm = () => {
  const navigate = useNavigate();
  const [menuItems, setMenuItems] = useState({
    name: "",
    description: "",
    category: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setMenuItems({ ...menuItems, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/menuItems`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(menuItems),
      });

      if (!response.ok) {
        throw new Error("Error adding menu item");
      }

      const data = await response.json();
      console.log(data);
      navigate("/menu");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          textAlign: "center",
          padding: "1rem",
        }}
      >
        <TextField
          id="name-input"
          name="name"
          label="Name"
          variant="outlined"
          onChange={handleInputChange}
        />
      </Box>
      <Box
        sx={{
          textAlign: "center",
          padding: "1rem",
        }}
      >
        <TextField
          id="description-input"
          name="description"
          label="Description"
          variant="outlined"
          onChange={handleInputChange}
        />
      </Box>
      <Box
        sx={{
          textAlign: "center",
          padding: "1rem",
        }}
      >
        <FormControl component="fieldset">
          <FormLabel component="legend">Category</FormLabel>
          <RadioGroup
            aria-label="category"
            name="category"
            onChange={handleInputChange}
            value={menuItems.category}
          >
            <FormControlLabel
              value="Appetizer"
              control={<Radio />}
              label="Appetizer"
            />
            <FormControlLabel
              value="Entree"
              control={<Radio />}
              label="Entree"
            />
            <FormControlLabel
              value="Dessert"
              control={<Radio />}
              label="Dessert"
            />
          </RadioGroup>
        </FormControl>
      </Box>
      <Box
        sx={{
          textAlign: "center",
          padding: "1rem",
        }}
      >
        <Button
          onClick={handleSubmit}
          variant="contained"
          sx={{
            margin: "1rem",
            fontSize: "1rem",
            bgcolor: "#F30A49",
            "&:hover": {
              bgcolor: "#FA99B3",
            },
          }}
        >
          Add Item
        </Button>
        <Button
          onClick={() => navigate(-1)}
          variant="contained"
          sx={{
            margin: "1rem",
            fontSize: "1rem",
            bgcolor: "#F30A49",
            "&:hover": {
              bgcolor: "#FA99B3",
            },
          }}
        >
          Cancel
        </Button>
      </Box>
    </>
  );
};

export default AddMenuItemForm;
