"use client";

import { motion } from "framer-motion";
import { ProductCard } from "@/components/commerce/ProductCard";
import { products } from "@/lib/data";

export function NewArrivals() {
  return (
    <section className="overflow-hidden px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[1600px]">
        <p className="mb-3 text-xs uppercase tracking-luxury text-ink/55">New Arrivals</p>
        <h2 className="mb-12 font-display text-5xl md:text-8xl">Recently Released</h2>
      </div>
      <motion.div className="flex cursor-grab gap-4 overflow-x-auto pb-6" whileTap={{ cursor: "grabbing" }}>
        {products.concat(products.slice(0, 2)).map((product, index) => (
          <div key={`${product.id}-${index}`} className="min-w-[78vw] sm:min-w-[42vw] lg:min-w-[28vw]">
            <ProductCard product={product} />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
