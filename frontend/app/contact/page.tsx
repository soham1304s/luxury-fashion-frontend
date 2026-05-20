import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ContactPage() {
  return (
    <div className="px-4 pb-24 pt-32 md:px-8">
      <div className="mx-auto grid max-w-[1400px] gap-12 md:grid-cols-[0.8fr_1fr]">
        <div>
          <p className="mb-3 text-xs uppercase tracking-luxury text-ink/55">Contact</p>
          <h1 className="font-display text-7xl leading-none md:text-9xl">Studio Desk</h1>
          <p className="mt-8 max-w-md leading-relaxed text-ink/65">For private appointments, press, wholesale, and order support.</p>
        </div>
        <form className="grid gap-6">
          <Input placeholder="Name" />
          <Input placeholder="Email" type="email" />
          <Input placeholder="Subject" />
          <textarea className="min-h-44 border-0 border-b border-ink/25 bg-transparent py-3 outline-none focus:border-ink" placeholder="Message" />
          <Button type="button" className="w-fit">Send Message</Button>
        </form>
      </div>
    </div>
  );
}
