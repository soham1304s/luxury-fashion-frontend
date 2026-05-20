import { Schema, model } from "mongoose";
const reviewSchema = new Schema({
    product: { type: Schema.Types.ObjectId, ref: "Product", required: true, index: true },
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    rating: { type: Number, min: 1, max: 5, required: true },
    title: String,
    body: String,
    images: [String],
    isVerifiedPurchase: { type: Boolean, default: false },
    isPublished: { type: Boolean, default: true }
}, { timestamps: true });
export const Review = model("Review", reviewSchema);
