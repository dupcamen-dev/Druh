export type ShopLabel = "new" | "recommended" | "vegetarian" | "gluten";

export type ShopCategory = {
  id: string;
  name: string;
};

export type ShopItem = {
  id: string;
  name: string;
  category: string;
  priceGrn: number;
  weight: string;
  weightType: string;
  kcal: number | null;
  description: string;
  imageUrl: string;
  labels: ShopLabel[];
};

export const CATEGORIES: ShopCategory[] = [
  { id: "kava-v-zernah", name: "Coffee beans" },
  { id: "matcha-v-sashe", name: "Matcha sachets" },
];

const LABEL_MAP: Record<ShopLabel, string> = {
  new: "New",
  recommended: "Recommended",
  vegetarian: "Vegetarian",
  gluten: "Gluten-free",
};

export const labelLabel = (l: ShopLabel) => LABEL_MAP[l];

export const SHOP_ITEMS: ShopItem[] = [
  {
    id: "cafeboutique-decaf-colombia",
    name: "CAFEBOUTIQUE DECAF Colombia Popayan (omni)",
    category: "kava-v-zernah",
    priceGrn: 487,
    weight: "250",
    weightType: "g",
    kcal: null,
    description:
      "Process: EA\nRegion: Popayán, Cauca\nStation: Various\nVariety: caturra, castillo, colombia\n\nTasting notes: spice cake, cherry jam, white grape, sesame brittle",
    imageUrl:
      "/images/shop/cafeboutique-decaf-colombia.png",
    labels: ["new"],
  },
  {
    id: "cafeboutique-ethiopia-gedeb",
    name: "🇪🇹CAFEBOUTIQUE Ethiopia Gedeb (espresso)",
    category: "kava-v-zernah",
    priceGrn: 440,
    weight: "250",
    weightType: "g",
    kcal: null,
    description:
      "Process: natural\nRegion: Gedeb, Yirgacheffe\nStation: Layodacha\nVariety: JARC hybrids & local\n\nTasting notes: apricot, raspberry, lemon, almond, butter cookie",
    imageUrl:
      "/images/shop/cafeboutique-ethiopia-gedeb.png",
    labels: ["new"],
  },
  {
    id: "cafeboutique-brazil-divisa",
    name: "CAFEBOUTIQUE Brazil Divisa (espresso)",
    category: "kava-v-zernah",
    priceGrn: 400,
    weight: "250",
    weightType: "g",
    kcal: null,
    description:
      "Process: natural\nRegion: Carmo de Minas\nStation: Divisa\nVariety: yellow bourbon\n\nTasting notes: mandarin, sponge cake, milk chocolate, cashew",
    imageUrl:
      "/images/shop/cafeboutique-brazil-divisa.png",
    labels: [],
  },
  {
    id: "cafeboutique-peru-piura",
    name: "CAFEBOUTIQUE Peru Piura (espresso)",
    category: "kava-v-zernah",
    priceGrn: 436,
    weight: "250",
    weightType: "g",
    kcal: null,
    description:
      "Process: natural\nRegion: Cajamarca\nStation: Aromas del Valle\nVariety: bourbon, caturra, typica\n\nTasting notes: dried apple, ripe grapefruit, milk chocolate, marzipan",
    imageUrl:
      "/images/shop/cafeboutique-peru-piura.png",
    labels: [],
  },
  {
    id: "cafeboutique-kenya-kikuyu",
    name: "🇪🇹CAFEBOUTIQUE Kenya Kikuyu (filter)",
    category: "kava-v-zernah",
    priceGrn: 428,
    weight: "250",
    weightType: "g",
    kcal: null,
    description:
      "Process: washed\nRegion: Nyeri\nStation: Various\nVariety: SL-28, SL-34, RUIRU 11\n\nTasting notes: baked apple, redcurrant, rhubarb",
    imageUrl:
      "/images/shop/cafeboutique-kenya-kikuyu.webp",
    labels: [],
  },
  {
    id: "cafeboutique-peru-santa-rosa",
    name: "CAFEBOUTIQUE Peru Santa Rosa",
    category: "kava-v-zernah",
    priceGrn: 556,
    weight: "250",
    weightType: "g",
    kcal: null,
    description:
      "Process: natural\nRegion: Uyabal, Cajamarca\nStation: Santa Rosa\nVariety: marsellesa\n\nTasting notes: lemonade, marshmallow, apple-plum fruit leather, cacao nibs",
    imageUrl:
      "/images/shop/cafeboutique-peru-santa-rosa.png",
    labels: [],
  },
  {
    id: "kokosoviy-matcha-late",
    name: "Coconut matcha latte",
    category: "matcha-v-sashe",
    priceGrn: 68,
    weight: "18",
    weightType: "g",
    kcal: 111,
    description:
      "Real matcha latte with coconut at home in 1 minute. A convenient format to take to the office or on a trip and brew anywhere.\n\nMade with high-quality Japanese matcha, freeze-dried coconut cream and a touch of stevia. Easy to prepare — just pour water over it and whisk to a perfect froth.",
    imageUrl:
      "/images/shop/kokosoviy-matcha-late.png",
    labels: ["recommended", "gluten", "vegetarian"],
  },
  {
    id: "kokosoviy-cbd-matcha-late",
    name: "Coconut CBD matcha latte",
    category: "matcha-v-sashe",
    priceGrn: 97,
    weight: "18",
    weightType: "g",
    kcal: 111,
    description:
      "Real matcha latte with coconut at home in 1 minute. Calming, too! A blend of a dose of CBD, premium matcha and gentle coconut cream.\n\nEasy to prepare — just pour water over it and whisk. CBD helps you relax and focus, while organic matcha gives you natural energy.",
    imageUrl:
      "/images/shop/kokosoviy-cbd-matcha-late.png",
    labels: ["new", "recommended", "gluten", "vegetarian"],
  },
  {
    id: "kokosoviy-kolagen-matcha-late",
    name: "Coconut collagen matcha latte",
    category: "matcha-v-sashe",
    priceGrn: 97,
    weight: "18",
    weightType: "g",
    kcal: 100,
    description:
      "Your favourite matcha latte, now with collagen from Perla. A drink that boosts youthful glow and adds firmness to skin. Made with ceremonial matcha and marine collagen.\n\nSo easy to make — just add water and stir, or use a frother for a creamy foam.",
    imageUrl:
      "/images/shop/kokosoviy-kolagen-matcha-late.png",
    labels: ["recommended", "gluten", "vegetarian"],
  },
];

export const SHOP_BY_CATEGORY = CATEGORIES.map((cat) => ({
  ...cat,
  items: SHOP_ITEMS.filter((it) => it.category === cat.id),
}));

export function fmtPrice(n: number): string {
  const formatted = n.toLocaleString("uk-UA", { maximumFractionDigits: 0 });
  return `${formatted} UAH`;
}

export function buildTelegramOrder(cart: Record<string, number>): string {
  const lines = Object.entries(cart)
    .filter(([, qty]) => qty > 0)
    .map(([id, qty]) => {
      const it = SHOP_ITEMS.find((x) => x.id === id)!;
      return `• ${it.name} ×${qty} — ${fmtPrice(it.priceGrn * qty)}`;
    });
  const total = Object.entries(cart)
    .filter(([, qty]) => qty > 0)
    .reduce((sum, [id, qty]) => {
      const it = SHOP_ITEMS.find((x) => x.id === id)!;
      return sum + it.priceGrn * qty;
    }, 0);
  const header = `Order from DRUH`;
  const body = [header, "", ...lines, "", `Total: ${fmtPrice(total)}`].join("\n");
  return `https://t.me/druhk15?text=${encodeURIComponent(body)}`;
}
