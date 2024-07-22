const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post("/signup", (req, res) => {
  const { username, password, email, favoriteBook, favoriteGenre } = req.body;

  // Password validation
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!passwordRegex.test(password)) {
    return res.status(400).json({
      message:
        "Password must be at least 8 characters long and include a number, special character, and uppercase letter.",
    });
  }
  if (username.length < 4) {
    return res
      .status(400)
      .json({ message: "Username must be at least 4 characters long" });
  }

  const userData = { username, email, favoriteBook, favoriteGenre };
  res.status(200).json(userData);
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
