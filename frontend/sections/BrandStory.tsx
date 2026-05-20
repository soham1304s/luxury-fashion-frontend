"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function BrandStory() {
  return (
    <section className="grid min-h-screen bg-ink text-white lg:grid-cols-2">
      <div className="relative min-h-[65vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1600&q=85"
          alt="Editorial tailoring campaign"
          fill
          className="object-cover grayscale"
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
      </div>
      <div className="flex items-center px-4 py-16 md:px-12">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="max-w-2xl">
          <p className="mb-8 text-xs uppercase tracking-luxury text-white/50">Brand Story</p>
          <h2 className="font-display text-5xl leading-none md:text-8xl">The wardrobe as architecture.</h2>
          <p className="mt-10 text-lg leading-relaxed text-white/70">
            Maison Vanta designs around absence: fewer gestures, sharper decisions, richer materials. Every silhouette is built for motion, proportion, and repetition.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
