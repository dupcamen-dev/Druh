"use client";

import { useRef, type ComponentPropsWithoutRef, type ReactNode } from "react";
import { motion, type MotionValue, useScroll, useTransform } from "motion/react";
import { cn } from "@/lib/utils";

interface TextRevealProps extends ComponentPropsWithoutRef<"div"> {
  children: string;
}

/** Scroll-driven word-by-word text reveal (sticky section) */
export function TextReveal({ children, className }: TextRevealProps) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef });

  if (typeof children !== "string") {
    throw new Error("TextReveal: children must be a string");
  }

  const words = children.split(" ");

  return (
    <div ref={sectionRef} className={cn("relative z-0 h-[150vh]", className)}>
      <div className="sticky top-0 mx-auto flex h-[50%] max-w-4xl items-center bg-transparent px-4 py-20">
        <span className="flex flex-wrap p-5 font-display font-bold text-[#1A1715]/15 md:p-8 md:text-3xl lg:p-10 lg:text-4xl xl:text-5xl">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </span>
      </div>
    </div>
  );
}

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

function Word({ children, progress, range }: WordProps) {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative mx-1 lg:mx-1.5">
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
}