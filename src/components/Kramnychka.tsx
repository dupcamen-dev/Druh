"use client";
import { useState, useEffect, useMemo, useCallback, type CSSProperties } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import {
  SHOP_BY_CATEGORY,
  SHOP_ITEMS,
  buildTelegramOrder,
} from "@/data/shop";
import { asset } from "@/lib/base";
import { useLanguage } from "@/components/LanguageProvider";
import type { Locale } from "@/i18n/dictionary";

const CAT_KEY: Record<string, string> = {
  "kava-v-zernah": "shop.catCoffee",
  "matcha-v-sashe": "shop.catMatcha",
};

const ITEM_KEY: Record<string, string> = {
  "cafeboutique-decaf-colombia": "shop.decafColombia",
  "cafeboutique-ethiopia-gedeb": "shop.ethiopiaGedeb",
  "cafeboutique-brazil-divisa": "shop.brazilDivisa",
  "cafeboutique-peru-piura": "shop.peruPiura",
  "cafeboutique-kenya-kikuyu": "shop.kenyaKikuyu",
  "cafeboutique-peru-santa-rosa": "shop.peruSantaRosa",
  "kokosoviy-matcha-late": "shop.matchaCoconut",
  "kokosoviy-cbd-matcha-late": "shop.matchaCbd",
  "kokosoviy-kolagen-matcha-late": "shop.matchaCollagen",
};

const fmtLocal = (n: number, lang: Locale) =>
  `${n.toLocaleString("uk-UA", { maximumFractionDigits: 0 })} ${lang === "ua" ? "грн" : "UAH"}`;

function Stepper({
  qty,
  onAdd,
  onRemove,
}: {
  qty: number;
  onAdd: () => void;
  onRemove: () => void;
}) {
  const { t } = useLanguage();
  return (
    <div className="flex items-center border border-black/15 rounded-xl overflow-hidden text-[13px] font-bold text-[#1A1715]">
      <button
        onClick={onRemove}
        className="w-10 h-10 flex items-center justify-center text-[#1A1715] hover:bg-black/5 transition-colors active:scale-90"
        aria-label={t("shop.remove")}
      >
        −
      </button>
      <span className="w-10 text-center font-display text-[#1A1715]">{qty}</span>
      <button
        onClick={onAdd}
        className="w-10 h-10 flex items-center justify-center text-[#1A1715] hover:bg-black/5 transition-colors active:scale-90"
        aria-label={t("shop.add")}
      >
        +
      </button>
    </div>
  );
}

