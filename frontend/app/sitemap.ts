import type { MetadataRoute } from "next";
import { products } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://maisonvanta.com";
  const staticRoutes = ["", "/collection", "/about", "/journal", "/contact", "/cart", "/checkout", "/dashboard"];
  return [
    ...staticRoutes.map((route) => ({ url: `${base}${route}`, lastModified: new Date() })),
    ...products.map((product) => ({ url: `${base}/product/${product.slug}`, lastModified: new Date() }))
  ];
}
