import { Schema, model } from "mongoose";
const addressSchema = new Schema({
    name: String,
    phone: String,
    line1: String,
    line2: String,
    city: String,
    state: String,
    postalCode: String,
    country: { type: String, default: "India" }
}, { _id: false });
const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true, index: true },
    passwordHash: String,
    googleId: String,
    role: { type: String, enum: ["customer", "admin"], default: "customer" },
    otpHash: String,
    otpExpiresAt: Date,
    wishlist: [{ type: Schema.Types.ObjectId, ref: "Product" }],
    addresses: [addressSchema],
    emailMarketing: { type: Boolean, default: true }
}, { timestamps: true });
export const User = model("User", userSchema);
