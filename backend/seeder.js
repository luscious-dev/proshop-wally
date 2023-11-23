import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import users from "./data/users.js";
import products from "./data/products.js";
import User from "./model/userModel.js";
import Product from "./model/productModel.js";
import Order from "./model/orderModel.js";
import connectDB from "./config/db.js";

connectDB();

const importData = async () => {
  try {
    await Order.deleteMany({});
    await Product.deleteMany({});
    await User.deleteMany({});

    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser._id };
    });
    await Product.insertMany(sampleProducts);
    console.log("Data Imported");

    process.exit();
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

const destroyData = async function () {
  try {
    await Order.deleteMany({});
    await Product.deleteMany({});
    await User.deleteMany({});
    console.log("Data Destroyed!");
    process.exit();
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
