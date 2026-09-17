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
      "DRUH поважає вашу приватність. Ця політика пояснює, які дані ми збираємо, коли ви користуєтесь нашим сайтом, і як ми їх використовуємо. Ми збираємо лише мінімум, необхідний для роботи сайту.",
    sections: [
      {
        title: "Які дані ми збираємо",
        body: [
          "Вміст кошика нашого магазину (вибрані товари та їх кількість) зберігається локально у вашому браузері (localStorage) і не передається на наші сервери.",
          "Коли ви замовляєте через Telegram, ваше ім'я та контакти, які ви вкажете, отримує тільки команда DRUH для обробки замовлення.",
          "Анонімна аналітика про кількість відвідувань може допомагати нам покращувати сайт.",
        ],
      },
      {
        title: "Як ми використовуємо дані",
        body: [
          "Дані використовуються виключно для обробки замовлень, відповідей на ваші запити та покращення внутрішньої роботи сайту.",
          "Ми не продаємо і не передаємо ваші персональні дані третім особам у маркетингових цілях.",
        ],
      },
      {
        title: "Файли cookie",
        body: [
          "Сайт використовує локальне зберігання в браузері (localStorage) для запам'ятовування обраної мови й вмісту кошика. Ви можете очистити ці дані в налаштуваннях браузера в будь-який момент.",
        ],
      },
      {
        title: "Сторонні сервіси",
        body: [
          "На сайті вбудовані інтерактивні карти Google Maps, посилання на Instagram та Telegram, а також посилання на сервіси доставки (Bolt Food, Glovo). На ці сервіси діють їхні власні політики конфіденційності.",
          "Оплата здійснюється поза цим сайтом через зазначені сервіси; дані платіжних карток ми не зберігаємо.",
        ],
      },
      {
        title: "Ваші права",
        body: [
          "Ви маєте право запитати, які дані про вас ми зберігаємо, та попросити їх видалити. Для цього зв'яжіться з нами будь-яким зручним способом.",
        ],
      },
      {
        title: "Контакти",
        body: [
          `${BRAND.addressFull}`,
          `${BRAND.phone}`,
          "Напишіть нам у Telegram або Direct в Instagram — ми завжди на зв'язку.",
        ],
      },
    ],
  },
  en: {
    date: "September 17, 2026",
    intro:
      "DRUH respects your privacy. This policy explains what data we collect when you use our website and how we use it. We collect only the minimum needed to run the site.",
    sections: [
      {
        title: "What we collect",
        body: [
          "Your shop cart contents (selected products and quantities) are stored locally in your browser (localStorage) and are never sent to our servers.",
          "When you order via Telegram, the name and contact details you provide are received only by the DRUH team to process your order.",
          "Anonymous traffic statistics may help us improve the site.",
        ],
      },
      {
        title: "How we use data",
        body: [
          "Data is used solely to process orders, answer your questions, and improve the site's inner workings.",
          "We do not sell or share your personal data with third parties for marketing purposes.",
        ],
      },
      {
        title: "Cookies",
        body: [
          "The site uses browser local storage (localStorage) to remember your chosen language and cart contents. You can clear these at any time in your browser settings.",
        ],
      },
      {
        title: "Third-party services",
        body: [
          "The site embeds interactive Google Maps, links to Instagram and Telegram, and links to delivery services (Bolt Food, Glovo). These services have their own privacy policies.",
          "Payments happen outside this site through the listed services; we never store card details.",
        ],
      },
      {
        title: "Your rights",
        body: [
          "You may ask which data we hold about you and request its deletion. Just reach out to us through any convenient channel.",
        ],
      },
      {
        title: "Contact",
        body: [
          `${BRAND.addressFull}`,
          `${BRAND.phone}`,
          "Message us on Telegram or Instagram Direct — we're always around.",
        ],
      },
    ],
  },
};

export default function PrivacyPage() {
  const { t, lang } = useLanguage();
  const doc = DOC[lang];

  return (
    <main className="flex-1">
      <section className="bg-[#187492] pt-28 pb-14 lg:pt-36 lg:pb-16">
        <div className="max-w-[900px] mx-auto px-5 sm:px-8 lg:px-10 text-center">
          <span className="eyebrow eyebrow--yellow">DRUH</span>
          <h1 className="h-section text-white">{t("legal.privacyTitle")}</h1>
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