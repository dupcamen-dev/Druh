"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Reveal from "@/components/Reveal";
import { BRAND } from "@/data/brand";
import { asset } from "@/lib/base";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { BorderBeam } from "@/components/ui/border-beam";
import { NumberTicker } from "@/components/ui/number-ticker";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { TextReveal } from "@/components/ui/text-reveal";

/* -------------------------------------------------------------------------- */
/*  Hero                                                                      */
/* -------------------------------------------------------------------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#1A1715] pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* left copy */}
        <Reveal variant="up">
          <span className="eyebrow eyebrow--on-dark">
            About Druh
          </span>
          <h1
            className="font-display font-extrabold text-white leading-[1.05] mb-6 tracking-tight"
            style={{ fontSize: "clamp(2.4rem, 5.5vw, 3.6rem)" }}
          >
            Come as a guest,<br />leave as a{" "}
            <AnimatedGradientText colorFrom="#ebe859" colorTo="#187492">
              friend
            </AnimatedGradientText>
          </h1>
          <p className="lead lead--white max-w-lg mb-10">
            A corner of Ternopil where mornings last all day, the broth bubbles since sunrise, and
            every seat comes with a smile.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#story"
              className="shine btn btn--blue"
            >
              Read our story
            </a>
            <a
              href={asset("/menu/druh-menu-en.pdf")}
              target="_blank"
              rel="noopener"
              className="btn btn--outline-light-soft"
            >
              See the menu
            </a>
          </div>
        </Reveal>

        {/* right image collage */}
        <Reveal variant="scale" className="relative mx-auto w-full max-w-[500px] h-[320px] sm:h-[360px] lg:h-[420px]">
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: -4 }}
            className="absolute left-0 bottom-0 z-10 w-[60%] sm:w-[55%] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10"
          >
            <Image
              src={asset("/images/hero-7.jpg")}
              alt="Druh coffee and matcha"
              width={480}
              height={340}
              className="h-auto w-full object-cover"
              priority
            />
          </motion.div>
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 5 }}
            className="absolute right-0 top-0 z-20 w-[60%] sm:w-[55%] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10"
          >
            <Image
              src={asset("/images/hero-4.jpg")}
              alt="Dish from Druh"
              width={480}
              height={340}
              className="h-auto w-full object-cover"
              priority
            />
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Stats                                                                      */
/* -------------------------------------------------------------------------- */
function Stats() {
  const items = [
    { val: 24, label: "Specialty drinks" },
    { val: 30, label: "Dishes on the menu", suffix: "+" },
    { val: 100, label: "Percent homemade", suffix: "%" },
    { val: 4.9, label: "Average rating", decimals: 1 },
  ];

  return (
    <section className="py-12 lg:py-14 bg-[#ebe859]">
      <div className="max-w-[1000px] mx-auto px-5 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {items.map((s, i) => (
          <Reveal key={s.label} variant="up" className="flex flex-col items-center gap-1">
            <div className="flex items-baseline gap-1">
              <NumberTicker
                value={s.val}
                delay={i * 0.15}
                decimalPlaces={s.decimals ?? 0}
                className="font-display font-extrabold text-[#1A1715] text-3xl sm:text-4xl"
              />
              {s.suffix && (
                <span className="font-display font-extrabold text-[#1A1715] text-3xl sm:text-4xl">{s.suffix}</span>
              )}
            </div>
            <span className="font-display font-bold text-[#1A1715]/70 text-[12px] uppercase tracking-[0.12em]">
              {s.label}
            </span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Story                                                                      */
/* -------------------------------------------------------------------------- */
function Story() {
  return (
    <section id="story" className="py-16 lg:py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* image collage */}
        <Reveal variant="left" className="relative h-[260px] sm:h-[320px] lg:h-[380px]">
          <div className="absolute left-0 bottom-0 z-10 w-[58%] overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5">
            <Image
              src={asset("/images/hero-5.jpg")}
              alt="Interior at Druh"
              width={520}
              height={340}
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="absolute right-0 top-0 z-20 w-[55%] overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5 rotate-2">
            <Image
              src={asset("/images/story-new.png")}
              alt="About Druh"
              width={480}
              height={480}
              className="h-auto w-full object-contain"
            />
          </div>
        </Reveal>

        {/* copy */}
        <Reveal variant="right">
          <span className="eyebrow">
            Our story
          </span>
          <h2
            className="h-section"
          >
            A place where strangers become friends
          </h2>
          <div className="space-y-4 text-[15px] text-[#555] leading-[1.8]">
            <p>
              DRUH was born from the simple belief that a café should feel like home.
              Tucked away on a quiet street in Ternopil, we opened our doors for mornings that never
              seem to end, bowls of broth that warm you from the inside, and a little shop where
              you can take a piece of that warmth with you.
            </p>
            <p>
              Whether you&apos;re grabbing a flat white before work, exploring our
              Japanese-inspired plates, or lingering over a cinnabon with friends — every guest is
              exactly that: a friend.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Manifesto (scroll reveal)                                                  */
/* -------------------------------------------------------------------------- */
function Manifesto() {
  return (
    <section className="py-16 lg:py-32 bg-[#FDFAF7]">
      <div className="max-w-[900px] mx-auto px-5 sm:px-8 lg:px-10">
        <TextReveal>
          A café should feel like coming home — where the barista knows your order, the ramen
          bubbles since morning, and everyone leaves a little lighter.
        </TextReveal>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Values Bento                                                               */
/* -------------------------------------------------------------------------- */
function Values() {
  return (
    <section id="values" className="py-16 lg:py-32 bg-[#FDFAF7]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10">
        <Reveal className="section-head">
          <span className="eyebrow">
            What we stand for
          </span>
          <h2
            className="h-section"
          >
            Small things, done right
          </h2>
          <p className="lead">
            Every detail on the menu is a choice — honest ingredients, time, and care.
          </p>
        </Reveal>

        <BentoGrid className="md:auto-rows-[18rem]">
          <BentoCard
            name="Breakfast, all day"
            className="md:col-span-2 bg-gradient-to-br from-[#ebe859]/20 to-transparent"
            background={
              <div className="absolute inset-0 bg-[url('/images/dish-cinnabon-nectarine.jpg')] bg-cover bg-center opacity-20 mix-blend-multiply" />
            }
            icon={<span>🍳</span>}
            description="Fluffy pancakes, syrnyky and eggs — available from open to close."
            href={asset("/menu/druh-menu-en.pdf")}
            cta="See breakfasts"
          />

          <BentoCard
            name="Home-cooked & honest"
            icon={<span>🏠</span>}
            description="Every recipe on the menu is made from scratch, using seasonal and local ingredients."
            className="bg-white"
          />

          <BentoCard
            name="Tokyo street food"
            icon={<span>🍜</span>}
            description="Ramen, yakitori and onigiri — transported straight from Osaka and Tokyo's alleyways."
            className="bg-white"
          />

          <BentoCard
            name="Little shop"
            icon={<span>🛒</span>}
            description="Packaged coffee from roasters we love, matcha kits, and handmade treats to take home."
            className="bg-white"
          />

          {/* card with border beam */}
          <div className="relative overflow-hidden rounded-2xl md:col-span-1">
            <BorderBeam
              colorFrom="#ebe859"
              colorTo="#187492"
              size={80}
              duration={4}
              className="rounded-2xl"
            />
            <BentoCard
              name="Friendly, always"
              icon={<span>💛</span>}
              description="Because the best meals are shared with the best people."
              className="bg-white"
            />
          </div>
        </BentoGrid>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Find Us                                                                     */
/* -------------------------------------------------------------------------- */
function FindUs() {
  return (
    <section id="find" className="py-16 lg:py-32 bg-[#187492]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        <Reveal variant="up">
          <span className="eyebrow eyebrow--yellow">Find us</span>
          <h3 className="h-sub text-white">{BRAND.name}</h3>
          <p className="text-white/90 text-[15px] leading-relaxed">{BRAND.addressFull}</p>
        </Reveal>

        <Reveal variant="up">
          <span className="eyebrow eyebrow--yellow">Opening hours</span>
          <div className="text-white/90 text-[15px] leading-relaxed space-y-1">
            <p>Mon – Fri: {BRAND.hours.weekdays}</p>
            <p>Sat – Sun: {BRAND.hours.weekends}</p>
          </div>
        </Reveal>

        <Reveal variant="up">
          <span className="eyebrow eyebrow--yellow">Say hello</span>
          <div className="space-y-2">
            <a href={`tel:${BRAND.phoneLink}`} className="block text-white/90 text-[15px] hover:text-white transition-colors">
              {BRAND.phone}
            </a>
            <a href={BRAND.socials.instagram} target="_blank" rel="noopener" className="block text-white/90 text-[15px] hover:text-white transition-colors">
              Instagram
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  CTA                                                                        */
/* -------------------------------------------------------------------------- */
function CTA() {
  return (
    <section className="py-16 lg:py-32 bg-[#ebe859]">
      <Reveal className="max-w-[700px] mx-auto px-5 text-center">
        <h2
          className="h-section"
        >
          Ready to take a seat?
        </h2>
        <p className="lead lead--soft mb-10 max-w-lg mx-auto">
          Browse the full menu, drop by for a matcha, or grab a bag of our house-roasted coffee to go.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={asset("/menu/druh-menu-en.pdf")}
            target="_blank"
            rel="noopener"
            className="shine btn btn--dark"
          >
            Open the menu
          </a>
          <a
            href={BRAND.socials.instagram}
            target="_blank"
            rel="noopener"
            className="btn btn--outline-dark"
          >
            Follow us
          </a>
        </div>
      </Reveal>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Page                                                                        */
/* -------------------------------------------------------------------------- */
export default function AboutPage() {
  return (
    <main className="flex-1">
      <Hero />
      <Stats />
      <Story />
      <Manifesto />
      <Values />
      <FindUs />
      <CTA />
    </main>
  );
}