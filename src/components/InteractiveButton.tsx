"use client";

import { ReactNode } from "react";

// This component ensures proper client-side interactivity for buttons and links
export default function InteractiveButton({
  onClick,
  className,
  children,
  type = "button",
}: {
  onClick: () => void;
  className?: string;
  children: ReactNode;
  type?: "button" | "submit" | "reset";
}) {
  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  );
}
