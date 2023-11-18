import express from "express";
import dotenv from "dotenv";
dotenv.config();
import products from "./data/products.js";
const PORT = process.env.PORT || 8000;

const app = express();

app.get("/api/products", (req, res) => {
  res.status(200).json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((product) => req.params.id === product._id);
  if (!product) {
    res.status(404).json({
      status: "fail",
      message: "Product not found!",
    });
  }
  res.status(200).json(product);
});

app.listen(PORT, () => {
  console.log(`APP RUNNING ON PORT ${PORT}`);
});
