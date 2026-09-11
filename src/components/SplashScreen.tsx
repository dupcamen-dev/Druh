"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { asset } from "@/lib/base";

export default function SplashScreen() {
  const [state, setState] = useState<"show" | "leaving" | "gone">("show");
  const [pct, setPct] = useState(1);

  useEffect(() => {
    const DUR = 1700;
    const start = Date.now();
    const iv = setInterval(() => {
      const p = Math.min(100, Math.max(1, Math.round(((Date.now() - start) / DUR) * 100)));
      setPct(p);
      if (p >= 100) clearInterval(iv);
    }, 30);
    const t1 = setTimeout(() => setState("leaving"), 1700);
    const t2 = setTimeout(() => setState("gone"), 2300);
    return () => {
      clearInterval(iv);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (state === "gone") return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-[#2596be] flex items-center justify-center transition-opacity duration-500 ease-out ${
        state === "leaving" ? "opacity-0" : "opacity-100"
      }`}
      aria-hidden
    >
      <div className="flex flex-col items-center px-6 animate-splash">
        <Image
          src={asset("/images/logo-new.png")}
          alt="Druh"
          width={176}
          height={171}
          priority
          className="w-[176px] h-auto"
        />
        <p className="mt-8 font-display font-bold text-white text-[28px] tabular-nums">
          {pct}%
        </p>
      </div>
    </div>
  );
}