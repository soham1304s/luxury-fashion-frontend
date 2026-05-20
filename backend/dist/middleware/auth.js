import jwt from "jsonwebtoken";
import { env } from "../config/env.js";
export function signToken(payload) {
    return jwt.sign(payload, env.jwtSecret, { expiresIn: "7d" });
}
export function requireAuth(req, res, next) {
    const token = req.headers.authorization?.replace("Bearer ", "");
    if (!token)
        return res.status(401).json({ message: "Authentication required" });
    try {
        req.user = jwt.verify(token, env.jwtSecret);
        next();
    }
    catch {
        return res.status(401).json({ message: "Invalid token" });
    }
}
export function requireAdmin(req, res, next) {
    if (req.user?.role !== "admin")
        return res.status(403).json({ message: "Admin access required" });
    next();
}
