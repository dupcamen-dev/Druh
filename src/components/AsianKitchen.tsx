"use client";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import CornerFlyIn from "@/components/CornerFlyIn";
import { asset } from "@/lib/base";
import { useLanguage } from "@/components/LanguageProvider";

type Dish = {
  id: string;
  img: string;
  local: boolean;
  w: number;
  h: number;
  nameKey: string;
  descKey: string;
  price: number;
  weight: string;
  rotate: number;
  corner: "tl" | "tr" | "bl" | "br";
};

const DISHES: Dish[] = [
  {
    id: "ramen-seafood",
    img: "/images/asian/ramen-seafood.png",
    local: true,
    w: 1448,
    h: 1086,
    nameKey: "asian.ramenSeafood.name",
    descKey: "asian.ramenSeafood.desc",
    price: 325,
    weight: "540 g",
    rotate: -4,
    corner: "tl",
  },
  {
    id: "ramen-beef",
    img: "/images/asian/ramen-beef.png",
    local: true,
    w: 1448,
    h: 1086,
    nameKey: "asian.ramenBeef.name",
    descKey: "asian.ramenBeef.desc",
    price: 285,
    weight: "520 g",
    rotate: 3,
    corner: "tr",
  },
  {
    id: "ramen-katsu",
    img: "/images/asian/ramen-katsu.png",
    local: true,
    w: 1447,
    h: 1087,
    nameKey: "asian.ramenKatsu.name",
    descKey: "asian.ramenKatsu.desc",
    price: 265,
    weight: "580 g",
    rotate: -3,
    corner: "bl",
  },
  {
    id: "yakitori-chicken",
    img: "/images/asian/yakitori-chicken.png",
    local: true,
    w: 1448,
    h: 1086,
    nameKey: "asian.yakitoriChicken.name",
    descKey: "asian.yakitoriChicken.desc",
    price: 215,
    weight: "220 g",
    rotate: 5,
    corner: "br",
  },
  {
    id: "yakitori-prawn",
    img: "/images/asian/yakitori-prawn.png",
    local: true,
    w: 1447,
    h: 1087,
    nameKey: "asian.yakitoriPrawn.name",
    descKey: "asian.yakitoriPrawn.desc",
    price: 185,
    weight: "120 g",
    rotate: -2,
    corner: "tl",
  },
  {
    id: "onigiri-eel",
    img: "/images/asian/onigiri-eel.webp",
    local: true,
    w: 1447,
    h: 1087,
    nameKey: "asian.onigiriEel.name",
    descKey: "asian.onigiriEel.desc",
    price: 155,
    weight: "125 g",
    rotate: -2,
    corner: "tl",
  },
  {
    id: "onigiri-salmon",
    img: "/images/asian/onigiri-salmon.webp",
    local: true,
    w: 1448,
    h: 1086,
    nameKey: "asian.onigiriSalmon.name",
    descKey: "asian.onigiriSalmon.desc",
    price: 155,
    weight: "120 g",
    rotate: 2,
    corner: "tr",
  },
  {
    id: "bowl-salmon",
    img: "/images/asian/salmon-bowl.webp",
    local: true,
    w: 1447,
    h: 1087,
    nameKey: "asian.bowlSalmon.name",
    descKey: "asian.bowlSalmon.desc",
    price: 325,
    weight: "300 g",
    rotate: 3,
    corner: "br",
  },
  {
    id: "bowl-prawn",
    img: "/images/asian/prawn-bowl.webp",
    local: true,
    w: 1447,
    h: 1087,
    nameKey: "asian.bowlPrawn.name",
    descKey: "asian.bowlPrawn.desc",
    price: 245,
    weight: "300 g",
    rotate: -3,
    corner: "bl",
  },
  {
    id: "hambagu",
    img: "/images/asian/hambagu.webp",
    local: true,
    w: 1274,
    h: 1235,
    nameKey: "asian.hambagu.name",
    descKey: "asian.hambagu.desc",
    price: 285,
    weight: "400 g",
    rotate: 2,
    corner: "br",
  },
  {
    id: "don-unagi",
    img: "/images/asian/don-unagi.webp",
    local: true,
    w: 1448,
    h: 1086,
    nameKey: "asian.donUnagi.name",
    descKey: "asian.donUnagi.desc",
    price: 345,
    weight: "300 g",
    rotate: -2,
    corner: "tl",
  },
  {
    id: "sweet-sour-chicken",
    img: "/images/asian/sweet-sour-chicken.webp",
    local: true,
    w: 1447,
    h: 1087,
    nameKey: "asian.sweetSourChicken.name",
    descKey: "asian.sweetSourChicken.desc",
    price: 190,
    weight: "220 g",
    rotate: 3,
    corner: "bl",
  },
  {
    id: "bbq-beef",
    img: "/images/asian/bbq-beef.webp",
    local: true,
    w: 1448,
    h: 1086,
    nameKey: "asian.bbqBeef.name",
    descKey: "asian.bbqBeef.desc",
    price: 345,
    weight: "410 g",
    rotate: -3,
    corner: "tr",
  },
];

