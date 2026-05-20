"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { editorials } from "@/lib/data";

export function Lookbook() {
  return (
    <section className="bg-stone">
      {editorials.map((item, index) => (
        <div key={item.title} className="sticky top-0 grid min-h-screen items-end overflow-hidden px-4 py-12 md:px-8">
          <Image src={item.image} alt={item.title} fill className="object-cover grayscale" sizes="100vw" />
          <div className="absolute inset-0 bg-black/25" />
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.35 }}
            className="relative z-10 mx-auto w-full max-w-[1600px] text-white"
          >
            <p className="mb-4 text-xs uppercase tracking-luxury text-white/70">Look {String(index + 1).padStart(2, "0")}</p>
            <h2 className="max-w-4xl font-display text-6xl leading-none md:text-9xl">{item.title}</h2>
          </motion.div>
        </div>
      ))}
    </section>
  );
}
