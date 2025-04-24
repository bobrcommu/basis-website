"use client";

import { useEffect, useState, ReactNode } from "react";

// This component renders children only on the client side
// It helps avoid hydration mismatches from browser extensions
export default function ClientOnly({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? <>{children}</> : null;
}
