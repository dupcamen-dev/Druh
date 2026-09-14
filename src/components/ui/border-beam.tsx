"use client";

import { motion } from "motion/react";
import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

interface BorderBeamProps {
  /** Size of the beam square in pixels */
  size?: number;
  /** Seconds for one full lap around the border */
  duration?: number;
  /** Delay before the animation starts (seconds) */
  delay?: number;
  /** Start color of the beam gradient */
  colorFrom?: string;
  /** End color of the beam gradient */
  colorTo?: string;
  /** Reverse the travel direction */
  reverse?: boolean;
  /** Initial offset position (0–100) */
  initialOffset?: number;
  className?: string;
}

export function BorderBeam({
  size = 50,
  duration = 6,
  delay = 0,
  colorFrom = "#2596be",
  colorTo = "#ebe859",
  reverse = false,
  initialOffset = 0,
  className,
}: BorderBeamProps) {
  const maskStyle: CSSProperties = {
    WebkitMask:
      "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
    WebkitMaskComposite: "xor",
    maskComposite: "exclude",
    border: "1px solid transparent",
  };

  return (
    <motion.div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 rounded-[inherit]", className)}
      style={maskStyle}
    >
      <motion.div
        className="absolute aspect-square rounded-full"
        style={
          {
            width: size,
            offsetPath: `rect(0 auto auto 0 round ${size}px)`,
            background: `linear-gradient(to left, transparent, ${colorFrom}, ${colorTo}, transparent)`,
          } as CSSProperties
        }
        initial={{ offsetDistance: `${initialOffset}%` }}
        animate={{
          offsetDistance: reverse
            ? ["100%", "0%"]
            : ["0%", "100%"],
        }}
        transition={{ repeat: Infinity, ease: "linear", duration, delay }}
      />
    </motion.div>
  );
}