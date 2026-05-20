import compression from "compression";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import morgan from "morgan";
import { env } from "./config/env.js";
import { connectDb } from "./config/db.js";
import { adminRouter } from "./routes/admin.js";
import { authRouter } from "./routes/auth.js";
import { integrationRouter } from "./routes/integrations.js";
import { orderRouter } from "./routes/orders.js";
import { paymentRouter } from "./routes/payments.js";
import { productRouter } from "./routes/products.js";
const app = express();
app.set("trust proxy", 1);
app.use(helmet({ crossOriginResourcePolicy: { policy: "cross-origin" } }));
app.use(cors({ origin: env.clientUrl, credentials: true }));
app.use(compression());
app.use(cookieParser());
app.use(express.json({ limit: "1mb" }));
app.use(morgan(env.nodeEnv === "production" ? "combined" : "dev"));
app.use(rateLimit({ windowMs: 60_000, limit: 120, standardHeaders: true, legacyHeaders: false }));
app.get("/health", (_req, res) => res.json({ ok: true, service: "maison-vanta-api" }));
app.use("/api/auth", authRouter);
app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);
app.use("/api/payments", paymentRouter);
app.use("/api/admin", adminRouter);
app.use("/api/integrations", integrationRouter);
app.use((error, _req, res, _next) => {
    console.error(error);
    res.status(500).json({ message: "Unexpected server error" });
});
connectDb()
    .then(() => {
    app.listen(env.port, () => console.log(`API listening on :${env.port}`));
})
    .catch((error) => {
    console.error("Failed to start API", error);
    process.exit(1);
});
