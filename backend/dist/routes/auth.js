import { Router } from "express";
import bcrypt from "bcryptjs";
import { z } from "zod";
import { User } from "../models/User.js";
import { signToken } from "../middleware/auth.js";
export const authRouter = Router();
authRouter.post("/signup", async (req, res) => {
    const input = z.object({ name: z.string(), email: z.string().email(), password: z.string().min(8) }).parse(req.body);
    const passwordHash = await bcrypt.hash(input.password, 12);
    const user = await User.create({ name: input.name, email: input.email, passwordHash });
    const token = signToken({ id: user.id, role: user.role });
    res.status(201).json({ data: { token, user: { id: user.id, name: user.name, email: user.email, role: user.role } } });
});
authRouter.post("/login", async (req, res) => {
    const input = z.object({ email: z.string().email(), password: z.string() }).parse(req.body);
    const user = await User.findOne({ email: input.email });
    if (!user?.passwordHash || !(await bcrypt.compare(input.password, user.passwordHash))) {
        return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = signToken({ id: user.id, role: user.role });
    res.json({ data: { token, user: { id: user.id, name: user.name, email: user.email, role: user.role } } });
});
authRouter.post("/otp/request", async (_req, res) => {
    res.json({ message: "OTP generation and Nodemailer delivery hook ready" });
});
authRouter.post("/google", async (_req, res) => {
    res.json({ message: "Google OAuth exchange endpoint ready" });
});
