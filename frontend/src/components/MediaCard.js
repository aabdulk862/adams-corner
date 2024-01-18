import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, Menu, MenuItem } from "@mui/material";
import UpdateMenuItemForm from "./UpdateMenuItemForm";

const DEFAULT = "https://i.imgur.com/EC8xb8y.png";

export default function MediaCard({
  id,
  name,
  img,
  description,
  onDelete,
  onUpdate,
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleOpenForm = () => {
    setShowForm(true);
    handleCloseMenu();
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <CardMedia sx={{ height: 140 }} image={img || DEFAULT} title={name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => onDelete(id)}>Delete</Button>
        <Button onClick={handleOpenMenu}>Update</Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleCloseMenu}
        >
          <MenuItem onClick={handleOpenForm}>Update item</MenuItem>
        </Menu>
        {showForm && (
          <UpdateMenuItemForm
            item={{ id, name, description }}
            onUpdate={(updatedItem) => {
              onUpdate(updatedItem);
              handleCloseForm();
            }}
            onCancel={handleCloseForm}
          />
        )}
      </CardActions>
    </Card>
  );
}
