"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { Heart, Ruler, Truck } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ProductGrid } from "@/components/commerce/ProductGrid";
import { formatPrice } from "@/lib/utils";
import { products } from "@/lib/data";
import { useCommerceStore } from "@/store/useCommerceStore";

export default function ProductPage() {
  const params = useParams<{ slug: string }>();
  const product = products.find((item) => item.slug === params.slug);
  const [size, setSize] = useState(product?.sizes[0] || "");
  const [color, setColor] = useState(product?.color || "");
  const addToCart = useCommerceStore((state) => state.addToCart);
  const toggleWishlist = useCommerceStore((state) => state.toggleWishlist);
  const trackProduct = useCommerceStore((state) => state.trackProduct);

  useEffect(() => {
    if (product) trackProduct(product);
  }, [product, trackProduct]);

  if (!product) {
    return (
      <div className="px-4 pb-24 pt-32 md:px-8">
        <div className="mx-auto max-w-[1200px]">
          <h1 className="font-display text-7xl">Product not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="pb-24 pt-20">
      <section className="grid lg:grid-cols-[1.15fr_0.85fr]">
        <div className="grid gap-2 md:grid-cols-2">
          {product.images.concat(product.images).slice(0, 4).map((src, index) => (
            <div key={`${src}-${index}`} className="relative aspect-[3/4] overflow-hidden bg-stone">
              <Image src={src} alt={`${product.title} view ${index + 1}`} fill priority={index === 0} className="object-cover transition duration-700 hover:scale-105" sizes="(min-width: 1024px) 30vw, 100vw" />
            </div>
          ))}
        </div>
        <aside className="sticky top-20 h-fit px-4 py-10 md:px-10">
          <p className="mb-4 text-xs uppercase tracking-luxury text-ink/55">{product.collection}</p>
          <h1 className="font-display text-5xl leading-none md:text-7xl">{product.title}</h1>
          <p className="mt-5 text-xl">{formatPrice(product.price)}</p>
          <p className="mt-8 max-w-xl leading-relaxed text-ink/65">{product.description}</p>
          <div className="mt-8 space-y-6">
            <div>
              <p className="mb-3 text-xs uppercase tracking-luxury">Color</p>
              <div className="flex gap-3">
                {product.colors.map((swatch) => (
                  <button key={swatch} aria-label={`Select color ${swatch}`} onClick={() => setColor(swatch)} className={`h-9 w-9 rounded-full border ${color === swatch ? "border-ink" : "border-ink/15"}`} style={{ background: swatch }} />
                ))}
              </div>
            </div>
            <div>
              <p className="mb-3 text-xs uppercase tracking-luxury">Size</p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((item) => (
                  <button key={item} onClick={() => setSize(item)} className={`h-11 min-w-12 border px-4 text-sm ${size === item ? "border-ink bg-ink text-white" : "border-ink/20"}`}>
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-[1fr_auto]">
            <Button onClick={() => addToCart(product, size, color)}>Add To Cart</Button>
            <Button variant="ghost" onClick={() => toggleWishlist(product.id)} aria-label="Wishlist">
              <Heart size={18} />
            </Button>
          </div>
          <div className="mt-8 grid gap-4 border-y border-ink/15 py-6 text-sm text-ink/65">
            <p className="flex items-center gap-3"><Truck size={17} /> Delivery in 2-5 business days with Shiprocket tracking.</p>
            <p className="flex items-center gap-3"><Ruler size={17} /> Complimentary size exchange within 7 days.</p>
          </div>
        </aside>
      </section>
      <section className="px-4 pt-20 md:px-8">
        <div className="mx-auto max-w-[1600px]">
          <h2 className="mb-10 font-display text-5xl">Frequently Bought Together</h2>
          <ProductGrid items={products.filter((item) => item.id !== product.id).slice(0, 3)} />
        </div>
      </section>
    </div>
  );
}
