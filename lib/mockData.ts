import type { Release } from "./types";

function priceHistory(base: number, days = 7): { date: string; price: number }[] {
  return Array.from({ length: days }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (days - 1 - i));
    return {
      date: d.toISOString().split("T")[0],
      price: parseFloat((base + (Math.random() - 0.5) * base * 0.12).toFixed(2)),
    };
  });
}

function daysFromNow(n: number) {
  const d = new Date();
  d.setDate(d.getDate() + n);
  return d.toISOString().split("T")[0];
}

// Source: waxstat.com release calendars — real product names & prices
export const mockReleases: Release[] = [

  // ─── BASKETBALL ──────────────────────────────────────────────────────────────
  {
    id: "bk1",
    name: "2025-26 Topps NBA Hoops Basketball Hobby Box",
    brand: "Topps",
    category: "Basketball",
    releaseDate: daysFromNow(-8),
    marketAverage: 347.45,
    cherryPrice: 309.95,
    priceHistory: priceHistory(347.45),
    imageUrl:
      "https://www.blowoutcards.com/media/catalog/product/cache/1/image/750x750/5cc9b2084ebab6842194ad7353fd680e/2/5/25toppshoopshbbk_1.jpg",
  },
  {
    id: "bk2",
    name: "2025-26 Panini Select EuroLeague Basketball Hobby Box",
    brand: "Panini",
    category: "Basketball",
    releaseDate: daysFromNow(-2),
    marketAverage: 126.63,
    cherryPrice: 109.95,
    priceHistory: priceHistory(126.63),
    isNew: true,
  },
  {
    id: "bk3",
    name: "2025-26 Panini Donruss Basketball Hobby Box",
    brand: "Panini",
    category: "Basketball",
    releaseDate: daysFromNow(14),
    marketAverage: 299.95,
    cherryPrice: 269.95,
    priceHistory: priceHistory(299.95),
  },
  {
    id: "bk4",
    name: "2025-26 Panini Noir Basketball Hobby Box",
    brand: "Panini",
    category: "Basketball",
    releaseDate: daysFromNow(19),
    marketAverage: 849.95,
    cherryPrice: 749.95,
    priceHistory: priceHistory(849.95),
  },

  // ─── SOCCER ──────────────────────────────────────────────────────────────────
  {
    id: "sc1",
    name: "2025 Topps Decades UEFA Club Competitions Soccer Hobby Box",
    brand: "Topps",
    category: "Soccer",
    releaseDate: daysFromNow(-16),
    marketAverage: 149.95,
    cherryPrice: 134.95,
    priceHistory: priceHistory(149.95),
  },
  {
    id: "sc2",
    name: "2025 Topps Decades Soccer Hobby Box",
    brand: "Topps",
    category: "Soccer",
    releaseDate: daysFromNow(27),
    marketAverage: 129.95,
    cherryPrice: 114.95,
    priceHistory: priceHistory(129.95),
  },
  {
    id: "sc3",
    name: "2025 Panini Prizm K League Soccer Hobby Box",
    brand: "Panini",
    category: "Soccer",
    releaseDate: daysFromNow(46),
    marketAverage: 63.50,
    cherryPrice: 57.95,
    priceHistory: priceHistory(63.50),
  },
  {
    id: "sc4",
    name: "2025 Futera Incredible Collection Soccer Box",
    brand: "Futera",
    category: "Soccer",
    releaseDate: daysFromNow(-43),
    marketAverage: 399.95,
    cherryPrice: 359.95,
    priceHistory: priceHistory(399.95),
  },

  // ─── FOOTBALL ────────────────────────────────────────────────────────────────
  {
    id: "fo1",
    name: "2025 Panini Select Football Mega Box",
    brand: "Panini",
    category: "Football",
    releaseDate: daysFromNow(-3),
    marketAverage: 49.95,
    cherryPrice: 44.95,
    priceHistory: priceHistory(49.95),
    isNew: true,
  },
  {
    id: "fo2",
    name: "2025 Panini Select Football Blaster Box",
    brand: "Panini",
    category: "Football",
    releaseDate: daysFromNow(-3),
    marketAverage: 44.95,
    cherryPrice: 39.95,
    priceHistory: priceHistory(44.95),
    isNew: true,
  },
  {
    id: "fo3",
    name: "2025 Panini National Treasures Football FOTL Hobby Box",
    brand: "Panini",
    category: "Football",
    releaseDate: daysFromNow(14),
    marketAverage: 999.95,
    cherryPrice: 899.95,
    priceHistory: priceHistory(999.95),
  },
  {
    id: "fo4",
    name: "2025 Panini Select Football Hobby Box",
    brand: "Panini",
    category: "Football",
    releaseDate: daysFromNow(28),
    marketAverage: 299.95,
    cherryPrice: 269.95,
    priceHistory: priceHistory(299.95),
  },

  // ─── POKÉMON ─────────────────────────────────────────────────────────────────
  {
    id: "pk1",
    name: "Pokemon Mega Evolution Chaos Rising Booster Box",
    brand: "Pokemon",
    category: "Pokémon",
    releaseDate: daysFromNow(1),
    marketAverage: 249.95,
    cherryPrice: 224.95,
    priceHistory: priceHistory(249.95),
    isNew: true,
    imageUrl:
      "https://d1i787aglh9bmb.cloudfront.net/assets/img/me-expansions/me04/collections/en-us/me04-booster-display-en.png",
  },
  {
    id: "pk2",
    name: "Pokemon Mega Evolution Ascended Heroes Elite Trainer Box",
    brand: "Pokemon",
    category: "Pokémon",
    releaseDate: daysFromNow(-3),
    marketAverage: 218.71,
    cherryPrice: 194.95,
    priceHistory: priceHistory(218.71),
  },
  {
    id: "pk3",
    name: "2026 Pokemon Day Collection Box",
    brand: "Pokemon",
    category: "Pokémon",
    releaseDate: daysFromNow(21),
    marketAverage: 38.95,
    cherryPrice: 34.95,
    priceHistory: priceHistory(38.95),
  },

  // ─── MAGIC THE GATHERING ─────────────────────────────────────────────────────
  {
    id: "mg1",
    name: "Magic the Gathering Lorwyn Eclipsed Bundle Box",
    brand: "Wizards of the Coast",
    category: "Magic the Gathering",
    releaseDate: daysFromNow(-3),
    marketAverage: 59.95,
    cherryPrice: 54.95,
    priceHistory: priceHistory(59.95),
  },
  {
    id: "mg2",
    name: "Magic the Gathering Lorwyn Eclipsed Collector Booster Box",
    brand: "Wizards of the Coast",
    category: "Magic the Gathering",
    releaseDate: daysFromNow(4),
    marketAverage: 419.95,
    cherryPrice: 374.95,
    priceHistory: priceHistory(419.95),
    isNew: true,
  },
  {
    id: "mg3",
    name: "Magic the Gathering Lorwyn Eclipsed Draft Booster Box",
    brand: "Wizards of the Coast",
    category: "Magic the Gathering",
    releaseDate: daysFromNow(4),
    marketAverage: 174.95,
    cherryPrice: 154.95,
    priceHistory: priceHistory(174.95),
    isNew: true,
  },
  {
    id: "mg4",
    name: "Magic the Gathering Lorwyn Eclipsed Collector Booster 6-Box Case",
    brand: "Wizards of the Coast",
    category: "Magic the Gathering",
    releaseDate: daysFromNow(4),
    marketAverage: 2499.95,
    cherryPrice: 2199.95,
    priceHistory: priceHistory(2499.95),
    isNew: true,
  },

  // ─── ONE PIECE ───────────────────────────────────────────────────────────────
  {
    id: "op1",
    name: "One Piece Card Game OP-15 Adventure on KAMI's Island Booster Box",
    brand: "Bandai",
    category: "One Piece",
    releaseDate: daysFromNow(-7),
    marketAverage: 89.95,
    cherryPrice: 79.95,
    priceHistory: priceHistory(89.95),
  },
  {
    id: "op2",
    name: "One Piece Card Game OP-16 The Time of Battle Booster Box",
    brand: "Bandai",
    category: "One Piece",
    releaseDate: daysFromNow(21),
    marketAverage: 99.95,
    cherryPrice: 89.95,
    priceHistory: priceHistory(99.95),
    isNew: true,
  },
  {
    id: "op3",
    name: "One Piece Card Game 3rd Anniversary Set",
    brand: "Bandai",
    category: "One Piece",
    releaseDate: daysFromNow(4),
    marketAverage: 199.95,
    cherryPrice: 179.95,
    priceHistory: priceHistory(199.95),
    isNew: true,
  },
  {
    id: "op4",
    name: "One Piece Card Game ST30 Starter Deck EX — Luffy & Ace",
    brand: "Bandai",
    category: "One Piece",
    releaseDate: daysFromNow(21),
    marketAverage: 24.95,
    cherryPrice: 21.95,
    priceHistory: priceHistory(24.95),
  },
];
