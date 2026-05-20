import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Newsletter() {
  return (
    <section className="px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-[1600px] gap-10 border-y border-ink/15 py-16 md:grid-cols-[1fr_0.85fr] md:items-center">
        <h2 className="font-display text-5xl leading-none md:text-8xl">Receive private releases and atelier notes.</h2>
        <form className="grid gap-5">
          <Input placeholder="Email address" type="email" />
          <Button type="button" className="w-fit">Join The List</Button>
        </form>
      </div>
    </section>
  );
}
