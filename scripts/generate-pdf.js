const fs = require("fs");
const path = require("path");
const React = require("react");
const { pdf, Document, Page, Text, View, Image, StyleSheet, Font } = require("@react-pdf/renderer");
const LOGO_PATH = path.resolve(__dirname, "../public/images/logo-new.png");
const LOGO_BUF = fs.readFileSync(LOGO_PATH);

Font.register({ family: "Montserrat", fonts: [
  { src: path.resolve(__dirname, "../scripts/fonts/Montserrat.ttf") },
]});
Font.register({ family: "ComicSans", fonts: [
  { src: path.resolve(__dirname, "../scripts/fonts/ComicSans.ttf") },
]});
Font.register({ family: "Outfit", fonts: [
  { src: path.resolve(__dirname, "../scripts/fonts/Outfit.ttf") },
]});
Font.register({ family: "Caveat", fonts: [
  { src: path.resolve(__dirname, "../scripts/fonts/Caveat.ttf") },
]});

const raw = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../src/data-menu.json"), "utf8"));
const dishes = raw.dishes;

const C = {
  blue: "#2596be",
  yellow: "#ebe859",
  green: "#59eb59",
  ink: "#111111",
  white: "#FFFFFF",
  cream: "#FDFAF7",
};

const ACCENTS = [C.blue, C.yellow, C.green, C.blue, C.yellow, C.green, C.blue, C.yellow, C.green, C.blue, C.yellow, C.green];

// Each page gets one of these style backgrounds, cycling.
const THEMES = [
  { bg: C.cream, fg: C.ink, line: "rgba(17,17,17,0.16)", label: "cream" },
  { bg: C.white, fg: C.ink, line: "rgba(17,17,17,0.16)", label: "white" },
  { bg: C.blue,  fg: C.white, line: "rgba(255,255,255,0.25)", label: "blue" },
  { bg: C.yellow, fg: C.ink, line: "rgba(17,17,17,0.28)", label: "yellow" },
  { bg: C.green, fg: C.ink, line: "rgba(17,17,17,0.25)", label: "green" },
];

const s = StyleSheet.create({
  cover: {
    fontFamily: "ComicSans",
    size: 10,
    color: C.white,
    padding: 0,
    backgroundColor: C.blue,
  },
  coverInner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: "90 60 60 60",
  },
  coverLogoImg: {
    width: 150,
    height: 146,
    marginBottom: 26,
  },
  coverTagline: {
    fontFamily: "Caveat",
    fontSize: 26,
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 40,
  },
  coverDivider: {
    width: 50,
    height: 2,
    backgroundColor: C.yellow,
    marginBottom: 32,
  },
  coverInfo: {
    fontFamily: "Montserrat",
    fontSize: 12,
    color: "#FFFFFF",
    textAlign: "center",
    lineHeight: 2.1,
  },
  coverFooter: {
    position: "absolute",
    bottom: 36,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  coverFooterText: {
    fontFamily: "Montserrat",
    fontSize: 10,
    color: "#FFFFFF",
  },

  page: {
    fontFamily: "Montserrat",
    size: "A4",
    padding: "46 48 56 48",
  },

  sectionBanner: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    marginTop: 14,
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderBottomStyle: "solid",
  },
  sectionColorDot: {
    width: 12,
    height: 12,
    marginRight: 10,
  },
  sectionHeader: {
    fontFamily: "ComicSans",
    fontSize: 23,
    fontWeight: 700,
    letterSpacing: 3,
  },

  category: {
    fontFamily: "ComicSans",
    fontSize: 13.5,
    fontWeight: 600,
    marginBottom: 9,
    marginTop: 16,
    letterSpacing: 1.5,
    textTransform: "uppercase",
  },

  dishRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginBottom: 8,
    paddingBottom: 7,
    borderBottomWidth: 0.5,
    borderBottomStyle: "solid",
  },
  dishLeft: {
    flex: 1,
    paddingRight: 16,
  },
  dishName: {
    fontFamily: "ComicSans",
    fontSize: 15,
    fontWeight: 600,
  },
  dishMeta: {
    fontFamily: "Montserrat",
    fontSize: 11.5,
    marginTop: 2,
  },
  dishDesc: {
    fontFamily: "Montserrat",
    fontSize: 10.5,
    marginTop: 3,
    lineHeight: 1.45,
  },
  dishPrice: {
    fontFamily: "ComicSans",
    fontSize: 18,
    fontWeight: 700,
    textAlign: "right",
    minWidth: 66,
  },
  option: {
    fontFamily: "Montserrat",
    fontSize: 10.5,
    marginTop: 3,
  },

  drinksCol: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 16,
  },
  drinksColItem: {
    width: "46%",
  },

  pageFooter: {
    position: "absolute",
    bottom: 24,
    left: 48,
    right: 48,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 0.5,
    paddingTop: 10,
  },
  pageFooterText: {
    fontFamily: "Montserrat",
    fontSize: 11,
  },

  finalNote: {
    fontFamily: "Caveat",
    fontSize: 26,
    textAlign: "center",
    marginTop: 24,
  },
});

