export const LOCALES = ["ua", "en"] as const;
export type Locale = (typeof LOCALES)[number];

type Entry = { ua: string; en: string };
type RawDict = Record<string, Entry>;

export const dict: RawDict = {
  /* ── header ── */
  "nav.asian": { ua: "Азійська кухня", en: "Asian kitchen" },
  "nav.gallery": { ua: "Галерея", en: "Gallery" },
  "nav.visit": { ua: "Контакти", en: "Visit us" },
  "nav.about": { ua: "Про нас", en: "About" },
  "header.menu": { ua: "Меню", en: "Menu" },
  "header.menuPdf": { ua: "Меню (PDF)", en: "Menu (PDF)" },
  "header.toggle": { ua: "Відкрити меню", en: "Toggle menu" },

  /* ── footer ── */
  "footer.tagline": { ua: "Приходь як гість, йди як друг.", en: "Come as a guest, leave as a friend." },
  "footer.visit": { ua: "Відвідайте нас", en: "Visit us" },
  "footer.follow": { ua: "Слідкуйте за нами", en: "Follow along" },
  "footer.monFri": { ua: "Пн–Пт", en: "Mon–Fri" },
  "footer.satSun": { ua: "Сб–Нд", en: "Sat–Sun" },
  "footer.rights": { ua: "© {year} DRUH — Кафе та Кухня.", en: "© {year} DRUH Café & Kitchen." },
  "footer.credit": { ua: "Дизайн та розробка —", en: "Designed & Built by" },
  "footer.privacy": { ua: "Політика конфіденційності", en: "Privacy Policy" },
  "footer.terms": { ua: "Умови користування", en: "Terms of Service" },

  /* ── hero ── */
  "hero.aria": { ua: "DRUH — де кожен гість — друг", en: "Druh — where every guest is a friend" },
  "hero.tagline": { ua: "де кожен гість — друг", en: "where every guest is a friend" },
  "hero.h1a": { ua: "де кожен гість", en: "where every guest" },
  "hero.h1b": { ua: "це", en: "is a" },
  "hero.friend": { ua: "друг", en: "friend" },
  "hero.subtitle": { ua: "Яскраві азійські смаки — за одним столом.", en: "Bold Asian flavors, shared around one table." },
  "hero.cta1": { ua: "Переглянути меню", en: "Browse the menu" },
  "hero.cta2": { ua: "Відкрити кухню", en: "Explore the kitchen" },

  /* ── home ── */
  "marquee.breakfast": { ua: "Сніданки весь день", en: "Breakfast all day" },
  "marquee.cinnabons": { ua: "Домашні сінабони", en: "Homemade cinnabons" },
  "marquee.ramen": { ua: "Рамен і бургери", en: "Ramen & burgers" },
  "marquee.yakitori": { ua: "Гриль якіторі", en: "Yakitori grill" },
  "marquee.matcha": { ua: "Матча-бар", en: "Matcha bar" },
  "marquee.coffee": { ua: "Спешелті-кава", en: "Specialty coffee" },
  "marquee.teas": { ua: "Преміальні чаї", en: "Premium teas" },
  "marquee.cocktails": { ua: "Коктейлі", en: "Cocktails" },
  "marquee.bowls": { ua: "Боули", en: "Bowls" },
  "marquee.shop": { ua: "Крамничка", en: "Little shop" },

  "pdf.title": { ua: "Заберіть меню з собою", en: "Take the menu with you" },
  "pdf.lead": { ua: "Наше повне меню", en: "Our full menu" },
  "pdf.cta": { ua: "Відкрити меню (PDF)", en: "Open menu (PDF)" },

  "story.eyebrow": { ua: "Наша історія", en: "Our story" },
  "story.title": { ua: "Місце, де незнайомці стають друзями", en: "A place where strangers become friends" },
  "story.lead": {
    ua: "Комфортна кав'ярня з пізніми сніданками, затишними обідами та якісними напоями. А щоб улюблені ритуали залишалися з вами, у нашій крамничці завжди є спешелті кава та якісна матча для дому.",
    en: "A cozy café with late breakfasts, warm lunches, and quality drinks. So your favorite rituals stay with you, our little shop always has specialty coffee and quality matcha for home.",
  },
  "story.cta": { ua: "Читати нашу історію", en: "Read our story" },

  "gallery.eyebrow": { ua: "Галерея", en: "Gallery" },
  "gallery.title": { ua: "Миті в DRUH", en: "Moments at Druh" },
  "gallery.lead": { ua: "Слідкуйте за нами в", en: "Follow us on" },
  "gallery.moment": { ua: "Мить", en: "Moment" },

  "visit.eyebrow": { ua: "Відвідайте нас", en: "Visit us" },
  "visit.title": { ua: "Завітайте до нас", en: "Come say hello" },
  "visit.address": { ua: "Адреса", en: "Address" },
  "visit.mapLink": { ua: "Відкрити в Google Maps", en: "Open in Google Maps" },
  "visit.call": { ua: "Телефон", en: "Call us" },
  "visit.hours": { ua: "Години роботи", en: "Opening hours" },
  "visit.monFri": { ua: "Пн–Пт:", en: "Mon–Fri:" },
  "visit.satSun": { ua: "Сб–Нд:", en: "Sat–Sun:" },
  "visit.deliveryTitle": { ua: "Доставка", en: "Delivery" },
  "visit.deliveryDesc": { ua: "Через Bolt Food та Glovo", en: "Via Bolt Food & Glovo" },
  "visit.takeawayTitle": { ua: "На виніс", en: "Takeaway" },
  "visit.takeawayDesc": { ua: "Замовте заздалегідь із нашого онлайн-меню", en: "Order ahead from our online menu" },
  "visit.reservationTitle": { ua: "Бронювання", en: "Reservations" },
  "visit.reservationDesc": { ua: "Подзвоніть, щоб забронювати стіл", en: "Call us to reserve a table" },
  "visit.followTitle": { ua: "Підписуйтесь @druh.cafe", en: "Follow @druh.cafe" },
  "visit.followSub": { ua: "Щоденні пропозиції та залаштунки", en: "Daily specials & behind the scenes" },

  /* ── about ── */
  "about.heroEyebrow": { ua: "Про DRUH", en: "About Druh" },
  "about.heroTitle1": { ua: "Приходь як гість,", en: "Come as a guest," },
  "about.heroTitle2": { ua: "іди як", en: "leave as a" },
  "about.heroLead": {
    ua: "Куточок Тернополя, де ранки тривають весь день, бульйон булькотить від світанку, а кожне місце — з усмішкою.",
    en: "A corner of Ternopil where mornings last all day, the broth bubbles since sunrise, and every seat comes with a smile.",
  },
  "about.heroCta2": { ua: "Переглянути меню", en: "See the menu" },

  "stats.drinks": { ua: "Спешелті-напої", en: "Specialty drinks" },
  "stats.dishes": { ua: "Страв у меню", en: "Dishes on the menu" },
  "stats.homemade": { ua: "Відсоток домашнього", en: "Percent homemade" },
  "stats.rating": { ua: "Середній рейтинг", en: "Average rating" },

  "about.storyP1": {
    ua: "DRUH народився з простої віри, що кав'ярня має почуватися як дім. Схована на тихій вулиці Тернополя, ми відчинили двері для ранків, що ніколи не закінчуються, мисок бульйону, що зігрівають зсередини, і маленької крамнички, де можна забрати часточку цього тепла з собою.",
    en: "DRUH was born from the simple belief that a café should feel like home. Tucked away on a quiet street in Ternopil, we opened our doors for mornings that never seem to end, bowls of broth that warm you from the inside, and a little shop where you can take a piece of that warmth with you.",
  },
  "about.storyP2": {
    ua: "Берете флет-вайт перед роботою, смакуєте страви в японському стилі чи засиджуєтесь за сінабоном із друзями — кожен гість для нас саме друг.",
    en: "Whether you're grabbing a flat white before work, exploring our Japanese-inspired plates, or lingering over a cinnabon with friends — every guest is exactly that: a friend.",
  },

  "about.ctaTitle": { ua: "Готові сісти за стіл?", en: "Ready to take a seat?" },
  "about.ctaLead": {
    ua: "Перегляньте повне меню, загляньте на матчу або візьміть із собою пачку нашої кави.",
    en: "Browse the full menu, drop by for a matcha, or grab a bag of our house-roasted coffee to go.",
  },
  "about.cta1": { ua: "Відкрити меню", en: "Open the menu" },
  "about.cta2": { ua: "Підписуйтесь", en: "Follow us" },

  /* ── menu page ── */
  "menu.eyebrow": { ua: "Меню", en: "Menu" },
  "menu.lead": {
    ua: "Наше повне меню — це красиво оформлений PDF. Відкрийте його, щоб переглянути все в будь-який час.",
    en: "Our full menu is a beautifully designed PDF — open it to browse everything, anytime.",
  },

  /* ── asian kitchen ── */
  "asian.eyebrow": { ua: "Азійська кухня", en: "Asian kitchen" },
  "asian.title1": { ua: "Токійський стріт-фуд,", en: "Tokyo street food," },
  "asian.title2": { ua: "приготований тут", en: "brewed right here" },
  "asian.lead": {
    ua: "Від бульйонних базарів Осаки до шкварчачих грилів токійських провулків — японська прогулянка, не виходячи з Тернополя. Кожна страва розповідає історію традицій, майстерності та найсвіжіших сезонних інгредієнтів.",
    en: "From the broth-bubbling stalls of Osaka to the sizzling grills of Tokyo's alleyways — a Japanese street walk, without leaving Ternopil. Each dish tells a story of tradition, craft, and the freshest seasonal ingredients.",
  },

  "asian.ramenSeafood.name": { ua: "Рамен із морепродуктами", en: "Seafood ramen" },
  "asian.ramenSeafood.desc": {
    ua: "Умамі-бульйон із креветками, кальмаром, маринованим яйцем і тофу, кукурудзою та норі.",
    en: "Umami broth with prawns, squid, marinated egg & tofu, corn and nori.",
  },
  "asian.ramenBeef.name": { ua: "Рамен із яловичиною", en: "Beef ramen" },
  "asian.ramenBeef.desc": {
    ua: "Яловичина су-від, гостра олія з чилі, мариноване яйце, кукурудза та чіпси з норі.",
    en: "Su-vid beef, spicy chili oil, marinated egg, corn and nori chips.",
  },
  "asian.ramenKatsu.name": { ua: "Рамен із куркою кацу", en: "Chicken katsu ramen" },
  "asian.ramenKatsu.desc": {
    ua: "Хрустка золотиста кацу, гриб муер, мариноване яйце, домашня локшина.",
    en: "Crispy golden katsu, wood-ear mushroom, marinated egg, house noodles.",
  },
  "asian.yakitoriChicken.name": { ua: "Якіторі з курки", en: "Yakitori chicken" },
  "asian.yakitoriChicken.desc": {
    ua: "Стегно, запечене на вугіллі, у соусі таре — соєвому, з мірином і саке.",
    en: "Charcoal-grilled thigh brushed with tare — soy, mirin and sake.",
  },
  "asian.yakitoriPrawn.name": { ua: "Якіторі з креветок", en: "Yakitori prawn" },
  "asian.yakitoriPrawn.desc": {
    ua: "Соковиті креветки зі шпинатом, лаймом і цитрусовим юдзу-соусом.",
    en: "Juicy prawns with spinach, lime and citrus yuzu sauce.",
  },
  "asian.onigiriEel.name": { ua: "Онігірі з вугрем", en: "Onigiri with eel" },
  "asian.onigiriEel.desc": {
    ua: "Теплий рис для суші, глазурований вугор, соус унагі та хрустке норі.",
    en: "Warm sushi rice, glazed eel, unagi sauce and a crisp nori wrap.",
  },
  "asian.onigiriSalmon.name": { ua: "Онігірі з лососем", en: "Onigiri with salmon" },
  "asian.onigiriSalmon.desc": {
    ua: "Теплий рис для суші в норі, зі свіжим лососем.",
    en: "Warm sushi rice wrapped in nori, filled with fresh salmon.",
  },
  "asian.bowlSalmon.name": { ua: "Боул із рисом та лососем", en: "Salmon rice bowl" },
  "asian.bowlSalmon.desc": {
    ua: "Японський рисовий боул із лососем і свіжою сезонною зеленню.",
    en: "Japanese rice bowl topped with salmon and fresh seasonal greens.",
  },
  "asian.bowlPrawn.name": { ua: "Боул із рисом та креветками", en: "Prawn rice bowl" },
  "asian.bowlPrawn.desc": {
    ua: "Японський рисовий боул із грильованими креветками та цитрусовою заправкою.",
    en: "Japanese rice bowl with grilled prawns and a citrus dressing.",
  },

  /* ── shop / kramnychka ── */
  "shop.eyebrow": { ua: "Крамничка", en: "Little shop" },
  "shop.catCoffee": { ua: "Кава в зернах", en: "Coffee beans" },
  "shop.catMatcha": { ua: "Мача в саше", en: "Matcha sachets" },
  "shop.label.new": { ua: "Новинка", en: "New" },
  "shop.label.recommended": { ua: "Рекомендуємо", en: "Recommended" },
  "shop.label.vegetarian": { ua: "Вегетаріанське", en: "Vegetarian" },
  "shop.label.gluten": { ua: "Без глютену", en: "Gluten-free" },
  "shop.add": { ua: "Додати", en: "Add" },
  "shop.remove": { ua: "Прибрати", en: "Remove" },
  "shop.cart": { ua: "Кошик", en: "Cart" },
  "shop.cartEmpty": { ua: "Ваш кошик порожній", en: "Your cart is empty" },
  "shop.cartEmptySub": { ua: "Додайте щось смачне", en: "Add something tasty" },
  "shop.total": { ua: "Разом", en: "Total" },
  "shop.orderTelegram": { ua: "Замовити через Telegram", en: "Order via Telegram" },
  "shop.clearCart": { ua: "Очистити кошик", en: "Clear cart" },
  "shop.close": { ua: "Закрити", en: "Close" },
  "shop.openCart": { ua: "Відкрити кошик", en: "Open cart" },
  "shop.kcal": { ua: "ккал", en: "kcal" },

  "shop.decafColombia.name": { ua: "CAFEBOUTIQUE DECAF Colombia Popayan (omni)", en: "CAFEBOUTIQUE DECAF Colombia Popayan (omni)" },
  "shop.decafColombia.desc": {
    ua: "Обробка: EA\nРегіон: Попаян, Каука\nСорти: катура, кастійо, коломбія\n\nСмакові ноти: пряний кекс, вишневий джем, білий виноград, кунжутна хрустка",
    en: "Process: EA\nRegion: Popayán, Cauca\nStation: Various\nVariety: caturra, castillo, colombia\n\nTasting notes: spice cake, cherry jam, white grape, sesame brittle",
  },
  "shop.ethiopiaGedeb.name": { ua: "CAFEBOUTIQUE Ethiopia Gedeb (espresso)", en: "CAFEBOUTIQUE Ethiopia Gedeb (espresso)" },
  "shop.ethiopiaGedeb.desc": {
    ua: "Обробка: натуральна\nРегіон: Гедеб, Їргачеффе\nСорт: гібриди JARC та місцеві\n\nСмакові ноти: абрикос, малина, лимон, мигдаль, масляне печиво",
    en: "Process: natural\nRegion: Gedeb, Yirgacheffe\nStation: Layodacha\nVariety: JARC hybrids & local\n\nTasting notes: apricot, raspberry, lemon, almond, butter cookie",
  },
  "shop.brazilDivisa.name": { ua: "CAFEBOUTIQUE Brazil Divisa (espresso)", en: "CAFEBOUTIQUE Brazil Divisa (espresso)" },
  "shop.brazilDivisa.desc": {
    ua: "Обробка: натуральна\nРегіон: Карму-ді-Мінас\nСтанція: Divisa\nСорт: жовтий бурбон\n\nСмакові ноти: мандарин, бісквіт, молочний шоколад, кеш'ю",
    en: "Process: natural\nRegion: Carmo de Minas\nStation: Divisa\nVariety: yellow bourbon\n\nTasting notes: mandarin, sponge cake, milk chocolate, cashew",
  },
  "shop.peruPiura.name": { ua: "CAFEBOUTIQUE Peru Piura (espresso)", en: "CAFEBOUTIQUE Peru Piura (espresso)" },
  "shop.peruPiura.desc": {
    ua: "Обробка: натуральна\nРегіон: Кахамарка\nСтанція: Aromas del Valle\nСорти: бурбон, катура, типіка\n\nСмакові ноти: сушене яблуко, стиглий грейпфрут, молочний шоколад, марципан",
    en: "Process: natural\nRegion: Cajamarca\nStation: Aromas del Valle\nVariety: bourbon, caturra, typica\n\nTasting notes: dried apple, ripe grapefruit, milk chocolate, marzipan",
  },
  "shop.kenyaKikuyu.name": { ua: "CAFEBOUTIQUE Kenya Kikuyu (filter)", en: "CAFEBOUTIQUE Kenya Kikuyu (filter)" },
  "shop.kenyaKikuyu.desc": {
    ua: "Обробка: мита\nРегіон: Ньєрі\nСтанція: Various\nСорти: SL-28, SL-34, RUIRU 11\n\nСмакові ноти: печене яблуко, смородина, ревінь",
    en: "Process: washed\nRegion: Nyeri\nStation: Various\nVariety: SL-28, SL-34, RUIRU 11\n\nTasting notes: baked apple, redcurrant, rhubarb",
  },
  "shop.peruSantaRosa.name": { ua: "CAFEBOUTIQUE Peru Santa Rosa", en: "CAFEBOUTIQUE Peru Santa Rosa" },
  "shop.peruSantaRosa.desc": {
    ua: "Обробка: натуральна\nРегіон: Уябаль, Кахамарка\nСтанція: Santa Rosa\nСорт: марсельєза\n\nСмакові ноти: лимонад, зефір, яблучно-сливова пастила, какао-крупа",
    en: "Process: natural\nRegion: Uyabal, Cajamarca\nStation: Santa Rosa\nVariety: marsellesa\n\nTasting notes: lemonade, marshmallow, apple-plum fruit leather, cacao nibs",
  },
  "shop.matchaCoconut.name": { ua: "Кокосовий матча-латте", en: "Coconut matcha latte" },
  "shop.matchaCoconut.desc": {
    ua: "Справжній матча-латте з кокосом удома за 1 хвилину. Зручний формат — беріть в офіс або в подорож і заварюйте де завгодно.\n\nПриготовано з якісної японської матчі, кокосових вершків сублімації та з ноткою стевії. Просто залийте водою та збийте до ідеальної пінки.",
    en: "Real matcha latte with coconut at home in 1 minute. A convenient format to take to the office or on a trip and brew anywhere.\n\nMade with high-quality Japanese matcha, freeze-dried coconut cream and a touch of stevia. Easy to prepare — just pour water over it and whisk to a perfect froth.",
  },
  "shop.matchaCbd.name": { ua: "Кокосовий CBD матча-латте", en: "Coconut CBD matcha latte" },
  "shop.matchaCbd.desc": {
    ua: "Справжній матча-латте з кокосом удома за 1 хвилину. До того ж заспокійливий! Порція CBD, преміальна матча та ніжні кокосові вершки.\n\nЛегко приготувати — залийте водою та збийте. CBD допомагає розслабитися та сфокусуватися, а органічна матча дає природну енергію.",
    en: "Real matcha latte with coconut at home in 1 minute. Calming, too! A blend of a dose of CBD, premium matcha and gentle coconut cream.\n\nEasy to prepare — just pour water over it and whisk. CBD helps you relax and focus, while organic matcha gives you natural energy.",
  },
  "shop.matchaCollagen.name": { ua: "Кокосовий колагеновий матча-латте", en: "Coconut collagen matcha latte" },
  "shop.matchaCollagen.desc": {
    ua: "Ваш улюблений матча-латте, тепер із колагеном від Perla. Напій, який підтримує сяйво молодості та пружність шкіри. Приготовано з церемоніальної матчі та морського колагену.\n\nТак просто — додайте води та перемішайте або збийте піну фрокером.",
    en: "Your favourite matcha latte, now with collagen from Perla. A drink that boosts youthful glow and adds firmness to skin. Made with ceremonial matcha and marine collagen.\n\nSo easy to make — just add water and stir, or use a frother for a creamy foam.",
  },

  /* ── privacy policy ── */
  "legal.privacyTitle": { ua: "Політика конфіденційності", en: "Privacy Policy" },
  "legal.termsTitle": { ua: "Умови користування", en: "Terms of Service" },
  "legal.updated": { ua: "Оновлено:", en: "Last updated:" },
  "legal.home": { ua: "На головну", en: "Back to home" },
};

export function translate(lang: Locale, key: string): string {
  const entry = dict[key];
  if (!entry) return key;
  return entry[lang];
}