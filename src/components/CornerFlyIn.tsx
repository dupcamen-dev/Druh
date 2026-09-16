"use client";
import type { ReactNode } from "react";
import { motion } from "motion/react";

export type Corner = "tl" | "tr" | "bl" | "br";

const START: Record<Corner, { x: string; y: string }> = {
  tl: { x: "-45vw", y: "-40vh" },
  tr: { x: "45vw", y: "-40vh" },
  bl: { x: "-45vw", y: "40vh" },
  br: { x: "45vw", y: "40vh" },
};

const SNAP = [0.34, 1.56, 0.64, 1] as const;

export default function CornerFlyIn({
  children,
  corner = "tl",
  rotate = 0,
  className = "",
}: {
  children: ReactNode;
  corner?: Corner;
  rotate?: number;
  className?: string;
}) {
  const start = START[corner];

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: start.x, y: start.y, rotate }}
      animate={{ opacity: 1, x: 0, y: 0, rotate }}
      transition={{ duration: 0.5, ease: SNAP }}
    >
      {children}
    </motion.div>
  );
}