function themeStyles(t) {
  return {
    page: { ...s.page, backgroundColor: t.bg, color: t.fg },
    sectionBanner: { ...s.sectionBanner, borderBottomColor: t.line },
    sectionColorDot: { ...s.sectionColorDot },
    sectionHeader: { ...s.sectionHeader, color: t.fg },
    category: { ...s.category, color: t.fg },
    dishRow: { ...s.dishRow, borderBottomColor: t.line },
    dishName: { ...s.dishName, color: t.fg },
    dishMeta: { ...s.dishMeta, color: t.fg },
    dishDesc: { ...s.dishDesc, color: t.fg },
    dishPrice: { ...s.dishPrice, color: t.fg },
    option: { ...s.option, color: t.fg },
    pageFooter: { ...s.pageFooter, borderTopColor: t.line },
    pageFooterText: { ...s.pageFooterText, color: t.fg },
    finalNote: { ...s.finalNote, color: t.fg },
  };
}

const h = React.createElement;

const SECTIONS = [
  { slug: "snidanki-ves-den", name: "СНІДАНКИ ВЕСЬ ДЕНЬ", accent: 0 },
  { slug: "salati-ta-zakuski", name: "САЛАТИ ТА ЗАКУСКИ", accent: 1 },
  { slug: "pershi-stravi", name: "ПЕРШІ СТРАВИ", accent: 2 },
  { slug: "osnovni-stravi", name: "ОСНОВНІ СТРАВИ", accent: 3 },
  { slug: "bouli-do-18-00", name: "БОУЛИ", accent: 4 },
  { slug: "rameni-ta-burgeri", name: "РАМЕНИ ТА БУРГЕРИ", accent: 5 },
  { slug: "yakitori-gril-z-18-00", name: "ЯКІТОРІ-ГРИЛЬ", accent: 6 },
  { slug: "deserti", name: "ДЕСЕРТИ", accent: 7 },
  { slug: "napoyi", name: "НАПОЇ", accent: 8 },
  { slug: "kokteyli", name: "КОКТЕЙЛІ", accent: 9 },
  { slug: "alkogol", name: "АЛКОГОЛЬ", accent: 10 },
  { slug: "kramnichka", name: "КРАМНИЧКА", accent: 11 },
];

function DishItem({ d, st }) {
  const options = (d.optionsGroups || []).flatMap((g) =>
    g.items.filter((it) => it.price > 0).map((it) =>
      h(Text, { key: it.name, style: st.option }, `+ ${it.name}  ${it.price} грн`)
    )
  );

  const meta = (d.weight || "") + (d.weight && d.kcal ? `  ·  ${d.kcal} kcal` : "") + (!d.weight && d.kcal ? `${d.kcal} kcal` : "");

  return h(View, { style: st.dishRow },
    h(View, { style: s.dishLeft },
      h(Text, { style: st.dishName }, d.name),
      meta && h(Text, { style: st.dishMeta }, meta),
      ...options
    ),
    h(Text, { style: st.dishPrice }, `${d.price} грн`)
  );
}

function SectionView({ sec, st }) {
  const secDishes = dishes.filter((d) => d.section === sec.slug);
  if (secDishes.length === 0) return null;

  const byCat = {};
  for (const d of secDishes) {
    const cat = d.category || "Інше";
    (byCat[cat] = byCat[cat] || []).push(d);
  }

  const accentColor = ACCENTS[sec.accent] === st.page.background ? C.ink : ACCENTS[sec.accent];

  return h(View, null,
    h(View, { style: st.sectionBanner },
      h(View, { style: { ...st.sectionColorDot, backgroundColor: accentColor } }),
      h(Text, { style: st.sectionHeader }, sec.name),
    ),
    ...Object.entries(byCat).map(([cat, items]) =>
      h(View, { key: cat },
        cat !== "Інше" && Object.keys(byCat).length > 1
          ? h(Text, { style: st.category }, cat)
          : null,
        ...items.map((d) => h(DishItem, { key: d.id, d, st }))
      )
    )
  );
}

