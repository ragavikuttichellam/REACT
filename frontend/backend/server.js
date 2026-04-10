const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// Serve images folder
app.use("/images", express.static("images"));

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.use("/api/products", require("./routes/product"));

app.listen(5000, () => console.log("Server running on port 5000"));
