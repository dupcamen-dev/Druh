"use client";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import FlyIn from "@/components/FlyIn";
import { PinIcon, PhoneIcon, ClockIcon, ScooterIcon, BoxIcon, HandIcon } from "@/components/OutlineIcons";
import Kramnychka from "@/components/Kramnychka";
import { BRAND } from "@/data/brand";
import { asset } from "@/lib/base";

const MARQUEE = [
  "Breakfast all day", "Homemade cinnabons", "Ramen & burgers",
  "Yakitori grill", "Matcha bar", "Specialty coffee",
  "Premium teas", "Cocktails", "Bowls", "Little shop",
];

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#2596be]">
      <div className="hero-enter relative z-10 text-center w-full max-w-[900px] mx-auto px-5 sm:px-8">

        <h1 className="font-display font-extrabold text-white leading-[1.0] mb-8 tracking-tight" style={{ fontSize: "clamp(3rem, 9vw, 6rem)" }}>
          Where every guest<br />
          is a <span className="text-[#ebe859]">friend</span>
        </h1>

        <p className="font-hand text-white/80 mb-12 max-w-md mx-auto leading-snug" style={{ fontSize: "clamp(1.2rem, 3vw, 1.6rem)" }}>
          Come as a guest, leave as a friend
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href={asset("/menu/druh-menu-en.pdf")} target="_blank" rel="noopener" className="group shine inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-lg bg-[#ebe859] text-[#1A1715] font-bold text-[14px] uppercase tracking-wider hover:bg-white transition-colors active:scale-95">
            Browse the menu
            <svg className="transition-transform duration-300 group-hover:translate-x-1" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </a>
          <a href="#story" className="shine inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-lg border-2 border-white text-white font-bold text-[14px] uppercase tracking-wider hover:bg-white hover:text-[#2596be] transition-colors active:scale-95">
            Read our story
          </a>
        </div>
      </div>
    </section>
  );
}

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

function Story() {
  return (
    <section id="story" className="py-16 lg:py-32 px-5 sm:px-8 lg:px-10 bg-white">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <Reveal variant="left">
          <span className="inline-block font-hand text-xl text-[#2596be] mb-3">About us</span>
          <h2 className="font-display font-bold text-[#1A1715] leading-[1.1] mb-8 tracking-tight" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
            After all, a friend is exactly what you call a person who feels at home.
          </h2>
          <p className="text-[#555] text-[15px] leading-[1.8] mb-8 max-w-[480px]">
            We bake our own bread and cinnabons fresh every morning. Our specialty coffee
            comes from carefully selected roasters, our matcha and teas are sourced directly from
            Japan and China, and our seasonal dishes feature the best local produce. At Druh,
            we cook everything from scratch — because friends deserve nothing less.
          </p>
        </Reveal>

        <FlyIn className="w-full">
          <Image
            src={asset("/images/story-new.png")}
            alt="Inside Druh"
            width={1274}
            height={1235}
            className="w-full h-auto drop-shadow-[0_25px_35px_rgba(26,23,21,0.25)]"
          />
        </FlyIn>
      </div>
    </section>
  );
}

function PdfBanner() {
  return (
    <section className="py-16 lg:py-28 px-5 sm:px-8 lg:px-10 bg-[#ebe859]">
      <Reveal className="max-w-[600px] mx-auto text-center text-[#1A1715]">
        <h2 className="font-display font-bold mb-4 tracking-tight" style={{ fontSize: "clamp(1.5rem, 4vw, 2.2rem)" }}>Take the menu with you</h2>
        <p className="text-[#1A1715]/70 text-[15px] mb-8 max-w-md mx-auto leading-relaxed">
          Our full menu is a beautifully designed PDF — open it to browse everything, anytime.
        </p>
        <a href={asset("/menu/druh-menu-en.pdf")} target="_blank" rel="noopener" className="group shine inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-lg bg-[#1A1715] text-[#ebe859] font-bold text-[14px] uppercase tracking-wider hover:bg-[#2596be] hover:text-white transition-colors active:scale-95">
          Open menu (PDF)
          <svg className="transition-transform duration-300 group-hover:translate-x-1" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square"><path d="M18 8l4 4-4 4M6 20V11a1 1 0 0 1 1-1h11"/></svg>
        </a>
      </Reveal>
    </section>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="py-16 lg:py-32 px-5 sm:px-8 lg:px-10">
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <div className="text-center mb-12">
            <span className="inline-block font-hand text-xl text-[#2596be] mb-3">Gallery</span>
            <h2 className="font-display font-bold text-[#1A1715] mb-4 tracking-tight" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
              Moments at Druh
            </h2>
            <p className="text-[#555] text-[15px]">
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
    <section id="visit" className="py-16 lg:py-32 px-5 sm:px-8 lg:px-10 bg-[#2596be]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        <Reveal variant="left">
          <span className="inline-block font-hand text-xl text-[#ebe859] mb-3">Visit us</span>
          <h2 className="font-display font-bold text-white leading-[1.1] mb-10 tracking-tight" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
            Come say hello
          </h2>
          <div className="space-y-8">
            {[
              { icon: PinIcon, label: "Address", content: (
                <>
                  <p className="text-white/80 text-[15px]">{BRAND.addressFull}</p>
                  <a href="https://maps.google.com/?q=Druh+Cafe+Ternopil+15+Kvitnia+2" target="_blank" rel="noopener" className="text-[13px] text-[#ebe859] font-bold underline-anim mt-1 inline-block py-1">Open in Google Maps</a>
                </>
              )},
              { icon: PhoneIcon, label: "Call us", content: (
                <a href={`tel:${BRAND.phoneLink}`} className="text-white/80 text-[15px] hover:text-[#ebe859] transition-colors inline-block py-1">{BRAND.phone}</a>
              )},
              { icon: ClockIcon, label: "Opening hours", content: (
                <>
                  <p className="text-white/80 text-[15px]">Mon–Fri: {BRAND.hours.weekdays}</p>
                  <p className="text-white/80 text-[15px]">Sat–Sun: {BRAND.hours.weekends}</p>
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

        <Reveal variant="right" delay={100}>
          <Reveal variant="stagger" as="div" className="space-y-4">
              {[
                { icon: ScooterIcon, title: "Delivery", desc: "Via Bolt Food & Glovo" },
                { icon: BoxIcon, title: "Takeaway", desc: "Order ahead via our online menu" },
                { icon: HandIcon, title: "Reservations", desc: "Call us to reserve a table" },
              ].map((c) => (
                <div key={c.title} className="card-lift bg-white/10 hover:bg-white/15 p-6 flex items-start gap-5 rounded-lg transition-colors">
                  <c.icon className="shrink-0 mt-0.5" size={32} />
                  <div>
                    <h4 className="font-display font-bold text-white text-[14px] mb-1">{c.title}</h4>
                    <p className="text-[13px] text-white/60">{c.desc}</p>
                  </div>
                </div>
              ))}
              <a href={BRAND.socials.instagram} target="_blank" rel="noopener" className="card-lift block bg-[#ebe859] text-[#1A1715] p-6 text-center hover:bg-[#59eb59] transition-colors rounded-lg active:scale-[0.98]">
                <p className="font-display font-bold text-[16px]">Follow @druh.cafe</p>
                <p className="text-[#1A1715]/60 text-[13px] mt-1">Daily specials & behind the scenes</p>
              </a>
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
      <Story />
      <PdfBanner />
      <Gallery />
      <VisitUs />
    </main>
  );
}
