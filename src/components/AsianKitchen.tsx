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
    corner: "tl" as const,
  },
  {
    img: "/images/asian/ramen-beef.png",
    w: 1000,
    h: 750,
    kanji: "牛",
    name: "Beef ramen",
    desc: "Slow-simmered broth with melt-in-the-mouth su-vid beef and a soft egg.",
    rotate: 3,
    corner: "tr" as const,
  },
  {
    img: "/images/asian/ramen-katsu.png",
    w: 1000,
    h: 562,
    kanji: "カツ",
    name: "Chicken katsu ramen",
    desc: "Crispy golden katsu over a rich broth with nori and spring onion.",
    rotate: -3,
    corner: "bl" as const,
  },
  {
    img: "/images/asian/onigiri-unagi.png",
    w: 1367,
    h: 769,
    kanji: "うなぎ",
    name: "Onigiri with eel",
    desc: "Warm sushi rice, glazed eel, unagi sauce and a crisp nori wrap.",
    rotate: 5,
    corner: "br" as const,
  },
  {
    img: "/images/asian/yakitori-chicken.png",
    w: 1154,
    h: 769,
    kanji: "焼き鳥",
    name: "Yakitori chicken",
    desc: "Grilled chicken thigh brushed with tare sauce, sprinkled with sesame.",
    rotate: -2,
    corner: "tl" as const,
  },
  {
    img: "/images/asian/hambagu.png",
    w: 1154,
    h: 769,
    kanji: "ハンバーグ",
    name: "Hambagu",
    desc: "Japanese-style beef patty with demi-glace sauce, served with rice.",
    rotate: 2,
    corner: "bl" as const,
  },
];

export default function AsianKitchen() {
  return (
    <section
      id="asian"
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
    >
      {/* gradient container */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[--cream] to-white opacity-95"
      />
      {/* ghost kanji watermarks */}
      <svg
        aria-hidden
        className="absolute -top-10 -left-10 lg:-left-6 select-none pointer-events-none opacity-20 text-[120px] lg-text-[180px] font-bold fill-[rgb(0,0,0)] font-family-'Yu Gothic', 'Hiragino Sans', 'Noto Sans JP', sans-serif transform-none transition-transform lg:transition-none"
        viewBox="0 0 64 64"
      >
        <text x="6" y="52" fontSize="56" fontWeight="800">食</text>
      </svg>
      <svg
        aria-hidden
        className="absolute -bottom-12 -right-10 lg:-right-6 select-none pointer-events-none opacity-20 text-[120px] lg-text-[180px] font-bold fill-[rgb(0,0,0)] font-family-'Yu Gothic', 'Hiragino Sans', 'Noto Sans JP', sans-serif"
        viewBox="0 0 64 64"
      >
        <text x="-8" y="54" fontSize="58" fontWeight="800" transform="rotate(6 32 32)">麺</text>
      </svg>

      {/* vertical japanese dish names accent */}
      <svg
        aria-hidden
        className="hidden lg:block absolute left-4 top-1/2 -translate-y-1/2 select-none pointer-events-none opacity-100 text-[15px] text-[rgb(0,0,0)] h-[420px] w-auto"
        viewBox="0 0 28 420"
        width="28"
        height="420"
      >
        <text
          x="18"
          y="0"
          fontSize="20"
          fontWeight="700"
          fill="#000000"
          fontFamily="'Yu Gothic', 'Hiragino Sans', 'Noto Sans JP', sans-serif"
          letterSpacing="10"
          writingMode="vertical-rl"
          style={{ writingMode: "vertical-rl" }}
        >
          海鮮ラーメン・牛ラーメン・カツラーメン・うなぎおにぎり・焼き鳥・ハンバーグ
        </text>
      </svg>

      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-10">
        <Reveal className="text-center max-w-[760px] mx-auto mb-16 lg:mb-28">
          <span className="inline-block font-hand text-2xl text-[#2596be] mb-4">Asian kitchen</span>
          <h2 className="font-display font-bold text-[#1A1715] leading-[1.1] mb-6 tracking-tight" style={{ fontSize: "clamp(2.2rem, 4.8vw, 3.5rem)" }}>
            Tokyo street food,<br className="hidden sm:block" /> brewed right here
          </h2>
          <p className="text-[#555] text-[17px] sm:text-[18px] leading-[1.9]">
            From the broth‑bubbling stalls of Osaka to the sizzling grills of Tokyo’s alleyways —
            a Japanese street walk, without leaving Ternopil. Each dish tells a story of tradition,
            craft, and the freshest seasonal ingredients.
          </p>
        </Reveal>

        {/* masonry collage of cutout dishes */}
        <div
          className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2 xl:grid-cols-3 gap-y-8 pt-8"
        >
          {DISHES.map((d, i) => (
            <div
              key={d.img}
              className="group relative overflow-hidden rounded-lg group-hover:shadow-xl group-hover:transition-shadow duration-300"
            >
              {/* photo flies in from its own corner */}
              <CornerFlyIn corner={d.corner} rotate={d.rotate} delay={i * 100}>
                <Image
                  src={asset(d.img)}
                  alt={d.name}
                  width={d.w}
                  height={d.h}
                  priority={i === 0}
                  className="w-full h-auto drop-shadow-[0_20px_25px_rgba(26,23,21,0.2)] transition-transform duration-700 ease-out group-hover:scale-[1.05] group-hover:filter brightness-110"
                    sizes="(max-width: 1024px) 90vw, 40vw"
                />
                <span className="absolute top-2 right-2 font-display text-[10px] font-bold uppercase tracking-[0.15em] text-white bg-[#2596be] px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {d.kanji}
                </span>
              </CornerFlyIn>

              {/* caption lands separately, after the photo */}
              <Reveal delay={420 + i * 140} variant="up" className="text-center mt-3 lg:mt-4 px-2">
                <h3 className="font-display font-bold text-[#1A1715] text-[16px] sm:text-[18px] leading-snug">{d.name}</h3>
                <p className="text-[#555] text-[13px] sm:text-[14px] leading-[1.6] mt-1 max-w-[280px] mx-auto">{d.desc}</p>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}