import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "dark" | "light" | "ghost";
};

export function Button({ className, variant = "dark", ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex h-12 items-center justify-center border px-6 text-xs font-medium uppercase tracking-luxury transition focus:outline-none focus:ring-2 focus:ring-ink focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        variant === "dark" && "border-ink bg-ink text-white hover:bg-charcoal",
        variant === "light" && "border-white bg-white text-ink hover:bg-bone",
        variant === "ghost" && "border-ink bg-transparent text-ink hover:bg-ink hover:text-white",
        className
      )}
      {...props}
    />
  );
}
