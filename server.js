const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Dotenv configuaration
dotenv.config();

// app created
const app = express();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => console.error(err));
