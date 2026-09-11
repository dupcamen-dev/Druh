import data from "@/data-menu.json";
export type OptionItem = { name: string; price: number; weight: string | null };
export type OptionsGroup = { name: string; items: OptionItem[] };
export type Dish = {
  id: string;
  name: string;
  price: number;
  weight: string | null;
  kcal: number | null;
  description: string | null;
  image: string | null;
  tags: string[];
  optionsGroups: OptionsGroup[];
  section: string;
  sectionName: string;
  category: string | null;
};
export type MenuData = { generatedAt: string; totalDishes: number; sections: unknown[]; dishes: Dish[] };
export const menu: Dish[] = (data as unknown as MenuData).dishes;

export function dishesBySection(slug: string): Dish[] {
  return menu.filter((d) => d.section === slug);
}

export function featuredDishes(): Dish[] {
  const picks = [
    "Морквяні панкейки",
    "Рамен з морепродуктами",
    "Рамен з куркою кацу",
    "Сінабон зі сливами",
    "Матча-тірамісу з малиною",
    "Бургер з копченою яловичиною",
  ];
  return picks.map((n) => menu.find((d) => d.name === n)!).filter(Boolean);
}
