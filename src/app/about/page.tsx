"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Reveal, { STAGGER_CHILD } from "@/components/Reveal";
import { BRAND } from "@/data/brand";
import { asset } from "@/lib/base";
import { PinIcon, PhoneIcon, ClockIcon, ScooterIcon, BoxIcon, HandIcon } from "@/components/OutlineIcons";
import { NumberTicker } from "@/components/ui/number-ticker";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";

/* -------------------------------------------------------------------------- */
/*  Hero                                                                      */
/* -------------------------------------------------------------------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#187492] pt-28 pb-20 lg:pt-36 lg:pb-28">
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
            className="absolute left-0 bottom-0 z-10 w-[60%] sm:w-[55%] overflow-hidden rounded-xl shadow-2xl ring-1 ring-white/10"
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
            className="absolute right-0 top-0 z-20 w-[60%] sm:w-[55%] overflow-hidden rounded-xl shadow-2xl ring-1 ring-white/10"
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
    <section id="story" className="py-16 lg:py-32 bg-[#187492]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* image collage */}
        <Reveal variant="left" className="relative h-[260px] sm:h-[320px] lg:h-[380px]">
          <div className="absolute left-0 bottom-0 z-10 w-[58%] overflow-hidden rounded-xl shadow-xl ring-1 ring-white/10">
            <Image
              src={asset("/images/hero-5.jpg")}
              alt="Interior at Druh"
              width={520}
              height={340}
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="absolute right-0 top-0 z-20 w-[55%] overflow-hidden rounded-xl shadow-xl ring-1 ring-white/10 rotate-2">
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
          <span className="eyebrow eyebrow--yellow">
            Our story
          </span>
          <h2
            className="h-section text-[#F5EFE6]"
          >
            A place where strangers become friends
          </h2>
          <div className="space-y-4 text-[15px] leading-[1.8]" style={{ color: "rgba(245,239,230,0.55)" }}>
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
/*  Find Us                                                                     */
/* -------------------------------------------------------------------------- */
function FindUs() {
  const contactItems = [
    { icon: PinIcon, label: "Address", content: (
      <>
        <p className="text-white/90 text-[15px]">{BRAND.addressFull}</p>
        <a href="https://maps.google.com/?q=Druh+Cafe+Ternopil+15+Kvitnia+2" target="_blank" rel="noopener" className="text-[13px] text-[var(--yellow-light)] font-bold underline-anim mt-1 inline-block py-1">Open in Google Maps</a>
      </>
    )},
    { icon: PhoneIcon, label: "Call us", content: (
      <a href={`tel:${BRAND.phoneLink}`} className="text-white/90 text-[15px] hover:text-[#ebe859] transition-colors inline-block py-1">{BRAND.phone}</a>
    )},
    { icon: ClockIcon, label: "Opening hours", content: (
      <>
        <p className="text-white/90 text-[15px]">Mon–Fri: {BRAND.hours.weekdays}</p>
        <p className="text-white/90 text-[15px]">Sat–Sun: {BRAND.hours.weekends}</p>
      </>
    )},
  ];

  const serviceCards = [
    { icon: ScooterIcon, title: "Delivery", desc: "Via Bolt Food & Glovo" },
    { icon: BoxIcon, title: "Takeaway", desc: "Order ahead from our online menu" },
    { icon: HandIcon, title: "Reservations", desc: "Call us to reserve a table" },
  ];

  return (
    <section id="visit" className="relative z-[5] py-16 lg:py-32 px-5 sm:px-8 lg:px-10 bg-[#187492]">
      <div className="max-w-[1200px] mx-auto">
        <Reveal as="div" className="mb-10 lg:mb-14 text-center">
          <span className="eyebrow eyebrow--yellow">Visit us</span>
          <h2 className="h-section text-white">Come say hello</h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          <Reveal as="div" variant="left" className="lg:col-span-2">
            <div className="relative rounded-xl overflow-hidden border border-white/20 shadow-xl aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[380px]">
              <iframe
                title="Druh Cafe on Google Maps"
                src="https://maps.google.com/maps?q=Druh%20Cafe%2C%20vul.%2015-ho%20Kvitnia%202%2C%20Ternopil&t=k&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, width: "100%", height: "100%", minHeight: 260 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div aria-hidden className="pointer-events-none absolute inset-0 z-10 bg-black/10" />
            </div>
          </Reveal>

          <Reveal as="div" variant="right" className="flex flex-col justify-center bg-white/5 rounded-xl p-6 lg:p-8">
            <div className="space-y-6">
              {contactItems.map((c) => (
                <div key={c.label} className="flex items-start gap-4">
                  <c.icon className="mt-0.5 shrink-0" size={26} />
                  <div>
                    <h4 className="font-display font-bold text-white text-[12px] uppercase tracking-[0.12em] mb-1.5">{c.label}</h4>
                    {c.content}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal as="div" variant="stagger" className="mt-6 lg:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {serviceCards.map((c) => (
            <motion.div
              key={c.title}
              variants={STAGGER_CHILD}
              className="card-lift bg-black/10 hover:bg-white/10 p-5 rounded-xl flex items-start gap-4 transition-colors"
            >
              <c.icon className="shrink-0 mt-0.5" size={26} />
              <div>
                <h4 className="font-display font-bold text-white text-[13px] mb-1">{c.title}</h4>
                <p className="text-[12px] text-white/90">{c.desc}</p>
              </div>
            </motion.div>
          ))}
          <motion.a
            variants={STAGGER_CHILD}
            href={BRAND.socials.instagram}
            target="_blank"
            rel="noopener"
            className="card-lift block bg-[#ebe859] text-[#1A1715] p-5 text-center hover:bg-[#59eb59] transition-colors rounded-xl active:scale-[0.98]"
          >
            <p className="font-display font-bold text-[15px]">Follow @druh.cafe</p>
            <p className="text-[#1A1715]/80 text-[12px] mt-0.5">Daily specials & behind the scenes</p>
          </motion.a>
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
      <FindUs />
      <CTA />
    </main>
  );
}