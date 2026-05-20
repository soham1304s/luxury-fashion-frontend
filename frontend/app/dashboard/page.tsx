import { Heart, MapPin, Package, UserRound } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const panels: Array<[string, string, LucideIcon]> = [
  ["Orders", "Track recent purchases, returns, and AfterShip events.", Package],
  ["Wishlist", "Your saved edit for future drops.", Heart],
  ["Addresses", "Manage shipping and billing details.", MapPin],
  ["Profile", "Update account, OTP, and preferences.", UserRound]
];

export default function DashboardPage() {
  return (
    <div className="px-4 pb-24 pt-32 md:px-8">
      <div className="mx-auto max-w-[1400px]">
        <p className="mb-3 text-xs uppercase tracking-luxury text-ink/55">Account</p>
        <h1 className="mb-12 font-display text-7xl leading-none md:text-9xl">Dashboard</h1>
        <div className="grid gap-4 md:grid-cols-2">
          {panels.map(([title, body, Icon]) => (
            <section key={String(title)} className="border border-ink/15 p-8">
              <Icon className="mb-10" />
              <h2 className="font-display text-4xl">{String(title)}</h2>
              <p className="mt-4 text-ink/60">{String(body)}</p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
