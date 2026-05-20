"use client";

import { useMemo, useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import { ProductGrid } from "@/components/commerce/ProductGrid";
import { categories, products } from "@/lib/data";
import { Input } from "@/components/ui/input";

export default function CollectionPage() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("new");
  const filtered = useMemo(() => {
    return products
      .filter((product) => category === "All" || product.category === category)
      .filter((product) => product.title.toLowerCase().includes(query.toLowerCase()) || product.material.toLowerCase().includes(query.toLowerCase()))
      .sort((a, b) => (sort === "price-asc" ? a.price - b.price : sort === "price-desc" ? b.price - a.price : a.title.localeCompare(b.title)));
  }, [category, query, sort]);

  return (
    <div className="px-4 pb-24 pt-32 md:px-8">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-12 grid gap-8 md:grid-cols-[1fr_0.8fr] md:items-end">
          <div>
            <p className="mb-3 text-xs uppercase tracking-luxury text-ink/55">Shop</p>
            <h1 className="font-display text-7xl leading-none md:text-[12vw]">Collection</h1>
          </div>
          <div className="grid gap-5">
            <Input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Smart search" />
            <div className="flex flex-wrap items-center gap-3">
              <SlidersHorizontal size={16} />
              {categories.map((item) => (
                <button key={item} onClick={() => setCategory(item)} className={`border px-4 py-2 text-xs uppercase tracking-luxury ${category === item ? "border-ink bg-ink text-white" : "border-ink/20"}`}>
                  {item}
                </button>
              ))}
              <select value={sort} onChange={(event) => setSort(event.target.value)} className="h-10 border border-ink/20 bg-transparent px-3 text-xs uppercase tracking-luxury">
                <option value="new">Newest</option>
                <option value="price-asc">Price low</option>
                <option value="price-desc">Price high</option>
              </select>
            </div>
          </div>
        </div>
        <ProductGrid items={filtered} />
      </div>
    </div>
  );
}
