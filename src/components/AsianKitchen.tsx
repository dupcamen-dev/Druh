"use client";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import CornerFlyIn from "@/components/CornerFlyIn";
import { asset } from "@/lib/base";

const DISHES = [
  {
    img: "/images/asian/ramen-seafood.png",
    w: 1000,
    h: 563,
    kanji: "海鮮",
    name: "Seafood ramen",
    desc: "Umami-packed broth with prawns, a silky egg and hand-made noodles.",
    rotate: -4,
    corner: "tl",
  },
  {
    img: "/images/asian/ramen-beef.png",
    w: 1000,
    h: 750,
    kanji: "牛",
    name: "Beef ramen",
    desc: "Slow-simmered broth with melt-in-the-mouth su-vid beef and a soft egg.",
    rotate: 3,
    corner: "tr",
  },
  {
    img: "/images/asian/ramen-katsu.png",
    w: 1000,
    h: 562,
    kanji: "カツ",
    name: "Chicken katsu ramen",
    desc: "Crispy golden katsu over a rich broth with nori and spring onion.",
    rotate: -3,
    corner: "bl",
  },
  {
    img: "/images/asian/onigiri-unagi.png",
    w: 1367,
    h: 769,
    kanji: "うなぎ",
    name: "Onigiri with eel",
    desc: "Warm sushi rice, glazed eel, unagi sauce and a crisp nori wrap.",
    rotate: 5,
    corner: "br",
  },
  {
    img: "/images/asian/yakitori-chicken.png",
    w: 1154,
    h: 769,
    kanji: "焼き鳥",
    name: "Yakitori chicken",
    desc: "Grilled chicken thigh brushed with tare sauce, sprinkled with sesame.",
    rotate: -2,
    corner: "tl",
  },
  {
    img: "/images/asian/hambagu.png",
    w: 1154,
    h: 769,
    kanji: "ハンバーグ",
    name: "Hambagu",
    desc: "Japanese-style beef patty with demi-glace sauce, served with rice.",
    rotate: 2,
    corner: "bl",
  },
];

export default function AsianKitchen() {
  return (
    <section
      id="asian"
      className="relative py-16 lg:py-32 bg-white overflow-hidden"
    >
      {/* gradient container for soft background */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[--cream] to-white"
      />
      {/* subtle ghost kanji watermarks – smaller, positioned to the sides, very low opacity */}
      <svg
        aria-hidden
        className="absolute -top-4 -left-4 select-none pointer-events-none opacity-5 text-[80px] lg:text-[100px] font-bold fill-[rgb(0,0,0)] font-family-'Yu Gothic', 'Hiragino Sans', 'Noto Sans JP', sans-serif"
        viewBox="0 0 64 64"
      >
        <text x="6" y="52" fontSize="56" fontWeight="800">食</text>
      </svg>
      <svg
        aria-hidden
        className="absolute -bottom-8 -right-8 select-none pointer-events-none opacity-5 text-[80px] lg:text-[100px] font-bold fill-[rgb(0,0,0)] font-family-'Yu Gothic', 'Hiragino Sans', 'Noto Sans JP', sans-serif"
        viewBox="0 0 64 64"
      >
        <text x="-8" y="54" fontSize="58" fontWeight="800" transform="rotate(6 32 32)">麺</text>
      </svg>

      {/* vertical japanese dish names accent – smaller, subtler, hidden on mobile */}
      <svg
        aria-hidden
        className="hidden lg:block absolute left-4 top-1/2 -translate-y-1/2 select-none pointer-events-none opacity-8 text-[12px] text-[rgb(0,0,0)] h-[300px] w-auto"
        viewBox="0 0 28 300"
        width="28"
        height="300"
      >
        <text
          x="18"
          y="0"
          fontSize="12"
          fontWeight="700"
          fill="#000000"
          fontFamily="'Yu Gothic', 'Hiragino Sans', 'Noto Sans JP', sans-serif"
          letterSpacing="8"
          writingMode="vertical-rl"
          style={{ writingMode: "vertical-rl" }}
        >
          海鮮ラーメン・牛ラーメン・カツラーメン・うなぎおにぎり
        </text>
      </svg>

      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-10">
        <Reveal className="max-w-[760px] mx-auto mb-12 lg:mb-16 text-center">
          <span className="eyebrow">Asian kitchen</span>
          <h2 className="h-section">
            Tokyo street food,<br className="hidden sm:block" /> brewed right here
          </h2>
          <p className="lead">
            From the broth-bubbling stalls of Osaka to the sizzling grills of Tokyo&apos;s alleyways —
            a Japanese street walk, without leaving Ternopil. Each dish tells a story of tradition,
            craft, and the freshest seasonal ingredients.
          </p>
        </Reveal>

        {/* masonry collage of cutout dishes – entrance from corners, no scroll dependency */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2 xl:grid-cols-3 gap-y-6 pt-4">
          {DISHES.map((d, i) => (
            <div
              key={d.img}
              className="group relative rounded-xl overflow-hidden group-hover:shadow-xl group-hover:transition-shadow duration-300"
            >
              {/* photo flies in from its own corner on mount – single smooth animation, no steps */}
              <CornerFlyIn corner={d.corner as "tl" | "tr" | "bl" | "br"} rotate={d.rotate}>
                <Image
                  src={asset(d.img)}
                  alt={d.name}
                  width={d.w}
                  height={d.h}
                  priority={i === 0}
                  className="w-full h-auto drop-shadow-[0_15px_18px_rgba(26,23,21,0.18)] transition-transform duration-500 ease-out group-hover:scale-[1.04] group-hover:filter brightness-105"
                    sizes="(max-width: 1024px) 90vw, 45vw"
                />
                <span className="absolute top-1 right-1 font-display text-[9px] font-bold uppercase tracking-[0.12em] text-white bg-[#187492] px-1 py-0.5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {d.kanji}
                </span>
              </CornerFlyIn>

              {/* caption fades up slightly after photo – reduced delay, separate animation */}
              <Reveal variant="up" className="text-center mt-2 lg:mt-1.5 px-1">
                <h3 className="font-display font-bold text-[#1A1715] text-[14px] sm:text-[15px] leading-snug">{d.name}</h3>
                <p className="text-[#555] text-[11px] sm:text-[12px] leading-[1.5] mt-0.5 max-w-[240px] mx-auto">{d.desc}</p>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}