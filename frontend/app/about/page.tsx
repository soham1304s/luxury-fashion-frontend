import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="pt-20">
      <section className="relative min-h-[85vh] px-4 py-24 md:px-8">
        <Image src="https://images.unsplash.com/photo-1506629905607-d405d7d3b0d2?auto=format&fit=crop&w=2200&q=85" alt="XYZ Fashion atelier" fill className="object-cover grayscale" sizes="100vw" />
        <div className="absolute inset-0 bg-black/35" />
        <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-[1600px] items-end text-white">
          <h1 className="max-w-5xl font-display text-6xl leading-none md:text-[10vw]">Luxury stripped to discipline.</h1>
        </div>
      </section>
      <section className="px-4 py-20 md:px-8">
        <div className="mx-auto grid max-w-[1400px] gap-10 md:grid-cols-[0.7fr_1fr]">
          <p className="text-xs uppercase tracking-luxury text-ink/55">Maison</p>
          <div className="space-y-8 text-2xl leading-relaxed md:text-4xl">
            <p>We build modern uniforms with architectural restraint, premium natural fabrics, and a refusal to over-explain.</p>
            <p className="text-ink/55">Each drop is limited, traceable, and designed to stay relevant beyond seasonal speed.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
