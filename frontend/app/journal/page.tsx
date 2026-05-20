import Image from "next/image";
import { editorials } from "@/lib/data";

export default function JournalPage() {
  return (
    <div className="px-4 pb-24 pt-32 md:px-8">
      <div className="mx-auto max-w-[1600px]">
        <p className="mb-3 text-xs uppercase tracking-luxury text-ink/55">Journal</p>
        <h1 className="mb-12 font-display text-7xl leading-none md:text-[12vw]">Editorial Notes</h1>
        <div className="grid gap-8 md:grid-cols-3">
          {editorials.map((post) => (
            <article key={post.title} className="group">
              <div className="relative aspect-[4/5] overflow-hidden bg-stone">
                <Image src={post.image} alt={post.title} fill className="object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0" sizes="33vw" />
              </div>
              <p className="mt-5 text-xs uppercase tracking-luxury text-ink/55">Campaign</p>
              <h2 className="mt-2 font-display text-4xl">{post.title}</h2>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
