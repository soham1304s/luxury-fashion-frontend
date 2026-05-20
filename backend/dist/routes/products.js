import { Router } from "express";
import { z } from "zod";
import { requireAdmin, requireAuth } from "../middleware/auth.js";
import { Product } from "../models/Product.js";
const productInput = z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    category: z.string(),
    collection: z.string(),
    price: z.number(),
    images: z.array(z.string()).min(1),
    colors: z.array(z.string()).default([]),
    sizes: z.array(z.string()).default([]),
    material: z.string().optional(),
    inventory: z.number().default(0),
    tags: z.array(z.string()).default([])
});
export const productRouter = Router();
productRouter.get("/", async (req, res) => {
    const { category, collection, search, minPrice, maxPrice, sort = "-createdAt" } = req.query;
    const query = { isActive: true };
    if (category)
        query.category = category;
    if (collection)
        query.collection = collection;
    if (search)
        query.$text = { $search: String(search) };
    if (minPrice || maxPrice)
        query.price = { ...(minPrice ? { $gte: Number(minPrice) } : {}), ...(maxPrice ? { $lte: Number(maxPrice) } : {}) };
    const products = await Product.find(query).sort(String(sort)).limit(48);
    res.json({ data: products });
});
productRouter.get("/:slug", async (req, res) => {
    const product = await Product.findOne({ slug: req.params.slug, isActive: true });
    if (!product)
        return res.status(404).json({ message: "Product not found" });
    res.json({ data: product });
});
productRouter.post("/", requireAuth, requireAdmin, async (req, res) => {
    const input = productInput.parse(req.body);
    const product = await Product.create(input);
    res.status(201).json({ data: product });
});
productRouter.patch("/:id", requireAuth, requireAdmin, async (req, res) => {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ data: product });
});
