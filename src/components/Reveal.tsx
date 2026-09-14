"use client";
import { useRef, type ReactNode, type RefObject } from "react";
import { motion, MotionConfig, useInView } from "motion/react";

type Props = {
  children: ReactNode;
  className?: string;
  variant?: "up" | "scale" | "left" | "right" | "stagger";
  as?: "section" | "div";
  id?: string;
  delay?: number;
};

const EASE = [0.22, 1, 0.36, 1] as const;

const ENTRY: Record<
  "up" | "scale" | "left" | "right",
  { hidden: Record<string, number>; visible: Record<string, number> }
> = {
  up: { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0 } },
  scale: { hidden: { opacity: 0, scale: 0.97 }, visible: { opacity: 1, scale: 1 } },
};

export default function Reveal({
  children,
  className = "",
  variant = "up",
  as = "section",
  id,
  delay,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref as RefObject<Element | null>, {
    once: true,
    amount: 0.12,
  });

  const shared = {
    ref,
    id,
    className,
    initial: "hidden",
    animate: inView ? "visible" : "hidden",
  } as const;

  if (variant === "stagger") {
    return (
      <MotionConfig reducedMotion="user">
        <motion.div
          {...shared}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.06, delayChildren: delay ?? 0 },
            },
          }}
        >
          {children}
        </motion.div>
      </MotionConfig>
    );
  }

  const v = ENTRY[variant];
  const MotionTag = as === "section" ? motion.section : motion.div;

  return (
    <MotionConfig reducedMotion="user">
      <MotionTag
        {...shared}
        variants={{
          hidden: v.hidden,
          visible: {
            ...v.visible,
            transition: { duration: 0.5, ease: EASE, delay: delay ?? 0 },
          },
        }}
      >
        {children}
      </MotionTag>
    </MotionConfig>
  );
}

export const STAGGER_CHILD = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE } },
};