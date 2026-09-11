"use client";
import { type ReactNode } from "react";
import { useReveal } from "@/hooks/useReveal";

type Props = {
  children: ReactNode;
  className?: string;
  variant?: "up" | "scale" | "left" | "right" | "stagger";
  as?: "section" | "div";
  id?: string;
  delay?: number;
};

export default function Reveal({
  children,
  className = "",
  variant = "up",
  as = "section",
  id,
  delay,
}: Props) {
  const ref = useReveal();
  const Tag = as;
  const variantClass =
    variant === "scale"
      ? "reveal-scale"
      : variant === "left"
        ? "reveal-left"
        : variant === "right"
          ? "reveal-right"
          : variant === "stagger"
            ? "stagger"
            : "reveal";

  return (
    <Tag
      ref={ref}
      id={id}
      className={`${variantClass} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
