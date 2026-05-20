import { CreditCard, Landmark, WalletCards } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { CartSummary } from "@/components/commerce/CartSummary";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function CheckoutPage() {
  const paymentMethods: Array<[string, LucideIcon]> = [
    ["Stripe", CreditCard],
    ["Razorpay", WalletCards],
    ["PayPal", Landmark]
  ];

  return (
    <div className="px-4 pb-24 pt-32 md:px-8">
      <div className="mx-auto max-w-[1400px]">
        <p className="mb-3 text-xs uppercase tracking-luxury text-ink/55">Checkout</p>
        <h1 className="mb-12 font-display text-7xl leading-none md:text-9xl">Secure Checkout</h1>
        <div className="mb-10 grid gap-10 lg:grid-cols-[1fr_0.85fr]">
          <form className="grid gap-8">
            <section className="grid gap-5">
              <h2 className="font-display text-4xl">Address</h2>
              <Input placeholder="Full name" />
              <Input placeholder="Phone" />
              <Input placeholder="Address line" />
              <div className="grid gap-5 md:grid-cols-3">
                <Input placeholder="City" />
                <Input placeholder="State" />
                <Input placeholder="PIN code" />
              </div>
            </section>
            <section className="grid gap-4">
              <h2 className="font-display text-4xl">Payment</h2>
              <div className="grid gap-3 md:grid-cols-3">
                {paymentMethods.map(([label, Icon]) => (
                  <button key={String(label)} type="button" className="flex h-24 items-center justify-center gap-3 border border-ink/15 text-xs uppercase tracking-luxury hover:border-ink">
                    <Icon size={18} /> {String(label)}
                  </button>
                ))}
              </div>
            </section>
            <Button type="button" className="w-fit">Place Order</Button>
          </form>
          <CartSummary checkout />
        </div>
      </div>
    </div>
  );
}
