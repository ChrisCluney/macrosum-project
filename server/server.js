const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const path = require("path");

app.use(express.json()); // When we want to be able to accept JSON.

const axios = require("axios");
const ctrl = require("./controller");

const port = process.env.PORT || 5000;

app.post("/macros", ctrl.addItem);

app.use(express.static(path.join(__dirname, "../public")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../index.html"));
});

app.listen(port, () => console.log(`Server running on ${port}`));
