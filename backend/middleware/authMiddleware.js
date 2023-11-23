import jwt from "jsonwebtoken";
import asyncHandler from "./asyncHandler.js";
import User from "../model/userModel.js";

// Protect routes for users that are registered
export const protect = asyncHandler(async (req, res, next) => {
  let token;

  token = req.cookies.jwt;
  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.userId).select("-password");
    next();
  } catch (err) {
    console.log(err);
    res.status(401);
    throw new Error("Not authorized, token failed");
  }
});

// Protect routes for admins
export const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    return next();
  }

  res.status(403);
  throw new Error("Not authorized as admin");
};
