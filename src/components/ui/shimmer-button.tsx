"use client";

import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type CSSProperties,
  type ReactNode,
} from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface ShimmerButtonProps extends ComponentPropsWithoutRef<"button"> {
  shimmerColor?: string;
  /** Width of the light wedge in degrees */
  shimmerSize?: number;
  /** Seconds for one full revolution of the spark */
  shimmerDuration?: number;
  borderRadius?: string;
  background?: string;
  /** When provided, renders an anchor instead of a button */
  href?: string;
  children?: ReactNode;
}

export const ShimmerButton = forwardRef<HTMLButtonElement, ShimmerButtonProps>(
  (
    {
      shimmerColor = "#ffffff",
      shimmerSize = 100,
      shimmerDuration = 3,
      borderRadius = "0.7rem",
      background = "rgba(26, 23, 21, 1)",
      className,
      href,
      children,
      style,
      ...props
    },
    ref,
  ) => {
    const cssVars = {
      "--shimmer-color": shimmerColor,
      "--spread": `${shimmerSize}deg`,
      "--radius": borderRadius,
      "--bg": background,
    } as CSSProperties;

    const cls = cn(
      "group relative z-0 inline-flex cursor-pointer items-center justify-center gap-2.5 overflow-hidden whitespace-nowrap [border-radius:var(--radius)] border border-white/15 px-8 py-4 text-[14px] font-bold uppercase tracking-wider text-white [background:var(--bg)]",
      "transform-gpu transition-all duration-300 ease-in-out hover:scale-[1.03] active:translate-y-px active:scale-[0.98]",
      className,
    );

    const inner = (
      <>
        {/* rotating conic spark */}
        <span aria-hidden className="absolute inset-0 overflow-hidden [border-radius:var(--radius)]">
          <motion.span
            className="absolute left-1/2 top-1/2 block aspect-square w-[220%] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              background:
                "conic-gradient(from 0deg, transparent 0deg, var(--shimmer-color) var(--spread), transparent var(--spread))",
            }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, ease: "linear", duration: shimmerDuration }}
          />
        </span>

        {/* backdrop covers the face so the spark only shows on the border */}
        <span aria-hidden className="absolute inset-[3px] [border-radius:calc(var(--radius)-3px)] [background:var(--bg)] shadow-[inset_0_-6px_10px_rgba(255,255,255,0.18)] transition-shadow duration-300 group-hover:shadow-[inset_0_-5px_18px_rgba(255,255,255,0.35)]" />

        <span className="relative z-10 inline-flex items-center gap-2.5">{children}</span>
      </>
    );

    return href ? (
      <a ref={ref as never} href={href} style={{ ...cssVars, ...style }} className={cls} {...(props as object)}>
        {inner}
      </a>
    ) : (
      <button ref={ref} style={{ ...cssVars, ...style }} className={cls} {...props}>
        {inner}
      </button>
    );
  },
);

ShimmerButton.displayName = "ShimmerButton";