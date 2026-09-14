import { asset } from "@/lib/base";

export default function MenuPage() {
  return (
    <main className="flex-1">
      <section className="py-16 lg:py-32 px-5 sm:px-8 lg:px-10 bg-[#ebe859]">
        <div className="max-w-[600px] mx-auto text-center text-[#1A1715]">
          <span className="eyebrow eyebrow--ink">Menu</span>
          <h1 className="h-section">
            Take the menu with you
          </h1>
          <p className="lead mb-8 max-w-md mx-auto">
            Our full menu is a beautifully designed PDF — open it to browse everything, anytime.
          </p>
          <a
            href={asset("/menu/druh-menu-en.pdf")}
            target="_blank"
            rel="noopener"
            className="group shine btn btn--dark"
          >
            Open menu (PDF)
            <svg
              className="transition-transform duration-300 group-hover:translate-x-1"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="square"
            >
              <path d="M18 8l4 4-4 4M6 20V11a1 1 0 0 1 1-1h11" />
            </svg>
          </a>
        </div>
      </section>
    </main>
  );
}