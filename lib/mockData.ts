import type { Release } from "./types";

function priceHistory(base: number, days = 7): { date: string; price: number }[] {
  return Array.from({ length: days }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (days - 1 - i));
    return {
      date: d.toISOString().split("T")[0],
      price: parseFloat((base + (Math.random() - 0.5) * base * 0.15).toFixed(2)),
    };
  });
}

const today = new Date();
function daysFromNow(n: number) {
  const d = new Date(today);
  d.setDate(d.getDate() + n);
  return d.toISOString().split("T")[0];
}

export const mockReleases: Release[] = [
  {
    id: "1",
    name: "2024-25 Topps Chrome Soccer",
    brand: "Topps",
    sport: "Soccer",
    releaseDate: daysFromNow(0),
    marketAverage: 189.99,
    cherryPrice: 174.99,
    priceHistory: priceHistory(185),
    isNew: true,
  },
  {
    id: "2",
    name: "2024-25 Panini Prizm Basketball",
    brand: "Panini",
    sport: "Basketball",
    releaseDate: daysFromNow(1),
    marketAverage: 219.95,
    cherryPrice: 199.95,
    priceHistory: priceHistory(215),
  },
  {
    id: "3",
    name: "2024 Topps Series 2 Baseball",
    brand: "Topps",
    sport: "Baseball",
    releaseDate: daysFromNow(2),
    marketAverage: 149.0,
    cherryPrice: 139.0,
    priceHistory: priceHistory(145),
  },
  {
    id: "4",
    name: "2024-25 Upper Deck Hockey Series 1",
    brand: "Upper Deck",
    sport: "Hockey",
    releaseDate: daysFromNow(2),
    marketAverage: 99.99,
    cherryPrice: 92.99,
    priceHistory: priceHistory(97),
  },
  {
    id: "5",
    name: "Pokemon Scarlet & Violet 151",
    brand: "Pokemon",
    sport: "Pokemon",
    releaseDate: daysFromNow(3),
    marketAverage: 64.95,
    cherryPrice: 59.95,
    priceHistory: priceHistory(62),
  },
  {
    id: "6",
    name: "2024-25 Panini Select Basketball",
    brand: "Panini",
    sport: "Basketball",
    releaseDate: daysFromNow(4),
    marketAverage: 175.0,
    cherryPrice: 159.0,
    priceHistory: priceHistory(170),
  },
  {
    id: "7",
    name: "2024 Topps Chrome Baseball",
    brand: "Topps",
    sport: "Baseball",
    releaseDate: daysFromNow(5),
    marketAverage: 234.0,
    cherryPrice: 214.0,
    priceHistory: priceHistory(229),
  },
  {
    id: "8",
    name: "Pokemon Temporal Forces",
    brand: "Pokemon",
    sport: "Pokemon",
    releaseDate: daysFromNow(6),
    marketAverage: 44.95,
    cherryPrice: 39.95,
    priceHistory: priceHistory(43),
  },
];
