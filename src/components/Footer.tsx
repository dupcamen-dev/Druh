"use client";
import Link from "next/link";
import { BRAND } from "@/data/brand";
import { useLanguage } from "@/components/LanguageProvider";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-[5] bg-[#1A1715] text-white">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <span className="font-display text-xl font-bold tracking-wide block mb-4">DRUH</span>
            <p className="font-hand text-lg text-white/50 leading-snug">
              {t("footer.tagline")}
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-[11px] uppercase tracking-[0.15em] text-white/50 mb-5">{t("footer.visit")}</h4>
            <div className="space-y-2 text-[14px] text-white/70">
              <p>{BRAND.addressFull}</p>
              <p>{BRAND.phone}</p>
              <p>{t("footer.monFri")} {BRAND.hours.weekdays}</p>
              <p>{t("footer.satSun")} {BRAND.hours.weekends}</p>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-[11px] uppercase tracking-[0.15em] text-white/50 mb-5">{t("footer.follow")}</h4>
            <div className="flex flex-col gap-1">
              <a href={BRAND.socials.instagram} target="_blank" rel="noopener" className="inline-block py-1.5 text-[14px] text-white/70 hover:text-[#ebe859] hover:-translate-y-0.5 transition-all">Instagram</a>
              <a href={BRAND.socials.telegram} target="_blank" rel="noopener" className="inline-block py-1.5 text-[14px] text-white/70 hover:text-[#ebe859] hover:-translate-y-0.5 transition-all">Telegram</a>
              <a href={BRAND.socials.facebook} target="_blank" rel="noopener" className="inline-block py-1.5 text-[14px] text-white/70 hover:text-[#ebe859] hover:-translate-y-0.5 transition-all">Facebook</a>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 space-y-2">
          <p className="text-[12px] text-white/50 text-center font-display">{t("footer.rights").replace("{year}", String(year))}</p>
          <div className="flex items-center justify-center gap-6 py-1">
            <Link href="/privacy" className="underline-anim text-[12px] text-white/60 hover:text-[#ebe859] transition-colors font-display">
              {t("footer.privacy")}
            </Link>
            <Link href="/terms" className="underline-anim text-[12px] text-white/60 hover:text-[#ebe859] transition-colors font-display">
              {t("footer.terms")}
            </Link>
          </div>
          <p className="text-[12px] text-white/60 text-center font-display">
            {t("footer.credit")}{" "}
            <a
              href="https://www.millionpixels.dev/"
              target="_blank"
              rel="noopener"
              className="underline-anim text-[#ebe859] hover:text-[#59eb59] transition-colors"
            >
              Million Pixels
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}