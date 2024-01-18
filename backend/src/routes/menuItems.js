const express = require("express");
const router = express.Router();
const menuItems = require("../data/menuItems.json");

const categoryOptions = ["Appetizer", "Entree", "Dessert", "Beverage"];
const DEFAULT = "https://i.imgur.com/EC8xb8y.png";

// Store the default menu items
const defaultMenuItems = [...menuItems];

// Initialize menuItems with defaultMenuItems
let currentMenuItems = [...defaultMenuItems];
// Store temporarily deleted items
let deletedItems = [];

router.get("/", (req, res) => {
  res.json(currentMenuItems);
});

router.get("/:id", (req, res) => {
  const menuItem = currentMenuItems.find(
    (item) => item.id === parseInt(req.params.id)
  );
  if (!menuItem) return res.status(404).send("Item not found.");
  res.json(menuItem);
});

router.post("/", (req, res) => {
  const { name, description, category } = req.body;
  if (!name || !description || !category) {
    return res
      .status(400)
      .json({ error: "Please provide all required fields" });
  }

  if (!categoryOptions.includes(category)) {
    return res.status(400).json({ error: "Invalid category" });
  }
  const newItem = {
    id: currentMenuItems.length + 1,
    name: req.body.name,
    category: req.body.category,
    description: req.body.description,
    img: DEFAULT,
  };
  currentMenuItems.push(newItem);
  res.json(newItem);
});

router.put("/:id", (req, res) => {
  const itemId = parseInt(req.params.id);
  const { name, description, category } = req.body;
  // Find the item to update and replace it with the updated item
  for (let i = 0; i < currentMenuItems.length; i++) {
    if (currentMenuItems[i].id === itemId) {
      const updatedItem = {
        id: itemId,
        name: name ? name : currentMenuItems[i].name,
        description: description
          ? description
          : currentMenuItems[i].description,
        category: category ? category : currentMenuItems[i].category,
        img: currentMenuItems[i].img,
      };
      currentMenuItems[i] = updatedItem;
      break;
    }
  }
  res.json(currentMenuItems);
});

router.delete("/:id", (req, res) => {
  const itemId = parseInt(req.params.id);
  const deletedItem = currentMenuItems.find((item) => item.id === itemId);
  if (!deletedItem) {
    return res.status(404).json({ error: "Item not found." });
  }

  // Store deleted item temporarily
  deletedItems.push(deletedItem);

  // Remove the item from currentMenuItems
  currentMenuItems = currentMenuItems.filter((item) => item.id !== itemId);

  res.json({ success: true, deletedItem });
});

// Route to manually reset menu items
router.post("/reset", (req, res) => {
  // Reset menu items to default
  currentMenuItems = [...defaultMenuItems];
  // Clear deleted items
  deletedItems = [];
  res.json(currentMenuItems);
});

module.exports = router;
