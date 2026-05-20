import { ProductGrid } from "@/components/commerce/ProductGrid";
import { products } from "@/lib/data";

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const label = slug === "new" ? "New Collection" : slug.replaceAll("-", " ");
  const items = slug === "new" ? products.slice(0, 4) : products.filter((product) => product.category.toLowerCase() === label.toLowerCase());

  return (
    <div className="px-4 pb-24 pt-32 md:px-8">
      <div className="mx-auto max-w-[1600px]">
        <p className="mb-3 text-xs uppercase tracking-luxury text-ink/55">Category</p>
        <h1 className="mb-12 font-display text-7xl capitalize leading-none md:text-[12vw]">{label}</h1>
        <ProductGrid items={items.length ? items : products} />
      </div>
    </div>
  );
}
