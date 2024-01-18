import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

const UpdateMenuItemForm = ({ item, onUpdate, onCancel }) => {
  const [name, setName] = useState(item.name);
  const [description, setDescription] = useState(item.description);

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedItem = { ...item, name, description };
    onUpdate(updatedItem);
  };

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        width: "100%",
      }}
      onSubmit={handleSubmit}
    >
      <TextField
        id="name-input"
        label="Name"
        variant="outlined"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <TextField
        id="description-input"
        label="Description"
        variant="outlined"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button variant="outlined" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" variant="contained" sx={{ ml: "1rem" }}>
          Update
        </Button>
      </Box>
    </Box>
  );
};

export default UpdateMenuItemForm;
