"use client";
import { useEffect, useRef, useState } from "react";
import {
  useReducedMotion,
  useScroll,
  useMotionValueEvent,
  LazyMotion,
  domAnimation,
  m,
} from "motion/react";
import { asset } from "@/lib/base";

const SCRUB_FPS = 24;
const SCRUB_FRAMES = 56;

export default function Hero() {
  const reduced = useReducedMotion() ?? false;

  /* false on server AND during hydration, true after first frame → entry animations
     only run client-side after styles match between server markup and the client */
  const [started, setStarted] = useState(false);
  useEffect(() => {
    requestAnimationFrame(() => setStarted(true));
  }, []);

  /* 300vh sticky track: the video scrubs through all frames over the pinned
     scroll range, and the next section only arrives once the track is finished */
  const trackRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  const entered = useRef(false);
  const lastFrame = useRef(-1);
  useMotionValueEvent(scrollYProgress, "change", (p) => {
    const v = videoRef.current;
    if (!v) return;
    if (!entered.current) {
      if (v.readyState < 2) return;
      entered.current = true;
    }
    const clamp = Math.max(0, Math.min(1, p));
    const frame = Math.min(SCRUB_FRAMES - 1, Math.round(clamp * (SCRUB_FRAMES - 1)));
    if (frame === lastFrame.current) return;
    lastFrame.current = frame;
    try {
      v.currentTime = frame / SCRUB_FPS;
    } catch {
      /* ignore seek errors (e.g. iOS while paused) */
    }
  });

  const enter = (delay: number) => ({
    initial: false,
    animate: started ? { opacity: 1, y: 0 } : { opacity: 0, y: 26 },
    transition: {
      delay: reduced ? 0 : delay,
      duration: reduced ? 0 : 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  });

  return (
    <LazyMotion features={domAnimation} strict>
    <section id="hero" aria-label="Druh — where every guest is a friend" className="hero-stage">
      <div ref={trackRef} className="hero-track">
        <div className="hero-pin">
          {/* scroll-scrubbed background video (muted, user-driven currentTime) */}
          <video
            ref={videoRef}
            className="hero-video"
            src={asset("/videos/hero-scrub.mp4")}
            poster={asset("/images/hero-scrub-poster.jpg")}
            muted
            playsInline
            preload="auto"
            tabIndex={-1}
            aria-hidden
          />

          {/* headline block */}
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
        </div>
      </div>

      {/* top fade into header area */}
      <div aria-hidden className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#0a4a57]/70 to-transparent pointer-events-none" />
    </section>
    </LazyMotion>
  );
}