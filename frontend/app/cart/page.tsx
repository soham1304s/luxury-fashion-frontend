import { CartSummary } from "@/components/commerce/CartSummary";

export default function CartPage() {
  return (
    <div className="px-4 pb-24 pt-32 md:px-8">
      <div className="mx-auto max-w-[1400px]">
        <p className="mb-3 text-xs uppercase tracking-luxury text-ink/55">Bag</p>
        <h1 className="mb-12 font-display text-7xl leading-none md:text-9xl">Shopping Cart</h1>
        <CartSummary />
      </div>
    </div>
  );
}
