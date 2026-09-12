"use client";
import { useEffect, useRef, ReactNode } from "react";

export type Corner = "tl" | "tr" | "bl" | "br";

const DIRS: Record<Corner, [number, number]> = {
  tl: [-1, -1],
  tr: [1, -1],
  bl: [-1, 1],
  br: [1, 1],
};

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
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // compute start position
    const vpW = window.innerWidth;
    const vpH = window.innerHeight;
    const [sx, sy] = DIRS[corner];
    // start offset: 50% of viewport width/height in that corner direction
    const startX = sx * vpW * 0.5;
    const startY = sy * vpH * 0.45;

    // set initial "from" state (trigger reflow)
    el.style.transition = "none";
    el.style.transform = `translate3d(${startX}px, ${startY}px, 0) rotate(${rotate}deg)`;
    el.style.opacity = "0";
    void el.offsetWidth; // trigger reflow

    // set initial "to" state with transition
    el.style.transition = "transform 0.5s cubic-bezier(0.34,1.56,0.64,1), opacity 0.5s cubic-bezier(0.34,1.56,0.64,1)";
    el.style.transform = `translate3d(0,0,0) rotate(${rotate}deg)`;
    el.style.opacity = "1";
  }, [corner, rotate]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </div>
  );
}