export default function AsianKitchen() {
  const { t } = useLanguage();
  return (
    <section
      id="asian"
      className="relative z-[5] py-20 lg:py-32 bg-[#187492] overflow-hidden"
    >
      {/* warm glow accents */}
      <div className="asian-glow w-[480px] h-[480px] top-[-60px] left-[-120px] bg-[rgba(229,57,53,0.12)]" />
      <div className="asian-glow w-[360px] h-[360px] bottom-[-40px] right-[-80px] bg-[rgba(255,183,77,0.09)]" />

      {/* ── ghost kanji watermarks ── */}
      <span
        aria-hidden
        className="absolute top-[8%] left-[-2%] select-none pointer-events-none opacity-[0.06] text-[#E63946] text-[120px] lg:text-[180px] font-black leading-none"
        style={{ fontFamily: "var(--font-ja), sans-serif" }}
      >
        ラーメン
      </span>
      <span
        aria-hidden
        className="absolute bottom-[4%] right-[-3%] select-none pointer-events-none opacity-[0.05] text-[#F5EFE6] text-[110px] lg:text-[160px] font-black leading-none"
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
      <span
        aria-hidden
        className="hidden lg:block absolute right-5 top-1/2 -translate-y-1/2 select-none pointer-events-none text-[11px] tracking-[6px] text-[rgba(245,239,230,0.12)] h-[320px] w-auto"
        style={{
          fontFamily: "var(--font-ja), sans-serif",
          writingMode: "vertical-rl",
        }}
      >
        寿司・おにぎり・サーモン丼・海老丼・家庭料理・緑茶
      </span>

      <div className="relative z-[2] max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-10">
        {/* ── header ── */}
        <Reveal className="max-w-[760px] mx-auto mb-14 lg:mb-20 text-center">
          <span className="eyebrow" style={{ color: "#FFD27F" }}>
            {t("asian.eyebrow")}
          </span>
          <h2 className="h-section" style={{ color: "#F5EFE6" }}>
            {t("asian.title1")}{" "}
            <br className="hidden sm:block" />
            {t("asian.title2")}
          </h2>
          <p
            className="lead"
            style={{ color: "rgba(245,239,230,0.55)" }}
          >
            {t("asian.lead")}
          </p>
        </Reveal>

        {/* ── dish grid ── */}
        <div className="flex flex-wrap justify-center gap-5 sm:gap-6 pt-2">
          {DISHES.map((d, i) => (
            <div key={d.id} className="group relative w-full sm:w-[calc(50%-12px)] xl:w-[calc(33.333%-16px)]">
              <CornerFlyIn corner={d.corner} rotate={d.rotate}>
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={d.local ? asset(d.img) : d.img}
                    alt={t(d.nameKey)}
                    width={d.w}
                    height={d.h}
                    priority={i < 2}
                    className={`w-full h-full transition-transform duration-500 ease-out group-hover:scale-[1.04] drop-shadow-[0_12px_28px_rgba(0,0,0,0.35)] ${
                      d.local ? "object-contain" : "object-cover"
                    }`}
                    sizes="(max-width: 1024px) 90vw, (max-width: 1280px) 45vw, 30vw"
                  />
                </div>

                {/* caption — floats on the dark bg */}
                <div className="pt-3 px-1">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="min-w-0 font-display font-bold text-[#F5EFE6] text-[18px] leading-tight">
                      {t(d.nameKey)}
                    </h3>
                    <span className="shrink-0 font-display font-bold text-[#F1E05A] text-[21px] leading-none whitespace-nowrap tabular-nums">
                      {d.price} ₴
                    </span>
                  </div>
                  <p className="text-[rgba(245,239,230,0.45)] text-[13px] leading-[1.6] mt-1.5 line-clamp-2">
                    {t(d.descKey)}
                  </p>
                  <p className="text-[rgba(245,239,230,0.3)] text-[12px] mt-1">
                    {d.weight}
                  </p>
                </div>
              </CornerFlyIn>
            </div>
          ))}
        </div>

        </div>
    </section>
  );
}
