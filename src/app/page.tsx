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
import { useLanguage } from "@/components/LanguageProvider";

const MARQUEE_KEYS = [
  "marquee.breakfast", "marquee.cinnabons", "marquee.ramen",
  "marquee.yakitori", "marquee.matcha", "marquee.coffee",
  "marquee.teas", "marquee.cocktails", "marquee.bowls", "marquee.shop",
];

function Marquee() {
  const { t } = useLanguage();
  const items = [...MARQUEE_KEYS, ...MARQUEE_KEYS, ...MARQUEE_KEYS].map((k) => t(k));
  return (
    <section className="relative z-[5] py-4 bg-[#ebe859] overflow-hidden">
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
  const { t } = useLanguage();
  return (
    <section className="relative z-[5] py-16 lg:py-32 px-5 sm:px-8 lg:px-10 bg-[#ebe859]">
      <Reveal className="max-w-[600px] mx-auto text-center text-[#1A1715]">
        <h2 className="h-section">{t("pdf.title")}</h2>
        <p className="lead mb-8 max-w-md mx-auto">
          {t("pdf.lead")}
        </p>
        <a href={asset("/menu/druh-menu-en.pdf")} target="_blank" rel="noopener" className="group shine btn btn--dark">
          {t("pdf.cta")}
          <svg className="transition-transform duration-300 group-hover:translate-x-1" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square"><path d="M18 8l4 4-4 4M6 20V11a1 1 0 0 1 1-1h11"/></svg>
        </a>
      </Reveal>
    </section>
  );
}

/* ---- Our story teaser ---- */
function StoryTeaser() {
  const { t } = useLanguage();
  return (
    <section className="relative z-[5] py-16 lg:py-32 bg-[#187492]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <Reveal variant="up">
          <span className="eyebrow eyebrow--yellow">
            {t("story.eyebrow")}
          </span>
          <h2
            className="h-section text-[#F5EFE6]"
          >
            {t("story.title")}
          </h2>
          <p className="text-[rgba(245,239,230,0.55)] text-[15px] leading-[1.8] max-w-lg mb-10">
            {t("story.lead")}
          </p>
          <a href={asset("/about")} className="shine btn btn--yellow">
            {t("story.cta")}
          </a>
        </Reveal>

        <Reveal variant="scale" className="relative mx-auto w-full max-w-[480px]">
          <div className="overflow-hidden rotate-2">
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
  const { t } = useLanguage();
  return (
    <section id="gallery" className="relative z-[5] py-16 lg:py-32 px-5 sm:px-8 lg:px-10 bg-[#187492] text-[#F5EFE6]">
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow eyebrow--yellow">{t("gallery.eyebrow")}</span>
            <h2 className="h-section">
              {t("gallery.title")}
            </h2>
            <p className="lead" style={{ color: "rgba(245,239,230,0.55)" }}>
              {t("gallery.lead")}{" "}
              <a href={BRAND.socials.instagram} className="underline-anim font-bold text-[#EAE7AE]" target="_blank" rel="noopener">
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
                style={{ aspectRatio: "1/1", borderRadius: "0.75rem" }}
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
                  {t("gallery.moment")} {String(i + 1).padStart(2, "0")}
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
  const { t } = useLanguage();
  const contactItems = [
    { icon: PinIcon, label: t("visit.address"), content: (
      <>
        <p className="text-white/90 text-[15px]">{BRAND.addressFull}</p>
        <a href="https://maps.google.com/?q=Druh+Cafe+Ternopil+15+Kvitnia+2" target="_blank" rel="noopener" className="text-[13px] text-[var(--yellow-light)] font-bold underline-anim mt-1 inline-block py-1">{t("visit.mapLink")}</a>
      </>
    )},
    { icon: PhoneIcon, label: t("visit.call"), content: (
      <a href={`tel:${BRAND.phoneLink}`} className="text-white/90 text-[15px] hover:text-[#ebe859] transition-colors inline-block py-1">{BRAND.phone}</a>
    )},
    { icon: ClockIcon, label: t("visit.hours"), content: (
      <>
        <p className="text-white/90 text-[15px]">{t("visit.monFri")} {BRAND.hours.weekdays}</p>
        <p className="text-white/90 text-[15px]">{t("visit.satSun")} {BRAND.hours.weekends}</p>
      </>
    )},
  ];

  const serviceCards = [
    { icon: ScooterIcon, title: t("visit.deliveryTitle"), desc: t("visit.deliveryDesc") },
    { icon: BoxIcon, title: t("visit.takeawayTitle"), desc: t("visit.takeawayDesc") },
    { icon: HandIcon, title: t("visit.reservationTitle"), desc: t("visit.reservationDesc") },
  ];

  return (
    <section id="visit" className="relative z-[5] py-16 lg:py-32 px-5 sm:px-8 lg:px-10 bg-[#187492]">
      <div className="max-w-[1200px] mx-auto">
        <Reveal as="div" className="mb-10 lg:mb-14 text-center">
          <span className="eyebrow eyebrow--yellow">{t("visit.eyebrow")}</span>
          <h2 className="h-section text-white">{t("visit.title")}</h2>
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
            <p className="font-display font-bold text-[15px]">{t("visit.followTitle")}</p>
            <p className="text-[#1A1715]/80 text-[12px] mt-0.5">{t("visit.followSub")}</p>
          </motion.a>
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
