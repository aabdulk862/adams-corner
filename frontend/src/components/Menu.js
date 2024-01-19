import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import MediaCard from "./MediaCard";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Menu = () => {
  // const [menuItems, setMenuItems] = useState([]);

  // useEffect(() => {
  //   fetch(`${process.env.REACT_APP_API_URL}/menuItems`)
  //     .then((response) => response.json())
  //     .then((data) => setMenuItems(data))
  //     .catch((error) => console.log(error));
  // }, [menuItems]);

  const [menuItems, setMenuItems] = useState([]);

  const fetchMenuItems = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/menuItems`
      );
      const data = await response.json();
      setMenuItems(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMenuItems(); // Fetch menu items on component mount
  }, []); // Empty dependency array ensures the effect runs only once

  const handleDelete = (itemId) => {
    fetch(`${process.env.REACT_APP_API_URL}/menuItems/${itemId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        const updatedMenuItems = menuItems.filter((item) => item.id !== itemId);
        setMenuItems(updatedMenuItems);
        fetchMenuItems();
      })
      .catch((error) => console.log(error));
  };

  const handleUpdate = (itemId, updatedItem) => {
    fetch(`${process.env.REACT_APP_API_URL}/menuItems/${itemId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedItem),
    })
      .then((response) => response.json())
      .then((data) => {
        // update state with updated menu item
        const updatedMenuItems = menuItems.map((item) =>
          item.id === data.id ? data : item
        );
        setMenuItems(updatedMenuItems);
        fetchMenuItems();
      })
      .catch((error) => console.log(error));
  };

  const handleReset = () => {
    // Trigger the reset by making a POST request to /reset
    fetch(`${process.env.REACT_APP_API_URL}/menuItems/reset`, {
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => {
        // Update state with reset menu items
        setMenuItems(data);
      })
      .catch((error) => console.log(error));
  };

  const appetizers = menuItems.filter((item) => item.category === "Appetizer");
  const entrees = menuItems.filter((item) => item.category === "Entree");
  const desserts = menuItems.filter((item) => item.category === "Dessert");
  const beverages = menuItems.filter((item) => item.category === "Beverage");

  return (
    <Container maxWidth="xl" sx={{ paddingBottom: "7rem" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2rem",
          paddingBottom: "3rem",
        }}
      >
        <Box
          sx={{
            paddingTop: "1rem",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Button
            variant="contained"
            size="large"
            sx={{
              fontSize: "1rem",
              bgcolor: "#4CAF50",
              "&:hover": {
                bgcolor: "#45a049",
              },
              margin: ".5rem",
              width: "70%",
            }}
            component={Link}
            to="/add"
          >
            Add Menu Item
          </Button>
          <Button
            variant="contained"
            size="large"
            sx={{
              fontSize: "1rem",
              bgcolor: "#F30A49",
              "&:hover": {
                bgcolor: "#FA99B3",
              },
              margin: ".5rem",
              width: "70%",
            }}
            onClick={handleReset}
          >
            Reset Menu Items
          </Button>
        </Box>
        <Typography
          variant="h1"
          sx={{
            fontWeight: 700,
            textDecoration: "underline",
            color: "#F30A49",
            fontSize: { xs: "2em", md: "2rem", lg: "2rem" },
            padding: "1rem",
            textAlign: "center",
          }}
        >
          Appetizers
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          {appetizers.map((item) => (
            <MediaCard
              id={item.id}
              key={item.id}
              name={item.name}
              img={item.img}
              description={item.description}
              onDelete={handleDelete}
              onUpdate={(updatedItem) => handleUpdate(item.id, updatedItem)}
            />
          ))}
        </Box>
        <Typography
          variant="h1"
          sx={{
            fontWeight: 700,
            textDecoration: "underline",
            color: "#F30A49",
            fontSize: { xs: "2em", md: "2rem", lg: "2rem" },
            padding: "1rem",
            textAlign: "center",
          }}
        >
          Entrees
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          {entrees.map((item) => (
            <MediaCard
              id={item.id}
              key={item.id}
              name={item.name}
              img={item.img}
              description={item.description}
              onDelete={handleDelete}
              onUpdate={(updatedItem) => handleUpdate(item.id, updatedItem)}
            />
          ))}
        </Box>
        <Typography
          variant="h1"
          sx={{
            fontWeight: 700,
            textDecoration: "underline",
            color: "#F30A49",
            fontSize: { xs: "2em", md: "2rem", lg: "2rem" },
            padding: "1rem",
            textAlign: "center",
          }}
        >
          Desserts
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          {desserts.map((item) => (
            <MediaCard
              id={item.id}
              key={item.id}
              name={item.name}
              img={item.img}
              description={item.description}
              onDelete={handleDelete}
              onUpdate={(updatedItem) => handleUpdate(item.id, updatedItem)}
            />
          ))}
        </Box>
        <Typography
          variant="h1"
          sx={{
            fontWeight: 700,
            textDecoration: "underline",
            color: "#F30A49",
            fontSize: { xs: "2em", md: "2rem", lg: "2rem" },
            padding: "1rem",
            textAlign: "center",
          }}
        >
          Beverages
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          {beverages.map((item) => (
            <MediaCard
              id={item.id}
              key={item.id}
              name={item.name}
              img={item.img}
              description={item.description}
              onDelete={handleDelete}
              onUpdate={(updatedItem) => handleUpdate(item.id, updatedItem)}
            />
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default Menu;
