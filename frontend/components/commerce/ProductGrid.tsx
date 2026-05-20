import { ProductCard } from "@/components/commerce/ProductCard";
import type { Product } from "@/types/commerce";

export function ProductGrid({ items }: { items: Product[] }) {
  return (
    <div className="grid gap-x-4 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((product, index) => (
        <ProductCard key={product.id} product={product} priority={index < 2} />
      ))}
    </div>
  );
}
