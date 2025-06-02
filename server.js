const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const productRoutes = require("./routes/productRoutes");
// Dotenv configuaration
dotenv.config();

// app created
const app = express();
app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

// Home Route -> Je keu access parte parbe jar jonno amra get bebohar kore tahki.
app.get("/", (req, res) => {
  res.send("Welcome to the Book Bay Server By Eshikhon.com");
});

app.use("/api/products", productRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => console.error(err));
