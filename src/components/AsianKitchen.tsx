"use client";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import CornerFlyIn from "@/components/CornerFlyIn";
import { asset } from "@/lib/base";

type Dish = {
  img: string;
  local: boolean;
  w: number;
  h: number;
  name: string;
  price: number;
  weight: string;
  desc: string;
  rotate: number;
  corner: "tl" | "tr" | "bl" | "br";
};

const DISHES: Dish[] = [
  {
    img: "/images/asian/ramen-seafood.png",
    local: true,
    w: 1000,
    h: 563,
    name: "Seafood ramen",
    price: 325,
    weight: "540 g",
    desc: "Umami broth with prawns, squid, marinated egg & tofu, corn and nori.",
    rotate: -4,
    corner: "tl",
  },
  {
    img: "/images/asian/ramen-beef.png",
    local: true,
    w: 433,
    h: 509,
    name: "Beef ramen",
    price: 285,
    weight: "520 g",
    desc: "Su-vid beef, spicy chili oil, marinated egg, corn and nori chips.",
    rotate: 3,
    corner: "tr",
  },
  {
    img: "/images/asian/ramen-katsu.png",
    local: true,
    w: 1000,
    h: 562,
    name: "Chicken katsu ramen",
    price: 265,
    weight: "580 g",
    desc: "Crispy golden katsu, wood-ear mushroom, marinated egg, house noodles.",
    rotate: -3,
    corner: "bl",
  },
  {
    img: "/images/asian/yakitori-chicken.png",
    local: true,
    w: 1154,
    h: 769,
    name: "Yakitori chicken",
    price: 215,
    weight: "220 g",
    desc: "Charcoal-grilled thigh brushed with tare — soy, mirin and sake.",
    rotate: 5,
    corner: "br",
  },
  {
    img: "https://cdn-media.choiceqr.com/prod-eat-drug/menu/pHDJuIc-IDFOvbA-eRRkMGd_prepare.jpeg",
    local: false,
    w: 800,
    h: 600,
    name: "Yakitori prawn",
    price: 185,
    weight: "120 g",
    desc: "Juicy prawns with spinach, lime and citrus yuzu sauce.",
    rotate: -2,
    corner: "tl",
  },
  {
    img: "/images/asian/onigiri-unagi.png",
    local: true,
    w: 1367,
    h: 769,
    name: "Onigiri with eel",
    price: 155,
    weight: "125 g",
    desc: "Warm sushi rice, glazed eel, unagi sauce and a crisp nori wrap.",
    rotate: -2,
    corner: "tl",
  },
  {
    img: "https://cdn-media.choiceqr.com/prod-eat-drug/menu/hNkeASm-mcuAPZd-malJlBz_prepare.jpeg",
    local: false,
    w: 800,
    h: 600,
    name: "Onigiri with salmon",
    price: 155,
    weight: "120 g",
    desc: "Warm sushi rice wrapped in nori, filled with fresh salmon.",
    rotate: 2,
    corner: "tr",
  },
  {
    img: "https://cdn-media.choiceqr.com/prod-eat-drug/menu/NTkyfRt-eOVQsDH-xkKkDUL_prepare.png",
    local: false,
    w: 800,
    h: 600,
    name: "Salmon rice bowl",
    price: 325,
    weight: "300 g",
    desc: "Japanese rice bowl topped with salmon and fresh seasonal greens.",
    rotate: 3,
    corner: "br",
  },
  {
    img: "https://cdn-media.choiceqr.com/prod-eat-drug/menu/LjTnUJv-nIregLm-LzalPCm_prepare.png",
    local: false,
    w: 800,
    h: 600,
    name: "Prawn rice bowl",
    price: 245,
    weight: "300 g",
    desc: "Japanese rice bowl with grilled prawns and a citrus dressing.",
    rotate: -3,
    corner: "bl",
  },
];