function CartDrawer({
  open,
  onClose,
  cart,
  setCart,
}: {
  open: boolean;
  onClose: () => void;
  cart: Record<string, number>;
  setCart: React.Dispatch<React.SetStateAction<Record<string, number>>>;
}) {
  const { t, lang } = useLanguage();
  const items = useMemo(
    () =>
      Object.entries(cart)
        .filter(([, q]) => q > 0)
        .map(([id, qty]) => ({ ...SHOP_ITEMS.find((x) => x.id === id)!, qty })),
    [cart],
  );

  const total = items.reduce((s, it) => s + it.priceGrn * it.qty, 0);
  const count = items.reduce((s, it) => s + it.qty, 0);

  const setQty = useCallback(
    (id: string, next: number) => {
      setCart((prev) => {
        const copy = { ...prev };
        if (next <= 0) delete copy[id];
        else copy[id] = next;
        return copy;
      });
    },
    [setCart],
  );

  return (
    <>
      {/* overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/40 z-50 transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* drawer */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-full max-w-[420px] bg-[#FDFAF7] shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#1A1715]/10">
          <h3 className="font-display font-bold text-[#1A1715] text-[18px]">
            {t("shop.cart")} {count > 0 && <span className="text-[#555] text-[14px]">({count})</span>}
          </h3>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-[#1A1715]/5 transition-colors"
            aria-label={t("shop.close")}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1A1715" strokeWidth="2" strokeLinecap="square">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* items */}
        {items.length === 0 ? (
          <div className="flex-1 flex items-center justify-center px-6 text-center">
            <div>
              <p className="font-display font-bold text-[#1A1715] text-[16px] mb-2">
                {t("shop.cartEmpty")}
              </p>
              <p className="text-[#555] text-[14px]">{t("shop.cartEmptySub")}</p>
            </div>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto px-6 py-5 space-y-5">
            {items.map((it) => (
              <div key={it.id} className="flex gap-4">
                <div className="relative w-[72px] h-[54px] shrink-0 rounded-xl overflow-hidden bg-[#1A1715]/5">
                  <Image
                    src={asset(it.imageUrl)}
                    alt={t(ITEM_KEY[it.id] + ".name")}
                    fill
                    className="object-cover"
                    sizes="72px"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-display font-bold text-[#1A1715] text-[13px] leading-tight truncate">
                    {t(ITEM_KEY[it.id] + ".name")}
                  </p>
                  <p className="text-[#555] text-[12px] mt-0.5">
                    {fmtLocal(it.priceGrn, lang)} / {it.weight} {it.weightType}
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <Stepper
                      qty={it.qty}
                      onAdd={() => setQty(it.id, it.qty + 1)}
                      onRemove={() => setQty(it.id, it.qty - 1)}
                    />
                    <p className="font-display font-bold text-[#1A1715] text-[14px]">
                      {fmtLocal(it.priceGrn * it.qty, lang)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* footer */}
        {items.length > 0 && (
          <div className="border-t border-[#1A1715]/10 px-6 py-5 space-y-4">
            <div className="flex items-center justify-between">
              <p className="font-display font-bold text-[#1A1715] text-[15px]">{t("shop.total")}</p>
              <p className="font-display font-extrabold text-[#1A1715] text-[18px]">
                {fmtLocal(total, lang)}
              </p>
            </div>

            <a
              href={buildTelegramOrder(cart)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--yellow btn--block"
            >
              {t("shop.orderTelegram")}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square">
                <path d="M18 8l4 4-4 4M6 20V11a1 1 0 0 1 1-1h11" />
              </svg>
            </a>

            <button
              onClick={() => setCart({})}
              className="w-full text-center text-[#555] text-[13px] font-bold underline-anim"
            >
              {t("shop.clearCart")}
            </button>
          </div>
        )}
      </div>
    </>
  );
}

/* Scatter of coffee grains decorating the little-shop section — a random
   handful of kava1..5 sprites tossed across the whole block. Each grain gets
   a random size, position, rotation and optional mirror. Generated with a
   seeded PRNG so the layout is deterministic (stable across SSR/hydration)
   and dense enough to read as a chaotic scatter. Pure decoration. */
type Grain = { src: string; size: number; x: string; y: string; rot: number; flip: boolean; aspect: number };

const SRC_POOL = ["kava1.png", "kava2.png", "kava3.png", "kava4.png", "kava5.png"] as const;

/* Native width/height ratio per sprite so oversized beans keep their real
   proportions instead of being squashed into a square box. */
const SPRITE_ASPECT: Record<(typeof SRC_POOL)[number], number> = {
  "kava1.png": 426 / 402,
  "kava2.png": 433 / 509,
  "kava3.png": 411 / 341,
  "kava4.png": 266 / 457,
  "kava5.png": 397 / 317,
};

function mulberry32(seed: number) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const GRAINS: Grain[] = (() => {
  const rand = mulberry32(0xc0ffee);
  const cols = 8;
  const rows = 5;
  const cellW = 100 / cols;
  const cellH = 92 / rows;
  return Array.from({ length: cols * rows }, (_, i) => {
    const c = i % cols;
    const r = Math.floor(i / cols);
    const x = (1 + c * cellW + (0.15 + rand() * 0.7) * cellW).toFixed(1);
    const y = (1 + r * cellH + (0.1 + rand() * 0.8) * cellH).toFixed(1);
    const src = SRC_POOL[Math.floor(rand() * SRC_POOL.length)];
    return {
      src,
      size: Math.round(70 + rand() * 70), // 70..140px
      x: `${x}%`,
      y: `${y}%`,
      rot: Math.round(rand() * 360 - 180),
      flip: rand() > 0.5,
      aspect: SPRITE_ASPECT[src],
    };
  });
})();

export default function Kramnychka() {
  const { t, lang } = useLanguage();
  const [cart, setCart] = useState<Record<string, number>>(() => {
    if (typeof window === "undefined") return {};
    try {
      const saved = localStorage.getItem("druh-shop-cart");
      return saved ? (JSON.parse(saved) as Record<string, number>) : {};
    } catch {
      return {};
    }
  });
  const [drawerOpen, setDrawerOpen] = useState(false);

  /* Bean scatter is pinned to the viewport (position:fixed) so the coffee
     stays put while the page scrolls, and it stays always visible — no clip,
     no show/hide logic. The hero and marquee are raised above it with a
     higher z-index, and every later section covers it naturally by DOM
     order, so grains are only ever seen over the shop itself. */

  /* persist */
  useEffect(() => {
    localStorage.setItem("druh-shop-cart", JSON.stringify(cart));
  }, [cart]);

  const cartCount = useMemo(
    () => Object.values(cart).reduce((s, q) => s + q, 0),
    [cart],
  );

  const addItem = useCallback((id: string) => {
    setCart((p) => ({ ...p, [id]: (p[id] || 0) + 1 }));
  }, []);

  const removeItem = useCallback((id: string) => {
    setCart((p) => {
      const next = { ...p };
      next[id] = (next[id] || 1) - 1;
      if (next[id] <= 0) delete next[id];
      return next;
    });
  }, []);

  return (
    <section className="relative overflow-hidden py-16 lg:py-32 px-5 sm:px-8 lg:px-10 bg-[#ebe859]">
      <div
        aria-hidden
        className="beans-layer pointer-events-none fixed inset-0 z-0"
      >
        {GRAINS.map((g, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{ left: g.x, top: g.y }}
            animate={{
              x: [0, g.flip ? -12 : 12, 0],
              y: [0, -16, 0],
              rotate: [g.rot, g.rot + 6, g.rot],
            }}
            transition={{
              duration: 7 + (i % 5) * 1.4,
              delay: (i % 7) * 0.55,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          >
            <Image
              src={asset(`/images/${g.src}`)}
              alt=""
              width={g.size}
              height={Math.round(g.size / g.aspect)}
              unoptimized
              draggable={false}
              style={{
                "--g": `${g.size}px`,
                transform: `scaleX(${g.flip ? -1 : 1})`,
                width: "calc(var(--g) * var(--grainFactor, 1))",
                height: "auto",
                aspectRatio: String(g.aspect),
              } as CSSProperties}
            />
          </motion.div>
        ))}
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] backdrop-blur-[2px]"
      />
      <div className="relative z-10 max-w-[1200px] mx-auto space-y-12 lg:space-y-20">
        {SHOP_BY_CATEGORY.map((cat) => (
          <div key={cat.id}>
            <div className="section-head">
              <span
                className="eyebrow eyebrow--ink"
                style={{ color: "#187492" }}
              >
                {t("shop.eyebrow")}
              </span>
              <h2
                className="h-section"
                style={{ color: "#1A1715", fontSize: "clamp(2.1rem, 4.6vw, 3rem)" }}
              >
                {t(CAT_KEY[cat.id])}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {cat.items.map((it) => {
                const qty = cart[it.id] || 0;
                return (
                  <div
                    key={it.id}
                    className="card-lift group relative flex flex-col rounded-xl overflow-hidden bg-[#187492] z-10"
                  >
                    {/* image */}
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={asset(it.imageUrl)}
                        alt={t(ITEM_KEY[it.id] + ".name")}
                        fill
                        className="object-contain transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 1024px) 100vw, 33vw"
                      />
                    </div>

                    {/* body */}
                    <div className="p-5 flex flex-col flex-1">
                      <p className="font-display font-bold text-[#1A1715] text-[18px] leading-snug mb-1.5">
                        {t(ITEM_KEY[it.id] + ".name")}
                      </p>
                      <p className="text-[#1A1715]/80 text-[12px] leading-[1.6] mb-4 line-clamp-3">
                        {t(ITEM_KEY[it.id] + ".desc")
                          .replace(/\n+/g, " · ")
                          .replace(/Tasting notes: /g, "")
                          .replace(/Смакові ноти: /g, "")}
                      </p>
                      <div className="mt-auto flex items-end justify-between gap-3">
                        <div>
                          <p className="font-display font-extrabold text-[#1A1715] text-[18px]">
                            {fmtLocal(it.priceGrn, lang)}
                          </p>
                          <p className="text-[#1A1715]/80 text-[12px]">
                            {it.weight} {it.weightType}
                            {it.kcal ? ` · ${it.kcal} ${t("shop.kcal")}` : ""}
                          </p>
                        </div>
                        {qty === 0 ? (
                          <button
                            onClick={() => addItem(it.id)}
                            className="shine shrink-0 btn btn--sm btn--yellow"
                          >
                            {t("shop.add")}
                          </button>
                        ) : (
                          <Stepper
                            qty={qty}
                            onAdd={() => addItem(it.id)}
                            onRemove={() => removeItem(it.id)}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* floating cart button */}
      <button
        onClick={() => setDrawerOpen(true)}
        className={`fixed bottom-5 right-5 z-40 w-14 h-14 rounded-full bg-[#187492] text-white flex items-center justify-center shadow-lg hover:bg-[#155f78] hover:scale-110 hover:rotate-6 active:scale-90 transition-all duration-300 ${
          cartCount > 0 ? "scale-100 opacity-100" : "scale-90 opacity-0 pointer-events-none"
        }`}
        aria-label={t("shop.openCart")}
      >
        {/* bag icon */}
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <path d="M16 10a4 4 0 01-8 0" />
        </svg>
        {cartCount > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#ebe859] text-[#1A1715] text-[11px] font-bold flex items-center justify-center">
            {cartCount}
          </span>
        )}
      </button>

      <CartDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        cart={cart}
        setCart={setCart}
      />
    </section>
  );
}