"use client";
import { useRef, useEffect, useState, type ReactNode } from "react";

export default function FlyIn({
  children,
  className = "",
  drop = 220,
}: {
  children: ReactNode;
  className?: string;
  drop?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [dxy, setDxy] = useState({ x: -4000, y: -4000 });

  useEffect(() => {
    let raf = 0;

    const update = () => {
      raf = 0;
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.82;
      let p = (start - r.top) / (vh * 0.85);
      p = Math.max(0, Math.min(1, p));
      const e = 1 - Math.pow(1 - p, 3);
      const xOff = window.innerWidth * 0.6;
      setDxy({ x: xOff * (1 - e), y: -drop * (1 - e) });
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [drop]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: `translate(${dxy.x}px, ${dxy.y}px)`,
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}