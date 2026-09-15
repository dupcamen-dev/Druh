"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  useReducedMotion,
  useScroll,
  useTransform,
  LazyMotion,
  domAnimation,
  m,
} from "motion/react";
import { asset } from "@/lib/base";

/* easeSmoothOut: quick-ish start but a long decelerating tail, so the
     composition settles over many scroll steps instead of one big jump —
     "slow the whole composition down" */
const easeSmoothOut = (t: number) => 1 - Math.pow(1 - t, 2.2);

export default function Hero() {
  const reduced = useReducedMotion() ?? false;
  const heroRef = useRef<HTMLElement>(null);

  const [started, setStarted] = useState(false);
  useEffect(() => {
    requestAnimationFrame(() => setStarted(true));
  }, []);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"],
  });

  /* elements finish at 80% of the track's scroll range; the remaining
     20% is "empty scroll" so the page pauses before the next section.
     easeSmoothOut spreads the motion across many small wheel steps —
     the composition glides slowly instead of jumping in one scroll */
  const comp = useTransform(scrollYProgress, (v) => {
    const t = Math.min(1, Math.max(0, v / 0.8));
    return easeSmoothOut(t);
  });

  /* ── ramen bowl: bottom-left → diagonal upward, enters 110% ── */
  const bowlX   = useTransform(comp, [0, 1], ["-110%", "10%"]);
  const bowlY   = useTransform(comp, [0, 1], ["40vh", "24vh"]);
  const bowlRot = useTransform(comp, [0, 1], [-8, 0]);
  const bowlSc  = useTransform(comp, [0, 1], [1.2, 1.35]);

  /* ── chopsticks: top-right → diagonal in (mirrored, same speed) ── */
  const stX   = useTransform(comp, [0, 1], ["110%", "-1%"]);
  const stY   = useTransform(comp, [0, 1], ["-10vh", "16vh"]);
  const stRot = useTransform(comp, [0, 1], [8, 0]);
  const stSc  = useTransform(comp, [0, 1], [1.4, 1.7]);

  /* ── parsley leaf: flies in diagonally, stops left of center ── */
  const plX = useTransform(comp, [0, 1], ["-120vw", "-12vw"]);
  const plY = useTransform(comp, [0, 1], ["-20vh", "0vh"]);

  /* ── lime: behind pepper, flies in from right → left ── */
  const lmX = useTransform(comp, [0, 1], ["30vw", "4vw"]);
  const lmY = useTransform(comp, [0, 1], ["10vh", "0vh"]);

  /* ── pepper: short hop from outside the right edge, bottom-up diagonal ── */
  const ppX = useTransform(comp, [0, 1], ["30vw", "-4vw"]);
  const ppY = useTransform(comp, [0, 1], ["10vh", "0vh"]);

  const enter = (delay: number) => ({
    initial: false,
    animate: started ? { opacity: 1, y: 0 } : { opacity: 0, y: 26 },
    transition: {
      delay: reduced ? 0 : delay,
      duration: reduced ? 0 : 1.5,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  });

  return (
    <LazyMotion features={domAnimation} strict>
      <section id="hero" ref={heroRef} aria-label="Druh — where every guest is a friend" className="hero-stage">
        <div className="hero-track">
          <div className="hero-pin">
            <div aria-hidden className="hero-bg" />

            {/* ── parsley leaf (bottom-right of bowl) ── */}
            <m.div
              style={{ x: plX, y: plY }}
              aria-hidden
              className="hero-parsley pointer-events-none select-none"
            >
              <Image
                src={asset("/images/parsley.png")}
                alt=""
                width={140}
                height={180}
                draggable={false}
                className="block w-full h-auto drop-shadow-[0_8px_24px_rgba(0,0,0,0.25)]"
              />
            </m.div>

            {/* ── ramen bowl (on top of parsley, z-[2]) ── */}
            <m.div
              style={{ x: bowlX, y: bowlY, rotate: bowlRot, scale: bowlSc }}
              aria-hidden
              className="hero-ramen pointer-events-none select-none"
            >
              <Image
                src={asset("/images/ramen.png")}
                alt=""
                width={840}
                height={840}
                priority
                draggable={false}
                className="block w-full h-auto drop-shadow-[0_12px_40px_rgba(0,0,0,0.35)]"
              />
            </m.div>

            {/* ── lime (behind chopsticks, z-[2]) ── */}
            <m.div
              style={{ x: lmX, y: lmY }}
              aria-hidden
              className="hero-lime pointer-events-none select-none"
            >
              <Image
                src={asset("/images/lime.png")}
                alt=""
                width={584}
                height={436}
                draggable={false}
                className="block w-full h-auto drop-shadow-[0_8px_24px_rgba(0,0,0,0.25)]"
              />
            </m.div>

            {/* ── chopsticks (from right, z-[3]) ── */}
            <m.div
              style={{ x: stX, y: stY, rotate: stRot, scale: stSc }}
              aria-hidden
              className="hero-chopsticks pointer-events-none select-none"
            >
              <Image
                src={asset("/images/chopsticks.png")}
                alt=""
                width={696}
                height={937}
                draggable={false}
                className="block w-full h-auto drop-shadow-[0_8px_28px_rgba(0,0,0,0.3)]"
              />
            </m.div>

            {/* ── pepper (in front of chopsticks, z-[4]) ── */}
            <m.div
              style={{ x: ppX, y: ppY }}
              aria-hidden
              className="hero-pepper pointer-events-none select-none"
            >
              <Image
                src={asset("/images/pepper.png")}
                alt=""
                width={197}
                height={316}
                draggable={false}
                className="block w-full h-auto drop-shadow-[0_8px_24px_rgba(0,0,0,0.25)]"
              />
            </m.div>

            {/* ── headline block ── */}
            <div suppressHydrationWarning className="relative z-10 w-full max-w-[1100px] mx-auto px-5 sm:px-8 text-center pt-16 pb-24">
              <div>
                <m.p {...enter(0.35)} className="font-hand text-yellow-light text-[clamp(1.05rem,2.2vw,1.45rem)] mb-5 tracking-wide">
                  where every guest is a friend
                </m.p>

                <h1 className="font-display font-extrabold uppercase text-white drop-shadow-[0_6px_28px_rgba(4,28,34,0.45)] leading-[0.98]">
                  <m.span {...enter(0.5)} className="block tracking-tight" style={{ fontSize: "clamp(1.9rem, 6.2vw, 4.6rem)" }}>
                    where every guest
                  </m.span>
                  <m.span {...enter(0.62)} className="block mt-1 text-white/85 tracking-[0.06em]" style={{ fontSize: "clamp(1.1rem, 3.2vw, 2.1rem)" }}>
                    is a
                  </m.span>
                  <span className="block leading-none">
                    <m.span {...enter(0.74)} className="relative inline-block font-hand font-bold text-yellow mt-2" style={{ fontSize: "clamp(4.2rem, 13vw, 9.5rem)", lineHeight: 0.95 }}>
                      friend
                    </m.span>
                  </span>
                </h1>

                <m.p {...enter(0.9)} className="font-hand text-white/90 mt-7 mx-auto leading-snug" style={{ fontSize: "clamp(1.2rem, 2.6vw, 1.7rem)" }}>
                  Bold Asian flavors, shared around one table.
                </m.p>
              </div>

              <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
                <m.a
                  {...enter(1.05)}
                  href={asset("/menu/druh-menu-en.pdf")}
                  target="_blank"
                  rel="noopener"
                  className="group shine btn btn--yellow"
                >
                  Browse the menu
                </m.a>
                <m.a {...enter(1.18)} href="#asian" className="shine btn btn--outline-light">
                  Explore the kitchen
                </m.a>
              </div>
            </div>

            <div aria-hidden className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#0a4a57]/70 to-transparent pointer-events-none" />
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}