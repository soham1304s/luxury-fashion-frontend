import { ProductGrid } from "@/components/commerce/ProductGrid";
import { products } from "@/lib/data";

export function FeaturedCollection() {
  return (
    <section className="px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <p className="mb-3 text-xs uppercase tracking-luxury text-ink/55">Featured Collection</p>
            <h2 className="font-display text-5xl md:text-8xl">Monolith</h2>
          </div>
          <p className="hidden max-w-sm text-sm leading-relaxed text-ink/60 md:block">
            A conversion-focused edit of signature shapes with quick cart, wishlist, color variants, and responsive image swaps.
          </p>
        </div>
        <ProductGrid items={products.slice(0, 6)} />
      </div>
    </section>
  );
}
