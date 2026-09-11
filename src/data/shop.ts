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
  { id: "kava-v-zernah", name: "Кава в зернах" },
  { id: "matcha-v-sashe", name: "Матча в саше" },
];

const LABEL_MAP: Record<ShopLabel, string> = {
  new: "Новинка",
  recommended: "Рекомендуємо",
  vegetarian: "Вегетаріанське",
  gluten: "Без глютену",
};

export const labelLabel = (l: ShopLabel) => LABEL_MAP[l];

export const SHOP_ITEMS: ShopItem[] = [
  {
    id: "cafeboutique-decaf-colombia",
    name: "CAFEBOUTIQUE DECAF Colombia Popayan (омні)",
    category: "kava-v-zernah",
    priceGrn: 487,
    weight: "250",
    weightType: "g",
    kcal: null,
    description:
      "Обробка: EA\nРегіон: Попаян, Каука\nСтанція: Різні\nСорт: катура, кастіло, колумбія\n\nДескриптори: заварний пряник, вишневий джем, білий виноград, кунжутний козинак",
    imageUrl:
      "/images/shop/cafeboutique-decaf-colombia.png",
    labels: ["new"],
  },
  {
    id: "cafeboutique-ethiopia-gedeb",
    name: "🇪🇹CAFEBOUTIQUE Ethiopia Gedeb (еспресо)",
    category: "kava-v-zernah",
    priceGrn: 440,
    weight: "250",
    weightType: "g",
    kcal: null,
    description:
      "Обробка: натуральна\nРегіон: Гедеб, Йіргачеф\nСтанція: Лайодача\nСорт: гібриди jarc та локальні\n\nДискриптори: абрикос, малина, лимон, мигдаль, вершкове печиво",
    imageUrl:
      "/images/shop/cafeboutique-ethiopia-gedeb.png",
    labels: ["new"],
  },
  {
    id: "cafeboutique-brazil-divisa",
    name: "CAFEBOUTIQUE Brazil Divisa (еспресо)",
    category: "kava-v-zernah",
    priceGrn: 400,
    weight: "250",
    weightType: "g",
    kcal: null,
    description:
      "Обробка: натуральна\nРегіон: Кармо де Мінас\nСтанція: Дівіза\nСорт: жовтий бурбон\n\nДискриптори: мандарин, бісквіт, молочний шоколад, кеш'ю",
    imageUrl:
      "/images/shop/cafeboutique-brazil-divisa.png",
    labels: [],
  },
  {
    id: "cafeboutique-peru-piura",
    name: "CAFEBOUTIQUE Peru Piura (еспресо)",
    category: "kava-v-zernah",
    priceGrn: 436,
    weight: "250",
    weightType: "g",
    kcal: null,
    description:
      "Обробка: натуральна\nРегіон: Кахамарка\nСтанція: Аромас Дель Велі\nСорт: бурбон, катура, типіка\n\nДискриптори: сушене яблуко, стиглий грейпфрут, молочний шоколад, марципан",
    imageUrl:
      "/images/shop/cafeboutique-peru-piura.png",
    labels: [],
  },
  {
    id: "cafeboutique-kenya-kikuyu",
    name: "🇪🇹CAFEBOUTIQUE Kenya Kikuyu (фільтр)",
    category: "kava-v-zernah",
    priceGrn: 428,
    weight: "250",
    weightType: "g",
    kcal: null,
    description:
      "Обробка: мита\nРегіон: Нієрі\nСтанція: різні\nСорт: SL-28, SL-34, RUIRU 11\n\nДискриптори: печене яблуко, порічки, ревінь",
    imageUrl:
      "/images/shop/cafeboutique-kenya-kikuyu.png",
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
      "Обробка: натуральна\nРегіон: Уябал, Кахамарка\nСтанція: Санта Роза\nСорт: марсельєза\n\nДискриптори: лимонад, зефір, яблучносливова пастила, какаонібси",
    imageUrl:
      "/images/shop/cafeboutique-peru-santa-rosa.png",
    labels: [],
  },
  {
    id: "kokosoviy-matcha-late",
    name: "Кокосовий матча лате",
    category: "matcha-v-sashe",
    priceGrn: 68,
    weight: "18",
    weightType: "g",
    kcal: 111,
    description:
      "Справжній матча лате на кокосовому вдома за 1 хвилину. Зручний формат, щоб взяти з собою в офіс або подорож та заварити будь-де.\n\nУ складі якісний японський матча, сублімовані кокосові вершки та трохи стевії. Легкий у приготуванні — просто залийте водою та збийте до ідеальної пінки.",
    imageUrl:
      "/images/shop/kokosoviy-matcha-late.png",
    labels: ["recommended", "gluten", "vegetarian"],
  },
  {
    id: "kokosoviy-cbd-matcha-late",
    name: "Кокосовий CBD матча лате",
    category: "matcha-v-sashe",
    priceGrn: 97,
    weight: "18",
    weightType: "g",
    kcal: 111,
    description:
      "Справжній матча лате на кокосовому вдома за 1 хвилину. Ще й заспокійливий! Поєднання порції CBD, преміум матча, ніжних кокосових вершків.\n\nЛегкий у приготуванні — просто залийте водою та збийте. CBD допоможе розслабитися та сфокусуватись, а органічний матча подарує природну енергію.",
    imageUrl:
      "/images/shop/kokosoviy-cbd-matcha-late.png",
    labels: ["new", "recommended", "gluten", "vegetarian"],
  },
  {
    id: "kokosoviy-kolagen-matcha-late",
    name: "Кокосовий колаген матча лате",
    category: "matcha-v-sashe",
    priceGrn: 97,
    weight: "18",
    weightType: "g",
    kcal: 100,
    description:
      "Улюблена матча-лате тепер з колагеном від Perla. Напій, який посилює молодість та додає шкірі пружність. У складі — церемоніальна матча та морський колаген.\n\nПростота приготування — просто додайте води та розмішайте, а для кремової пінки скористайтесь капучинатором.",
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
  return `${formatted} грн`;
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
  const header = `Замовлення у ДРУГ`;
  const body = [header, "", ...lines, "", `Разом: ${fmtPrice(total)}`].join("\n");
  return `https://t.me/druhk15?text=${encodeURIComponent(body)}`;
}