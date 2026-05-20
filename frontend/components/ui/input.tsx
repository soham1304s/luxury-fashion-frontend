import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "h-12 w-full border-0 border-b border-ink/25 bg-transparent px-0 text-sm outline-none transition placeholder:text-ink/45 focus:border-ink",
        className
      )}
      {...props}
    />
  );
}
