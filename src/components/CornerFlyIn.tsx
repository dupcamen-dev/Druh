"use client";
import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from "react";

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
  delay = 0,
  className = "",
  style,
}: {
  children: ReactNode;
  corner?: Corner;
  rotate?: number;
  delay?: number;
  className?: string;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [p, setP] = useState(0);
  const [vw, setVw] = useState(1400);
  const [vh, setVh] = useState(900);

  useEffect(() => {
    const setSize = () => {
      setVw(window.innerWidth);
      setVh(window.innerHeight);
    };
    setSize();

    let raf = 0;
    const update = () => {
      raf = 0;
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const v = window.innerHeight;
      const start = v * 0.95;
      let k = (start - r.top) / (v * 0.85);
      k = Math.max(0, Math.min(1, k));
      setP(k);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const [sx, sy] = DIRS[corner];
  const e = 1 - Math.pow(1 - p, 2.5);
  const dx = sx * vw * 0.4 * (1 - e);
  const dy = sy * vh * 0.3 * (1 - e);
  const rot = rotate + rotate * -2.2 * (1 - e);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        transform: `translate3d(${dx}px, ${dy}px, 0) rotate(${rot}deg)`,
        opacity: Math.min(1, p * 2),
        transition: "transform 0.1s linear, opacity 0.35s ease-out",
        transitionDelay: `${delay}ms`,
        willChange: "transform, opacity",
      }}
    >
      {children}
    </div>
  );
}