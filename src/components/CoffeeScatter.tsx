import Image from "next/image";
import { asset } from "@/lib/base";

/* ─────────────────────────────────────────────────────────────────────────
   CoffeeScatter — static coffee-grain decor pinned to the Kramnychka
   (little shop) section background. No animations, no library, no scroll:
   just the kava1..5 sprites re-used many times, each with its own size,
   rotation and horizontal mirror, scattered across the whole section so
   it reads like a handful of beans tossed onto the counter.
   ───────────────────────────────────────────────────────────────────────── */

type Grain = {
  src: string;
  size: number;
  x: string; // left offset (0..100%)
  y: string; // top offset (0..100%)
  rot: number;
  flip: boolean; // scaleX(-1)
};

const GRAINS: Grain[] = [
  { src: "kava1.png", size: 46, x: "6%", y: "8%", rot: -24, flip: false },
  { src: "kava2.png", size: 58, x: "88%", y: "5%", rot: 132, flip: true },
  { src: "kava3.png", size: 38, x: "22%", y: "14%", rot: 62, flip: false },
  { src: "kava4.png", size: 54, x: "76%", y: "18%", rot: -70, flip: true },
  { src: "kava5.png", size: 42, x: "12%", y: "24%", rot: 14, flip: false },
  { src: "kava1.png", size: 66, x: "58%", y: "26%", rot: 100, flip: true },
  { src: "kava3.png", size: 74, x: "36%", y: "34%", rot: -12, flip: false },
  { src: "kava5.png", size: 40, x: "92%", y: "34%", rot: 142, flip: true },
  { src: "kava2.png", size: 50, x: "8%", y: "42%", rot: 190, flip: false },
  { src: "kava4.png", size: 60, x: "64%", y: "44%", rot: 30, flip: true },
  { src: "kava1.png", size: 34, x: "30%", y: "50%", rot: -90, flip: false },
  { src: "kava5.png", size: 78, x: "48%", y: "58%", rot: 66, flip: true },
  { src: "kava2.png", size: 44, x: "16%", y: "64%", rot: -140, flip: false },
  { src: "kava3.png", size: 56, x: "82%", y: "62%", rot: 20, flip: true },
  { src: "kava4.png", size: 48, x: "40%", y: "72%", rot: -52, flip: false },
  { src: "kava1.png", size: 70, x: "68%", y: "76%", rot: 114, flip: true },
  { src: "kava5.png", size: 36, x: "6%", y: "82%", rot: 240, flip: false },
  { src: "kava2.png", size: 62, x: "26%", y: "88%", rot: -30, flip: true },
  { src: "kava3.png", size: 46, x: "56%", y: "90%", rot: 160, flip: false },
  { src: "kava4.png", size: 54, x: "88%", y: "90%", rot: -110, flip: true },
];

export default function CoffeeScatter() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-[1] overflow-hidden select-none"
    >
      {GRAINS.map((g, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            left: g.x,
            top: g.y,
            width: g.size,
            height: g.size,
            transform: `rotate(${g.rot}deg) scaleX(${g.flip ? -1 : 1})`,
            transformOrigin: "center",
          }}
        >
          <Image
            src={asset(`/images/${g.src}`)}
            alt=""
            width={g.size}
            height={g.size}
            className="object-contain drop-shadow-[0_4px_6px_rgba(26,23,21,0.18)]"
            unoptimized
            draggable={false}
          />
        </div>
      ))}
    </div>
  );
}
