"use client";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-[92px] right-5 z-40 w-11 h-11 rounded-full bg-[#1A1715] text-[#ebe859] flex items-center justify-center shadow-lg hover:bg-[#2596be] hover:text-white hover:scale-110 active:scale-90 transition-all duration-300"
      aria-label="Scroll to top"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square">
        <path d="M12 19V5M6 11l6-6 6 6" />
      </svg>
    </button>
  );
}