export default function AsianKitchen() {
  return (
    <section
      id="asian"
      className="relative py-20 lg:py-32 bg-[#12100D] overflow-hidden"
    >
      {/* warm glow accents */}
      <div className="asian-glow w-[480px] h-[480px] top-[-60px] left-[-120px] bg-[rgba(229,57,53,0.12)]" />
      <div className="asian-glow w-[360px] h-[360px] bottom-[-40px] right-[-80px] bg-[rgba(255,183,77,0.09)]" />

      {/* ── ghost kanji watermarks ── */}
      <span
        aria-hidden
        className="absolute top-[8%] left-[-2%] select-none pointer-events-none opacity-[0.045] text-[#E63946] text-[120px] lg:text-[180px] font-black leading-none"
        style={{ fontFamily: "var(--font-ja), sans-serif" }}
      >
        ラーメン
      </span>
      <span
        aria-hidden
        className="absolute bottom-[4%] right-[-3%] select-none pointer-events-none opacity-[0.045] text-[#F5EFE6] text-[110px] lg:text-[160px] font-black leading-none"
        style={{ fontFamily: "var(--font-ja), sans-serif" }}
      >
        焼き鳥
      </span>

      {/* ── vertical accent text (desktop) ── */}
      <span
        aria-hidden
        className="hidden lg:block absolute left-5 top-1/2 -translate-y-1/2 select-none pointer-events-none text-[11px] tracking-[6px] text-[rgba(245,239,230,0.12)] h-[320px] w-auto"
        style={{
          fontFamily: "var(--font-ja), sans-serif",
          writingMode: "vertical-rl",
        }}
      >
        海鮮ラーメン・牛ラーメン・カツラーメン・焼き鳥・海老・ハンバーグ
      </span>

      <div className="relative z-[2] max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-10">
        {/* ── header ── */}
        <Reveal className="max-w-[760px] mx-auto mb-14 lg:mb-20 text-center">
          <span className="eyebrow" style={{ color: "#FFD27F" }}>
            Asian kitchen
          </span>
          <h2 className="h-section" style={{ color: "#F5EFE6" }}>
            Tokyo street food,{" "}
            <br className="hidden sm:block" />
            brewed right here
          </h2>
          <p
            className="lead"
            style={{ color: "rgba(245,239,230,0.55)" }}
          >
            From the broth-bubbling stalls of Osaka to the sizzling grills of
            Tokyo&apos;s alleyways — a Japanese street walk, without leaving
            Ternopil. Each dish tells a story of tradition, craft, and the
            freshest seasonal ingredients.
          </p>
        </Reveal>

        {/* ── dish grid ── */}
        <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-2 xl:grid-cols-3 pt-2">
          {DISHES.map((d, i) => (
            <div key={d.name} className="group relative">
              <CornerFlyIn corner={d.corner} rotate={d.rotate}>
                {/* transparent photo, no frame — just the dish */}
                <Image
                  src={d.local ? asset(d.img) : d.img}
                  alt={d.name}
                  width={d.w}
                  height={d.h}
                  priority={i < 2}
                  className="w-full h-auto transition-transform duration-500 ease-out group-hover:scale-[1.04] drop-shadow-[0_12px_28px_rgba(0,0,0,0.35)]"
                  sizes="(max-width: 1024px) 90vw, (max-width: 1280px) 45vw, 30vw"
                />

                {/* caption — floats on the dark bg */}
                <div className="pt-3 px-1 flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="font-display font-bold text-[#F5EFE6] text-[15px] leading-snug">
                      {d.name}
                    </h3>
                    <p className="text-[rgba(245,239,230,0.45)] text-[11px] leading-[1.6] mt-1 line-clamp-2">
                      {d.desc}
                    </p>
                  </div>

                  {/* price + weight */}
                  <div className="shrink-0 text-right">
                    <span className="block font-display font-bold text-[#F1E05A] text-[17px] leading-none">
                      {d.price} ₴
                    </span>
                    <span className="block text-[rgba(245,239,230,0.3)] text-[10px] mt-1">
                      {d.weight}
                    </span>
                  </div>
                </div>
              </CornerFlyIn>
            </div>
          ))}
        </div>

        {/* ── CTA row ── */}
        <Reveal className="mt-12 lg:mt-16 flex flex-wrap justify-center gap-4">
          <a
            href={asset("/menu/druh-menu-en.pdf")}
            target="_blank"
            rel="noopener"
            className="group shine btn btn--yellow"
          >
            Open menu (PDF)
            <svg
              className="transition-transform duration-300 group-hover:translate-x-1"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="square"
            >
              <path d="M18 8l4 4-4 4M6 20V11a1 1 0 0 1 1-1h11" />
            </svg>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
