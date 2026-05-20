import { BarChart3, Boxes, Percent, ShoppingBag, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const stats = [
  ["Revenue", "₹18.4L", "+18%"],
  ["Orders", "384", "+9%"],
  ["Conversion", "4.8%", "+1.2%"],
  ["Inventory", "912 units", "Healthy"]
];

const tools: Array<[string, LucideIcon]> = [
  ["Product Management", Boxes],
  ["Order Management", ShoppingBag],
  ["Customer Management", Users],
  ["Coupons & Gift Cards", Percent],
  ["Analytics", BarChart3]
];

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-ink px-4 pb-24 pt-32 text-white md:px-8">
      <div className="mx-auto max-w-[1600px]">
        <p className="mb-3 text-xs uppercase tracking-luxury text-white/50">Admin</p>
        <h1 className="mb-12 font-display text-7xl leading-none md:text-9xl">Control Room</h1>
        <div className="grid gap-4 md:grid-cols-4">
          {stats.map(([label, value, delta]) => (
            <section key={label} className="border border-white/15 p-6">
              <p className="text-xs uppercase tracking-luxury text-white/45">{label}</p>
              <p className="mt-8 text-3xl">{value}</p>
              <p className="mt-2 text-sm text-sand">{delta}</p>
            </section>
          ))}
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-5">
          {tools.map(([label, Icon]) => (
            <button key={String(label)} className="flex min-h-44 flex-col justify-between border border-white/15 p-6 text-left transition hover:bg-white hover:text-ink">
              <Icon />
              <span className="text-sm uppercase tracking-luxury">{String(label)}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
