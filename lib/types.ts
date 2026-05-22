export type Brand =
  | "Topps"
  | "Panini"
  | "Upper Deck"
  | "Pokemon"
  | "Leaf"
  | "Wizards of the Coast"
  | "Bandai"
  | "Futera";

export type Category =
  | "Basketball"
  | "Soccer"
  | "Football"
  | "Pokémon"
  | "Magic the Gathering"
  | "One Piece";

export const CATEGORIES: Category[] = [
  "Basketball",
  "Soccer",
  "Football",
  "Pokémon",
  "Magic the Gathering",
  "One Piece",
];

export const CATEGORY_CONFIG: Record<
  Category,
  { color: string; emoji: string; slug: string }
> = {
  Basketball:              { color: "#f97316", emoji: "🏀", slug: "basketball" },
  Soccer:                  { color: "#22c55e", emoji: "⚽", slug: "soccer" },
  Football:                { color: "#b45309", emoji: "🏈", slug: "football" },
  "Pokémon":               { color: "#eab308", emoji: "⚡", slug: "pokemon" },
  "Magic the Gathering":   { color: "#7c3aed", emoji: "🪄", slug: "magic" },
  "One Piece":             { color: "#0ea5e9", emoji: "⚓", slug: "one-piece" },
};

export interface PricePoint {
  date: string;
  price: number;
}

export interface Release {
  id: string;
  name: string;
  brand: Brand;
  category: Category;
  releaseDate: string; // ISO date string
  marketAverage: number;
  cherryPrice: number;
  priceHistory: PricePoint[];
  imageUrl?: string;
  isNew?: boolean;
}
