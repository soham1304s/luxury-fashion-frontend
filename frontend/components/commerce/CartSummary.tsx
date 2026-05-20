"use client";

import Image from "next/image";
import { Minus, Plus, X } from "lucide-react";
import { useCommerceStore } from "@/store/useCommerceStore";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function CartSummary({ checkout = false }: { checkout?: boolean }) {
  const cart = useCommerceStore((state) => state.cart);
  const removeFromCart = useCommerceStore((state) => state.removeFromCart);
  const updateQuantity = useCommerceStore((state) => state.updateQuantity);
  const subtotal = useCommerceStore((state) => state.subtotal());
  const gst = Math.round(subtotal * 0.18);
  const shipping = subtotal > 50000 || subtotal === 0 ? 0 : 750;
  const total = subtotal + gst + shipping;

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_420px]">
      <div className="divide-y divide-ink/15">
        {cart.length === 0 && <p className="py-20 text-center text-ink/55">Your cart is waiting for its first piece.</p>}
        {cart.map((line) => (
          <div key={`${line.product.id}-${line.size}`} className="grid grid-cols-[96px_1fr] gap-5 py-6 md:grid-cols-[140px_1fr_auto]">
            <div className="relative aspect-[3/4] bg-stone">
              <Image src={line.product.images[0]} alt={line.product.title} fill className="object-cover" sizes="140px" />
            </div>
            <div>
              <h2 className="text-sm uppercase tracking-[0.1em]">{line.product.title}</h2>
              <p className="mt-2 text-sm text-ink/55">
                {line.size} / {line.color}
              </p>
              <div className="mt-5 inline-flex items-center border border-ink/15">
                <button className="p-3" onClick={() => updateQuantity(line.product.id, line.quantity - 1)} aria-label="Decrease quantity">
                  <Minus size={14} />
                </button>
                <span className="w-10 text-center text-sm">{line.quantity}</span>
                <button className="p-3" onClick={() => updateQuantity(line.product.id, line.quantity + 1)} aria-label="Increase quantity">
                  <Plus size={14} />
                </button>
              </div>
            </div>
            <div className="flex items-start justify-between gap-6 md:block md:text-right">
              <p>{formatPrice(line.product.price * line.quantity)}</p>
              <button className="mt-0 md:mt-5" onClick={() => removeFromCart(line.product.id)} aria-label="Remove item">
                <X size={17} />
              </button>
            </div>
          </div>
        ))}
      </div>
      <aside className="h-fit border border-ink/15 p-6">
        <h2 className="mb-8 font-display text-3xl">Order Summary</h2>
        <div className="grid gap-4 text-sm">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          <div className="flex justify-between">
            <span>GST</span>
            <span>{formatPrice(gst)}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>{shipping === 0 ? "Complimentary" : formatPrice(shipping)}</span>
          </div>
          <div className="mt-4 flex justify-between border-t border-ink/15 pt-5 text-base">
            <span>Total</span>
            <span>{formatPrice(total)}</span>
          </div>
        </div>
        {!checkout && (
          <Button className="mt-8 w-full" onClick={() => (window.location.href = "/checkout")}>
            Checkout
          </Button>
        )}
      </aside>
    </div>
  );
}
