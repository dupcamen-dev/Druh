"use client";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import Reveal from "@/components/Reveal";
import { BRAND } from "@/data/brand";

type Doc = {
  date: string;
  intro: string;
  sections: { title: string; body: string[] }[];
};

const DOC: Record<"ua" | "en", Doc> = {
  ua: {
    date: "17 вересня 2026",
    intro:
      "Користуючись цим сайтом, ви погоджуєтесь з умовами, описаними нижче. Якщо у вас виникли запитання — зв'яжіться з нами.",
    sections: [
      {
        title: "Меню та замовлення",
        body: [
          "Повне меню DRUH подається у вигляді PDF-файлу і може оновлюватися без попереднього повідомлення.",
          "Замовлення з крамнички оформлюються через Telegram і підтверджуються нашою командою вручну.",
        ],
      },
      {
        title: "Ціни та наявність",
        body: [
          "Ціни вказані в гривнях і можуть змінюватися. Наявність товарів може відрізнятися від зазначеної; ми повідомимо вас про будь-які зміни до підтвердження замовлення.",
        ],
      },
      {
        title: "Алергени та інгредієнти",
        body: [
          "Страви можуть містити алергени. Якщо у вас алергія, повідомте нас перед замовленням — уточнимо склад інгредієнтів конкретної страви.",
        ],
      },
      {
        title: "Інтелектуальна власність",
        body: [
          "Всі матеріали сайту, включно з текстами, зображеннями та логотипом, належать DRUH або їхнім авторам і не можуть використовуватися без дозволу.",
        ],
      },
      {
        title: "Відповідальність",
        body: [
          "Сайт надається в стані «як є». Ми докладаємо зусиль, щоб інформація була актуальною, але не несемо відповідальності за можливі неточності.",
        ],
      },
      {
        title: "Зміни умов",
        body: [
          "Ми можемо час від часу оновлювати ці умови. Остання редакція завжди доступна на цій сторінці.",
        ],
      },
      {
        title: "Звернення",
        body: [
          `${BRAND.addressFull}`,
          `${BRAND.phone}`,
          "Telegram або Instagram Direct — найшвидший спосіб досягти нас.",
        ],
      },
    ],
  },
  en: {
    date: "September 17, 2026",
    intro:
      "By using this website you agree to the terms described below. If you have any questions — get in touch.",
    sections: [
      {
        title: "Menu & orders",
        body: [
          "The full DRUH menu is presented as a PDF file and may be updated without prior notice.",
          "Shop orders are placed via Telegram and confirmed manually by our team.",
        ],
      },
      {
        title: "Prices & availability",
        body: [
          "Prices are listed in hryvnias and may change. Product availability may differ from what is shown; we will inform you of any changes before confirming your order.",
        ],
      },
      {
        title: "Allergens & ingredients",
        body: [
          "Dishes may contain allergens. If you have an allergy, tell us before ordering and we'll confirm the ingredients of a specific dish.",
        ],
      },
      {
        title: "Intellectual property",
        body: [
          "All site materials, including texts, images and the logo, belong to DRUH or their authors and may not be used without permission.",
        ],
      },
      {
        title: "Liability",
        body: [
          "The site is provided on an 'as is' basis. We try to keep information accurate but are not liable for possible inaccuracies.",
        ],
      },
      {
        title: "Changes to these terms",
        body: [
          "We may update these terms from time to time. The latest revision is always available on this page.",
        ],
      },
      {
        title: "Contact",
        body: [
          `${BRAND.addressFull}`,
          `${BRAND.phone}`,
          "Telegram or Instagram Direct — the fastest way to reach us.",
        ],
      },
    ],
  },
};

export default function TermsPage() {
  const { t, lang } = useLanguage();
  const doc = DOC[lang];

  return (
    <main className="flex-1">
      <section className="bg-[#187492] pt-28 pb-14 lg:pt-36 lg:pb-16">
        <div className="max-w-[900px] mx-auto px-5 sm:px-8 lg:px-10 text-center">
          <span className="eyebrow eyebrow--yellow">DRUH</span>
          <h1 className="h-section text-white">{t("legal.termsTitle")}</h1>
          <p className="text-[13px] uppercase tracking-[0.15em] font-display text-white/60 mt-4">
            {t("legal.updated")} {doc.date}
          </p>
        </div>
      </section>

      <section className="py-14 lg:py-20 bg-[#FDFAF7]">
        <div className="max-w-[900px] mx-auto px-5 sm:px-8 lg:px-10">
          <p className="lead">{doc.intro}</p>
          <div className="mt-12 space-y-10">
            {doc.sections.map((s) => (
              <Reveal as="div" key={s.title}>
                <h2 className="h-section mb-3" style={{ fontSize: "clamp(1.4rem, 3vw, 1.9rem)" }}>
                  {s.title}
                </h2>
                {s.body.map((p, i) => (
                  <p key={i} className="text-[#1A1715]/75 text-[15px] leading-[1.8] mb-3 max-w-[75ch]">
                    {p}
                  </p>
                ))}
              </Reveal>
            ))}
          </div>
          <div className="mt-14">
            <Link href="/" className="shine btn btn--dark">
              {t("legal.home")}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}