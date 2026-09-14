"use client";
import Image from "next/image";
import { motion } from "motion/react";
import Reveal, { STAGGER_CHILD } from "@/components/Reveal";
import { PinIcon, PhoneIcon, ClockIcon, ScooterIcon, BoxIcon, HandIcon } from "@/components/OutlineIcons";
import Kramnychka from "@/components/Kramnychka";
import AsianKitchen from "@/components/AsianKitchen";
import Hero from "@/components/hero/Hero";
import { BRAND } from "@/data/brand";
import { asset } from "@/lib/base";

const MARQUEE = [
  "Breakfast all day", "Homemade cinnabons", "Ramen & burgers",
  "Yakitori grill", "Matcha bar", "Specialty coffee",
  "Premium teas", "Cocktails", "Bowls", "Little shop",
];

function Marquee() {
  const items = [...MARQUEE, ...MARQUEE, ...MARQUEE];
  return (
    <section className="py-4 bg-[#ebe859] overflow-hidden">
      <div className="marquee-wrap">
        <div className="marquee-track">
          {items.map((item, i) => (
            <span key={i} className="flex items-center gap-5 px-5 whitespace-nowrap">
              <span className="font-display text-[12px] font-bold uppercase tracking-[0.18em] text-[#1A1715]">{item}</span>
              <span className="w-1 h-1 bg-[#1A1715] shrink-0" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function PdfBanner() {
  return (
    <section className="py-16 lg:py-32 px-5 sm:px-8 lg:px-10 bg-[#ebe859]">
      <Reveal className="max-w-[600px] mx-auto text-center text-[#1A1715]">
        <h2 className="h-section">Take the menu with you</h2>
        <p className="lead mb-8 max-w-md mx-auto">
          Our full menu is a beautifully designed PDF — open it to browse everything, anytime.
        </p>
        <a href={asset("/menu/druh-menu-en.pdf")} target="_blank" rel="noopener" className="group shine btn btn--dark">
          Open menu (PDF)
          <svg className="transition-transform duration-300 group-hover:translate-x-1" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square"><path d="M18 8l4 4-4 4M6 20V11a1 1 0 0 1 1-1h11"/></svg>
        </a>
      </Reveal>
    </section>
  );
}

/* ---- Our story teaser ---- */
function StoryTeaser() {
  return (
    <section className="py-16 lg:py-32 bg-[#1A1715]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <Reveal variant="up">
          <span className="eyebrow eyebrow--on-dark">
            Our story
          </span>
          <h2
            className="h-section text-white"
          >
            A place where strangers<br className="hidden sm:block" /> become friends
          </h2>
          <p className="text-white/70 text-[15px] leading-[1.8] max-w-lg mb-10">
            A café should feel like home — mornings that never seem to end, broth that warms you
            from the inside, and a little shop to take that warmth with you.
          </p>
          <a href={asset("/about")} className="shine btn btn--yellow">
            Read our story
          </a>
        </Reveal>

        <Reveal variant="scale" className="relative mx-auto w-full max-w-[480px]">
          <div className="overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10 rotate-2 bg-white">
            <Image
              src={asset("/images/story-new.png")}
              alt="About Druh"
              width={480}
              height={480}
              className="h-auto w-full object-contain"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="py-16 lg:py-32 px-5 sm:px-8 lg:px-10">
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">Gallery</span>
            <h2 className="h-section">
              Moments at Druh
            </h2>
            <p className="lead">
              Follow us on{" "}
              <a href={BRAND.socials.instagram} className="underline-anim font-bold" target="_blank" rel="noopener">
                @druh.cafe
              </a>
            </p>
          </div>
        </Reveal>

        <Reveal variant="scale">
          <div className="gallery-grid">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n, i) => (
              <div
                key={n}
                className="group relative overflow-hidden"
                style={{ aspectRatio: "1/1", borderRadius: "0.5rem" }}
              >
                <Image
                  src={asset(`/images/gallery-${String(n).padStart(2, "0")}.jpg`)}
                  alt={`Druh ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-[#1A1715]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                <span className="absolute bottom-3 left-3 font-display text-[11px] font-bold uppercase tracking-[0.15em] text-white translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  Moment {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function VisitUs() {
  return (
    <section id="visit" className="py-16 lg:py-32 px-5 sm:px-8 lg:px-10 bg-[#187492]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        <Reveal variant="left">
          <span className="eyebrow eyebrow--yellow">Visit us</span>
          <h2 className="h-section text-white">
            Come say hello
          </h2>
          <div className="space-y-8">
            {[
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
            ].map((c) => (
              <div key={c.label} className="flex items-start gap-5">
                <c.icon className="mt-0.5 shrink-0" size={28} />
                <div>
                  <h4 className="font-display font-bold text-white text-[12px] uppercase tracking-[0.12em] mb-1.5">{c.label}</h4>
                  {c.content}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal variant="right">
          <Reveal variant="stagger" className="space-y-4">
            {[
                { icon: ScooterIcon, title: "Delivery", desc: "Via Bolt Food & Glovo" },
                { icon: BoxIcon, title: "Takeaway", desc: "Order ahead via our online menu" },
                { icon: HandIcon, title: "Reservations", desc: "Call us to reserve a table" },
              ].map((c) => (
                <motion.div key={c.title} variants={STAGGER_CHILD} className="card-lift bg-black/10 hover:bg-white/10 p-6 flex items-start gap-5 rounded-lg transition-colors">
                  <c.icon className="shrink-0 mt-0.5" size={32} />
                  <div>
                    <h4 className="font-display font-bold text-white text-[14px] mb-1">{c.title}</h4>
                    <p className="text-[13px] text-white/90">{c.desc}</p>
                  </div>
                </motion.div>
              ))}
              <motion.a variants={STAGGER_CHILD} href={BRAND.socials.instagram} target="_blank" rel="noopener" className="card-lift block bg-[#ebe859] text-[#1A1715] p-6 text-center hover:bg-[#59eb59] transition-colors rounded-lg active:scale-[0.98]">
                <p className="font-display font-bold text-[16px]">Follow @druh.cafe</p>
                <p className="text-[#1A1715]/80 text-[13px] mt-1">Daily specials & behind the scenes</p>
              </motion.a>
          </Reveal>
        </Reveal>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <main className="flex-1">
      <Hero />
      <Marquee />
      <Kramnychka />
      <AsianKitchen />
      <PdfBanner />
      <StoryTeaser />
      <Gallery />
      <VisitUs />
    </main>
  );
}
