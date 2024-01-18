const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const menuItems = require("./routes/menuItems");
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set up routes
app.use("/menuItems", menuItems);
// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

module.exports = app;
