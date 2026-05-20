import { Router } from "express";
import { requireAdmin, requireAuth } from "../middleware/auth.js";
import { Order } from "../models/Order.js";
import { Product } from "../models/Product.js";
import { User } from "../models/User.js";
export const adminRouter = Router();
adminRouter.use(requireAuth, requireAdmin);
adminRouter.get("/analytics", async (_req, res) => {
    const [orders, products, customers] = await Promise.all([Order.countDocuments(), Product.countDocuments(), User.countDocuments({ role: "customer" })]);
    const revenue = await Order.aggregate([{ $match: { status: { $ne: "cancelled" } } }, { $group: { _id: null, total: { $sum: "$totals.total" } } }]);
    res.json({ data: { orders, products, customers, revenue: revenue[0]?.total || 0 } });
});
adminRouter.get("/orders", async (_req, res) => {
    const orders = await Order.find().populate("user", "name email").sort("-createdAt").limit(100);
    res.json({ data: orders });
});
