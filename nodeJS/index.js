const express = require("express");
const mongoose = require("mongoose");
const app = express();
const productRoute = require("./routes/product.routes.js");

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API Server");
});

mongoose
  .connect(
    "mongodb+srv://admin:4OVQsO7kXx3Vx7Vn@backend.knnqlnr.mongodb.net/NodeAPI?retryWrites=true&w=majority&appName=Backend"
  )
  .then(() => {
    console.log("Connected to database");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((error) => {
    console.log("Error :" + error);
  });
