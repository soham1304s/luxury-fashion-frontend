import { Schema, model } from "mongoose";
const productSchema = new Schema({
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, index: true },
    description: { type: String, required: true },
    category: { type: String, required: true, index: true },
    collection: { type: String, required: true, index: true },
    price: { type: Number, required: true },
    compareAtPrice: Number,
    images: [{ type: String, required: true }],
    colors: [String],
    sizes: [String],
    material: String,
    inventory: { type: Number, default: 0 },
    tags: [String],
    rating: { type: Number, default: 0 },
    isActive: { type: Boolean, default: true },
    seo: {
        title: String,
        description: String
    }
}, { timestamps: true });
export const Product = model("Product", productSchema);
