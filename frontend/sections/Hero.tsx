"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 160]);

  const backgroundImages = [
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=2200&q=90", // Elegant woman with light airy background
    "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=2200&q=90", // Beautiful girl in white with clean background
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=2200&q=90", // Fashion model with minimal light background
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-100">
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src={backgroundImages[0]}
          alt="Maison Vanta colorful fashion campaign"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-gray-50/20" />
      </motion.div>
      <div className="relative z-10 flex min-h-screen items-end px-4 pb-10 pt-32 md:px-8 md:pb-16">
        <div className="mx-auto grid w-full max-w-[1600px] gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <div>
            <motion.p initial={{ y: 24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="mb-6 text-xs uppercase tracking-luxury">
              Autumn / Winter 2026
            </motion.p>
            <motion.h1
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-white text-[17vw] leading-[0.78] md:text-[12vw]"
            >
              Quiet Form.
              <br />
              Total Presence.
            </motion.h1>
          </div>
          <motion.div initial={{ y: 36, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.35 }} className="max-w-md md:justify-self-end">
            <p className="mb-8 text-lg leading-relaxed text-white">
              Sculptural tailoring, disciplined knitwear, and limited-run objects for a wardrobe that speaks softly and lands with intent.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button onClick={() => (window.location.href = "/collection")}>Shop Now</Button>
              <Link href="/category/new" className="inline-flex h-12 items-center border border-ink px-6 text-xs uppercase tracking-luxury hover:bg-ink hover:text-white">
                New Collection
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
