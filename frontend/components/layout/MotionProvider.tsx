"use client";

import { useLenis } from "@/hooks/useLenis";

export function MotionProvider({ children }: { children: React.ReactNode }) {
  useLenis();
  return <>{children}</>;
}
