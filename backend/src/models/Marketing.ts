import { Schema, model } from "mongoose";

const couponSchema = new Schema(
  {
    code: { type: String, required: true, unique: true, uppercase: true },
    type: { type: String, enum: ["percentage", "fixed"], required: true },
    value: { type: Number, required: true },
    startsAt: Date,
    expiresAt: Date,
    usageLimit: Number,
    used: { type: Number, default: 0 },
    isActive: { type: Boolean, default: true }
  },
  { timestamps: true }
);

const giftCardSchema = new Schema(
  {
    code: { type: String, required: true, unique: true, uppercase: true },
    balance: { type: Number, required: true },
    initialValue: { type: Number, required: true },
    assignedEmail: String,
    isActive: { type: Boolean, default: true }
  },
  { timestamps: true }
);

export const Coupon = model("Coupon", couponSchema);
export const GiftCard = model("GiftCard", giftCardSchema);