function CoverPage() {
  return h(Page, { size: "A4", style: s.cover },
    h(View, { style: s.coverInner },
      h(Image, { src: LOGO_BUF, style: s.coverLogoImg }),
      h(Text, { style: s.coverTagline }, "Кафе та Кухня"),
      h(View, { style: s.coverDivider }),
      h(Text, { style: s.coverInfo },
        "вул. 15-го Квітня 2м, Тернопіль\n+380 97 450 77 15\n\nПн–Пт  09:00 – 21:00\nСб–Нд  10:00 – 21:00"
      ),
    ),
    h(View, { style: s.coverFooter },
      h(Text, { style: s.coverFooterText }, "Instagram @druh.cafe  ·  Telegram @druhk15")
    )
  );
}

function SectionPage({ sec, pageNum, totalPages, theme }) {
  const st = themeStyles(theme);
  return h(Page, { size: "A4", style: st.page },
    h(SectionView, { sec, st }),
    h(View, { style: st.pageFooter },
      h(Text, { style: st.pageFooterText }, "DRUH — МЕНЮ"),
      h(Text, { style: st.pageFooterText }, "вул. 15-го Квітня 2м · Тернопіль"),
    )
  );
}

function DrinksPage({ pageNum, totalPages, theme }) {
  const st = themeStyles(theme);
  const drinkDishes = dishes.filter((d) => d.section === "napoyi");
  if (drinkDishes.length === 0) return null;

  const byCat = {};
  for (const d of drinkDishes) {
    const cat = d.category || "Інше";
    (byCat[cat] = byCat[cat] || []).push(d);
  }

  const accentColor = ACCENTS[8] === st.page.background ? C.ink : ACCENTS[8];

  return h(Page, { size: "A4", style: st.page },
    h(View, { style: st.sectionBanner },
      h(View, { style: { ...st.sectionColorDot, backgroundColor: accentColor } }),
      h(Text, { style: st.sectionHeader }, "НАПОЇ"),
    ),
    ...Object.entries(byCat).map(([cat, items]) =>
      h(View, { key: cat, style: { marginBottom: 10 } },
        h(Text, { style: st.category }, cat),
        ...items.map((d) => h(DishItem, { key: d.id, d, st }))
      )
    ),
    h(View, { style: st.pageFooter },
      h(Text, { style: st.pageFooterText }, "DRUH — МЕНЮ"),
      h(Text, { style: st.pageFooterText }, "вул. 15-го Квітня 2м · Тернопіль"),
    )
  );
}

function SummaryPage({ pageNum, totalPages, theme }) {
  const st = themeStyles(theme);
  return h(Page, { size: "A4", style: { ...st.page, justifyContent: "center", alignItems: "center" } },
    h(Text, { style: st.finalNote }, "Смачного!"),
    h(View, { style: { marginTop: 24, alignItems: "center" } },
      h(Text, { style: { ...st.pageFooterText, fontSize: 14, marginBottom: 8 } }, "Всі ціни вказані в гривнях"),
      h(Text, { style: { ...st.pageFooterText, fontSize: 14, marginBottom: 8 } }, "Зображення є приблизними"),
      h(Text, { style: { ...st.pageFooterText, fontSize: 14 } }, "Алергени: запитайте офіціанта"),
    ),
    h(View, { style: st.pageFooter },
      h(Text, { style: st.pageFooterText }, "DRUH — МЕНЮ"),
      h(Text, { style: st.pageFooterText }, "вул. 15-го Квітня 2м · Тернопіль"),
    )
  );
}

const allSections = SECTIONS.filter((sec) =>
  dishes.filter((d) => d.section === sec.slug).length > 0
);

const menuPages = allSections.filter((sec) => sec.slug !== "napoyi");
const totalPages = menuPages.length + 2; // cover sections + drinks page + summary

function buildDoc() {
  const pages = [
    h(CoverPage, { key: "cover" }),
    ...menuPages.map((sec, i) =>
      h(SectionPage, { key: sec.slug, sec, pageNum: i + 2, totalPages, theme: THEMES[i % THEMES.length] })
    ),
    h(DrinksPage, { key: "drinks", pageNum: menuPages.length + 2, totalPages, theme: THEMES[menuPages.length % THEMES.length] }),
    h(SummaryPage, { key: "summary", pageNum: totalPages, totalPages, theme: THEMES[(menuPages.length + 1) % THEMES.length] }),
  ];

  return h(Document, null, ...pages);
}

const outDir = path.resolve(__dirname, "../public/menu");
fs.mkdirSync(outDir, { recursive: true });

(async () => {
  const doc = buildDoc();
  const blob = await pdf(doc).toBlob();
  const buf = Buffer.from(await blob.arrayBuffer());
  fs.writeFileSync(path.join(outDir, "druh-menu-en.pdf"), buf);
  const size = (buf.length / 1024).toFixed(1);
  console.log(`PDF generated: ${totalPages} pages, ${size} KB`);
})();