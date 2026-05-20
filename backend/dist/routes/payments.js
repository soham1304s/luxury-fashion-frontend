import { Router } from "express";
import Razorpay from "razorpay";
import Stripe from "stripe";
import { env } from "../config/env.js";
export const paymentRouter = Router();
paymentRouter.post("/stripe/create-intent", async (req, res) => {
    if (!env.stripeSecretKey)
        return res.status(503).json({ message: "Stripe key missing" });
    const stripe = new Stripe(env.stripeSecretKey);
    const intent = await stripe.paymentIntents.create({
        amount: Number(req.body.amount),
        currency: req.body.currency || "inr",
        metadata: { orderId: req.body.orderId }
    });
    res.json({ data: { clientSecret: intent.client_secret } });
});
paymentRouter.post("/razorpay/order", async (req, res) => {
    if (!env.razorpayKeyId || !env.razorpayKeySecret)
        return res.status(503).json({ message: "Razorpay keys missing" });
    const razorpay = new Razorpay({ key_id: env.razorpayKeyId, key_secret: env.razorpayKeySecret });
    const order = await razorpay.orders.create({ amount: Number(req.body.amount), currency: req.body.currency || "INR", receipt: req.body.orderId });
    res.json({ data: order });
});
paymentRouter.post("/paypal/order", async (_req, res) => {
    res.json({ message: "PayPal order creation hook ready for REST SDK or Checkout v2 API" });
});
