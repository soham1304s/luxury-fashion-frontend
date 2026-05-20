const frames = [
  "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1502720705749-3c2bb2bd1d9b?auto=format&fit=crop&w=800&q=80"
];

export function SocialWall() {
  return (
    <section className="px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="mb-3 text-xs uppercase tracking-luxury text-ink/55">Social Wall</p>
            <h2 className="font-display text-5xl md:text-8xl">Campaign / UGC</h2>
          </div>
          <span className="hidden text-xs uppercase tracking-luxury md:block">@maisonvanta</span>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {frames.map((src, index) => (
            <div key={src} className={`aspect-[3/4] bg-stone bg-cover bg-center grayscale transition hover:grayscale-0 ${index % 2 ? "mt-10" : ""}`} style={{ backgroundImage: `url(${src})` }} />
          ))}
        </div>
      </div>
    </section>
  );
}
