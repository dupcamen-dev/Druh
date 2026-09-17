"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { asset } from "@/lib/base";
import { useLanguage, LOCALES } from "@/components/LanguageProvider";

const NAV_KEYS = [
  { href: "/#asian", labelKey: "nav.asian" },
  { href: "/#gallery", labelKey: "nav.gallery" },
  { href: "/#visit", labelKey: "nav.visit" },
  { href: "/about", labelKey: "nav.about" },
];

function LangSwitcher({ overDark }: { overDark: boolean }) {
  const { lang, setLang } = useLanguage();
  return (
    <div
      className={`flex items-center gap-0.5 rounded-full border p-0.5 text-[11px] font-bold uppercase tracking-wider transition-colors ${
        overDark ? "border-white/40" : "border-[#1A1715]/25"
      }`}
      role="group"
      aria-label="Language"
    >
      {LOCALES.map((loc) => {
        const active = lang === loc;
        return (
          <button
            key={loc}
            onClick={() => setLang(loc)}
            aria-pressed={active}
            className={`px-2 py-0.5 rounded-full transition-colors ${
              active
                ? "bg-[#ebe859] text-[#1A1715]"
                : overDark
                  ? "text-white/70 hover:text-white"
                  : "text-[#1A1715]/60 hover:text-[#1A1715]"
            }`}
          >
            {loc === "ua" ? "UA" : "EN"}
          </button>
        );
      })}
    </div>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isTop = !scrolled;
  const pathname = usePathname();
  const onLightHero = isTop && pathname === "/menu";
  const overDark = isTop && !onLightHero;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300 animate-header"
      style={{
        background: isTop ? "transparent" : "#FDFAF7",
        borderBottom: isTop ? "none" : "2px solid #1A1715",
      }}
    >
      <div className="max-w-[1360px] mx-auto flex items-center justify-between h-[76px] px-5 sm:px-8 lg:px-12">
        <Link href="/" className="shrink-0">
          <Image
            src={asset("/images/logo-new.png")}
            alt="Druh"
            width={66}
            height={64}
            priority={false}
            className="w-12 sm:w-14 lg:w-[66px] h-auto transition-transform duration-300 hover:scale-105"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_KEYS.map((n) => (
            <a
              key={n.href}
              href={asset(n.href)}
              className={`underline-anim text-[12px] font-bold uppercase tracking-[0.12em] transition-colors ${overDark ? "text-white/90 hover:text-[#ebe859]" : "text-[#1A1715]/60 hover:text-[#1A1715]"}`}
            >
              {t(n.labelKey)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <LangSwitcher overDark={overDark} />
          <a
            href={asset("/menu/druh-menu-en.pdf")}
            target="_blank"
            rel="noopener"
            className={`shine hidden sm:inline-flex btn btn--sm btn--ink`}
          >
            {t("header.menu")}
          </a>
          <button
            onClick={() => setOpen(!open)}
            className={`md:hidden p-3 -m-1 transition-colors ${overDark ? "text-white" : "text-[#1A1715]"}`}
            aria-label={t("header.toggle")}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
              {open ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t-2 border-[#1A1715] animate-menu">
          <nav className="flex flex-col p-5 gap-4">
            {NAV_KEYS.map((n) => (
              <a key={n.href} href={asset(n.href)} onClick={() => setOpen(false)} className="underline-anim block py-1.5 text-[13px] font-bold uppercase tracking-[0.1em] text-[#1A1715]/70 hover:text-[#187492] transition-colors">
                {t(n.labelKey)}
              </a>
            ))}
            <a href={asset("/menu/druh-menu-en.pdf")} target="_blank" rel="noopener" onClick={() => setOpen(false)} className="mt-2 btn btn--sm btn--ink btn--block">
              {t("header.menuPdf")}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}