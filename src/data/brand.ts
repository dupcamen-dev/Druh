export const BRAND = {
  name: "DRUH",
  nameUk: "ДРУГ",
  tagline: "Where every guest is a friend",
  taglineUk: "Кафе, в якому ти не просто гість, а справжній друг",
  address: "vul. 15-ho Kvitnia 2, Ternopil",
  addressFull: "вул. 15-го Квітня 2м, Тернопіль",
  phone: "+380 97 450 77 15",
  phoneLink: "+380974507715",
  hours: {
    weekdays: "09:00 – 21:00",
    weekends: "10:00 – 21:00",
  },
  socials: {
    instagram: "https://instagram.com/druh.cafe",
    telegram: "https://t.me/druhk15",
    facebook: "https://facebook.com/druh.cafe",
  },
  colors: {
    terracotta: "#DD5C36",
    peach: "#EFB5A3",
    rust: "#943619",
    ink: "#111111",
    cream: "#FDFAF7",
  },
} as const;

export const SECTIONS = [
  { slug: "snidanki-ves-den", name: "Breakfast all day", icon: "🍳", description: "Fluffy, golden, ready whenever you wake up." },
  { slug: "salati-ta-zakuski", name: "Salads & starters", icon: "🥗", description: "Fresh bites to start the meal." },
  { slug: "pershi-stravi", name: "Soups", icon: "🍲", description: "Warm bowls for every season." },
  { slug: "osnovni-stravi", name: "Main courses", icon: "🍽", description: "Hearty and full of flavour." },
  { slug: "bouli-do-18-00", name: "Bowls", icon: "🥙", description: "Packed bowls, served until 6 PM." },
  { slug: "rameni-ta-burgeri", name: "Ramen & burgers", icon: "🍜", description: "Japanese broth meets homemade buns." },
  { slug: "yakitori-gril-z-18-00", name: "Yakitori grill", icon: "🔥", description: "Charcoal-grilled skewers from 6 PM." },
  { slug: "deserti", name: "Desserts", icon: "🍰", description: "Sweet finishes and homemade pastries." },
  { slug: "napoyi", name: "Drinks", icon: "☕", description: "Coffee, matcha, teas, and more." },
  { slug: "kokteyli", name: "Cocktails", icon: "🍸", description: "Alcoholic and non-alcoholic cocktails." },
  { slug: "alkogol", name: "Alcohol", icon: "🍺", description: "Beer, wine and spirits." },
  { slug: "kramnichka", name: "Little shop", icon: "🛒", description: "Take a piece of Druh home." },
] as const;

export type SectionSlug = (typeof SECTIONS)[number]["slug"];
