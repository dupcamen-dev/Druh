import type { Metadata } from "next";
import { Montserrat, Caveat, Noto_Sans_JP } from "next/font/google";
import localFont from "next/font/local";
import { BRAND } from "@/data/brand";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SplashScreen from "@/components/SplashScreen";
import ScrollToTop from "@/components/ScrollToTop";
import Grain from "@/components/Grain";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["400", "500", "600", "700"],
});

const comicSans = localFont({
  src: "./fonts/ComicSans.ttf",
  variable: "--font-comic",
  weight: "400",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-ja",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: {
    default: `DRUH — Café & Kitchen, Ternopil`,
    template: `%s | DRUH`,
  },
  description: BRAND.tagline,
  metadataBase: new URL("https://druh.cafe"),
  openGraph: {
    title: `DRUH — Café & Kitchen`,
    description: BRAND.tagline,
    siteName: "DRUH",
    locale: "en_US",
    type: "website",
    images: [{ url: "/images/hero-main.jpg", width: 1200, height: 630 }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${comicSans.variable} ${caveat.variable} ${notoSansJP.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">
        <SplashScreen />
        <ScrollToTop />
        <Header />
        {children}
        <Footer />
        <Grain />
      </body>
    </html>
  );
}
