// server.js

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 5173;

app.use(cors());
app.use(bodyParser.json());

app.post("/signup", (req, res) => {
  // Handle signup logic here
  console.log("Received signup request:", req.body);

  const userData = {
    username: req.body.username,
    email: req.body.email,
    favoriteBook: req.body.favoriteBook,
    favoriteGenre: req.body.favoriteGenre,
  };

  res.status(200).json(userData);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
