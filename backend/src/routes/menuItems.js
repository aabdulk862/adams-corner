const express = require("express");
const router = express.Router();
const menuItems = require("../data/menuItems.json");

const categoryOptions = ["Appetizer", "Entree", "Dessert", "Beverage"];
const DEFAULT = "https://i.imgur.com/EC8xb8y.png";

router.get("/", (req, res) => {
  res.json(menuItems);
});

router.get("/:id", (req, res) => {
  const menuItem = menuItems.find(
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
    id: menuItems.length + 1,
    name: req.body.name,
    category: req.body.category,
    description: req.body.description,
    img: DEFAULT,
  };
  menuItems.push(newItem);
  res.json(newItem);
});

router.put("/:id", (req, res) => {
  const itemId = parseInt(req.params.id);
  const { name, description, category } = req.body;
  // Find the item to update and replace it with the updated item
  for (let i = 0; i < menuItems.length; i++) {
    if (menuItems[i].id === itemId) {
      const updatedItem = {
        id: itemId,
        name: name ? name : menuItems[i].name,
        description: description ? description : menuItems[i].description,
        category: category ? category : menuItems[i].category,
        img: menuItems[i].img,
      };
      menuItems[i] = updatedItem;
      break;
    }
  }
  res.json(menuItems);
});

router.delete("/:id", (req, res) => {
  const itemId = parseInt(req.params.id);
  // Find the index of the item to delete and remove it from the menuItems array
  const itemIndex = menuItems.findIndex((item) => item.id === itemId);
  if (itemIndex !== -1) {
    menuItems.splice(itemIndex, 1);
  }
  res.json(menuItems);
});

module.exports = router;
