"use client";

import { ReactNode } from "react";
import Link from "next/link";

// This component ensures proper client-side interactivity for Next.js links
export default function InteractiveLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
