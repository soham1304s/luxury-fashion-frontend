"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";
import type { Product } from "@/types/commerce";
import { formatPrice } from "@/lib/utils";
import { useCommerceStore } from "@/store/useCommerceStore";

export function ProductCard({ product, priority = false }: { product: Product; priority?: boolean }) {
  const addToCart = useCommerceStore((state) => state.addToCart);
  const toggleWishlist = useCommerceStore((state) => state.toggleWishlist);
  const wishlist = useCommerceStore((state) => state.wishlist);

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <Link href={`/product/${product.slug}`} className="block overflow-hidden bg-stone">
        <div className="relative aspect-[3/4]">
          <Image
            src={product.images[0]}
            alt={product.title}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 33vw, 90vw"
            className="object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-0"
          />
          <Image
            src={product.images[1]}
            alt={`${product.title} alternate view`}
            fill
            sizes="(min-width: 1024px) 33vw, 90vw"
            className="object-cover opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
          />
        </div>
      </Link>
      <div className="flex items-start justify-between gap-4 border-b border-ink/15 py-4">
        <div>
          <Link href={`/product/${product.slug}`} className="text-sm uppercase tracking-[0.08em]">
            {product.title}
          </Link>
          <p className="mt-1 text-sm text-ink/55">{formatPrice(product.price)}</p>
          <div className="mt-3 flex gap-2">
            {product.colors.map((color) => (
              <span key={color} className="h-4 w-4 rounded-full border border-ink/15" style={{ background: color }} />
            ))}
          </div>
        </div>
        <div className="flex gap-3">
          <button aria-label="Add to wishlist" onClick={() => toggleWishlist(product.id)}>
            <Heart size={18} fill={wishlist.includes(product.id) ? "black" : "none"} />
          </button>
          <button aria-label="Add to cart" onClick={() => addToCart(product)}>
            <ShoppingBag size={18} />
          </button>
        </div>
      </div>
    </motion.article>
  );
}
