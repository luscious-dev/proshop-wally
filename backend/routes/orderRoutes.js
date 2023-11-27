import express from "express";
import {
  getMyOrders,
  getOrders,
  updateOrderToDeliverd,
  updateOrderToPaid,
  getOrderById,
  addOrderItems,
} from "../controllers/orderController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(protect, addOrderItems).get(protect, admin, getOrders);
router.route("/mine").get(protect, getMyOrders);
router.route("/:id").get(protect, getOrderById);
router.route("/:id/pay").put(protect, updateOrderToPaid);
router.route("/:id/deliver").put(protect, admin, updateOrderToDeliverd);

export default router;
