"use client";

import Link from "next/link";
import { Menu, Search, ShoppingBag, User, X, Heart } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import { useCommerceStore } from "@/store/useCommerceStore";
import { Input } from "@/components/ui/input";

const nav = [
  ["Shop", "/collection"],
  ["New", "/category/new"],
  ["Journal", "/journal"],
  ["About", "/about"],
  ["Contact", "/contact"]
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(false);
  const { scrollY } = useScroll();
  const background = useTransform(scrollY, [0, 80], ["rgba(245,245,243,0)", "rgba(245,245,243,0.82)"]);
  const border = useTransform(scrollY, [0, 80], ["rgba(0,0,0,0)", "rgba(0,0,0,0.12)"]);
  const cartCount = useCommerceStore((state) => state.cart.reduce((total, line) => total + line.quantity, 0));
  const wishlistCount = useCommerceStore((state) => state.wishlist.length);

  return (
    <>
      <motion.header
        style={{ backgroundColor: background, borderColor: border }}
        className="fixed left-0 right-0 top-0 z-50 border-b px-4 py-4 backdrop-blur-xl md:px-8"
      >
        <div className="mx-auto flex max-w-[1600px] items-center justify-between">
          <button className="md:hidden" aria-label="Open navigation" onClick={() => setOpen(true)}>
            <Menu size={22} />
          </button>
          <Link href="/" className="text-xl font-semibold uppercase tracking-[0.26em] md:text-2xl">
            XYZ Fashion
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            {nav.map(([label, href]) => (
              <Link key={href} href={href} className="text-xs uppercase tracking-luxury text-ink/75 transition hover:text-ink">
                {label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <button aria-label="Search" onClick={() => setSearch(true)}>
              <Search size={19} />
            </button>
            <Link href="/dashboard" aria-label="Account" className="hidden sm:block">
              <User size={19} />
            </Link>
            <Link href="/dashboard" aria-label="Wishlist" className="relative hidden sm:block">
              <Heart size={19} />
              {wishlistCount > 0 && <span className="absolute -right-2 -top-2 text-[10px]">{wishlistCount}</span>}
            </Link>
            <Link href="/cart" aria-label="Cart" className="relative">
              <ShoppingBag size={19} />
              {cartCount > 0 && <span className="absolute -right-2 -top-2 text-[10px]">{cartCount}</span>}
            </Link>
          </div>
        </div>
      </motion.header>

      {open && (
        <motion.div initial={{ x: "-100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }} className="fixed inset-0 z-[70] bg-bone p-6 md:hidden">
          <div className="mb-16 flex items-center justify-between">
            <span className="text-lg uppercase tracking-luxury">Menu</span>
            <button aria-label="Close navigation" onClick={() => setOpen(false)}>
              <X />
            </button>
          </div>
          <div className="grid gap-6">
            {nav.map(([label, href]) => (
              <Link key={href} href={href} onClick={() => setOpen(false)} className="font-display text-5xl">
                {label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}

      {search && (
        <div className="fixed inset-0 z-[80] bg-bone/95 p-6 backdrop-blur-xl">
          <div className="mx-auto max-w-5xl pt-20">
            <button className="mb-10 flex items-center gap-2 text-xs uppercase tracking-luxury" onClick={() => setSearch(false)}>
              <X size={16} /> Close
            </button>
            <Input autoFocus placeholder="Search coats, tailoring, accessories" className="h-20 font-display text-4xl md:text-7xl" />
          </div>
        </div>
      )}
    </>
  );
}
