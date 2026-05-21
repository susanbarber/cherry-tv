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

// Source: waxstat.com — week of May 17–23 2026 + upcoming releases
export const mockReleases: Release[] = [
  {
    id: "1",
    name: "2026 Bowman Baseball Hobby Box",
    brand: "Topps",
    sport: "Baseball",
    releaseDate: daysFromNow(0),
    marketAverage: 339.95,
    cherryPrice: 299.95,
    priceHistory: priceHistory(339.95),
    isNew: true,
  },
  {
    id: "2",
    name: "2025-26 Panini Select EuroLeague Basketball Hobby Box",
    brand: "Panini",
    sport: "Basketball",
    releaseDate: daysFromNow(-1),
    marketAverage: 124.98,
    cherryPrice: 109.95,
    priceHistory: priceHistory(124.98),
    isNew: true,
  },
  {
    id: "3",
    name: "2025-26 Upper Deck O-Pee-Chee Platinum Hockey Hobby Box",
    brand: "Upper Deck",
    sport: "Hockey",
    releaseDate: daysFromNow(-1),
    marketAverage: 387.45,
    cherryPrice: 349.95,
    priceHistory: priceHistory(387.45),
    isNew: true,
  },
  {
    id: "4",
    name: "Pokemon Mega Evolution Chaos Rising Booster Box",
    brand: "Pokemon",
    sport: "Pokemon TCG",
    releaseDate: daysFromNow(1),
    marketAverage: 249.95,
    cherryPrice: 224.95,
    priceHistory: priceHistory(249.95),
  },
  {
    id: "5",
    name: "2026 Pro Set Metal Baseball Hobby Box",
    brand: "Leaf",
    sport: "Baseball",
    releaseDate: daysFromNow(1),
    marketAverage: 168.0,
    cherryPrice: 149.95,
    priceHistory: priceHistory(168.0),
  },
  {
    id: "6",
    name: "2026 Historic Autographs Retrograph 4 Baseball Hobby Box",
    brand: "Leaf",
    sport: "Baseball",
    releaseDate: daysFromNow(0),
    marketAverage: 179.95,
    cherryPrice: 159.95,
    priceHistory: priceHistory(179.95),
  },
  {
    id: "7",
    name: "2026 Panini Donruss Baseball Hobby Box",
    brand: "Panini",
    sport: "Baseball",
    releaseDate: daysFromNow(6),
    marketAverage: 199.95,
    cherryPrice: 179.95,
    priceHistory: priceHistory(199.95),
  },
  {
    id: "8",
    name: "2026 Bowman Baseball Mega Box",
    brand: "Topps",
    sport: "Baseball",
    releaseDate: daysFromNow(6),
    marketAverage: 68.7,
    cherryPrice: 59.95,
    priceHistory: priceHistory(68.7),
  },
  {
    id: "9",
    name: "2025-26 Upper Deck O-Pee-Chee Platinum Hockey Hobby 8-Box Case",
    brand: "Upper Deck",
    sport: "Hockey",
    releaseDate: daysFromNow(-1),
    marketAverage: 3199.95,
    cherryPrice: 2899.95,
    priceHistory: priceHistory(3199.95),
  },
  {
    id: "10",
    name: "2026 Upper Deck Rush of Ikorr Luminary Strike Booster Box",
    brand: "Upper Deck",
    sport: "TCG",
    releaseDate: daysFromNow(-1),
    marketAverage: 89.95,
    cherryPrice: 79.95,
    priceHistory: priceHistory(89.95),
  },
];
