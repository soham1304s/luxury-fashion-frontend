import Link from "next/link";
import { Instagram, Mail, MoveUpRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-ink px-4 py-16 text-white md:px-8 md:py-24">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.6fr]">
          <div>
            <p className="mb-8 max-w-xl text-sm uppercase tracking-luxury text-white/60">
              A disciplined wardrobe of sculptural essentials, made in limited editions.
            </p>
            <h2 className="font-display text-[18vw] leading-[0.82] md:text-[13vw]">VANTA</h2>
          </div>
          <div className="grid content-between gap-10">
            <form className="space-y-5">
              <label className="text-xs uppercase tracking-luxury text-white/60">Private list</label>
              <div className="flex gap-3">
                <Input placeholder="Email address" className="border-white/30 text-white placeholder:text-white/40 focus:border-white" />
                <Button type="button" variant="light" className="shrink-0">
                  Join
                </Button>
              </div>
            </form>
            <div className="grid grid-cols-2 gap-8 text-sm text-white/70">
              <div className="grid gap-3">
                <Link href="/collection">Shop</Link>
                <Link href="/about">Maison</Link>
                <Link href="/journal">Journal</Link>
                <Link href="/contact">Contact</Link>
              </div>
              <div className="grid gap-3">
                <Link href="/checkout">Shipping</Link>
                <Link href="/dashboard">Orders</Link>
                <Link href="/admin">Admin</Link>
                <a href="mailto:studio@maisonvanta.com" className="flex items-center gap-2">
                  <Mail size={14} /> Studio
                </a>
                <a href="https://instagram.com" className="flex items-center gap-2">
                  <Instagram size={14} /> Instagram <MoveUpRight size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
