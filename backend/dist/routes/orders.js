import { Router } from "express";
import { requireAuth } from "../middleware/auth.js";
import { Order } from "../models/Order.js";
export const orderRouter = Router();
orderRouter.use(requireAuth);
orderRouter.get("/", async (req, res) => {
    const orders = await Order.find({ user: req.user?.id }).sort("-createdAt");
    res.json({ data: orders });
});
orderRouter.post("/", async (req, res) => {
    const order = await Order.create({ ...req.body, user: req.user?.id, status: "pending" });
    res.status(201).json({ data: order });
});
orderRouter.get("/:id", async (req, res) => {
    const order = await Order.findOne({ _id: req.params.id, user: req.user?.id });
    if (!order)
        return res.status(404).json({ message: "Order not found" });
    res.json({ data: order });
});
