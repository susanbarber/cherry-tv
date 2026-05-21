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
// Images sourced from blowoutcards.com, pokemontcg.com, upperdeckstore.com, diamondcardsonline.com
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
    imageUrl:
      "https://www.blowoutcards.com/media/catalog/product/cache/1/image/750x750/5cc9b2084ebab6842194ad7353fd680e/2/6/26bwbb_1.jpg",
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
    imageUrl:
      "https://www.blowoutcards.com/media/catalog/product/cache/1/image/750x750/5cc9b2084ebab6842194ad7353fd680e/2/5/25udopeecheeplathk_1.jpg",
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
    imageUrl:
      "https://d1i787aglh9bmb.cloudfront.net/assets/img/me-expansions/me04/collections/en-us/me04-booster-display-en.png",
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
    imageUrl:
      "https://bleeckertrading.com/cdn/shop/files/Screenshot2026-04-17160023.png?v=1776456033&width=641",
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
    imageUrl:
      "https://cdn11.bigcommerce.com/s-a0ebd/images/stencil/original/products/8885/23008/2026-panini-donruss-baseball-hobby-box__14263.1775682785.jpg?c=2",
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
    imageUrl:
      "https://www.blowoutcards.com/media/catalog/product/cache/1/image/750x750/5cc9b2084ebab6842194ad7353fd680e/2/6/26bwbbmega_1.jpg",
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
    imageUrl:
      "https://www.blowoutcards.com/media/catalog/product/cache/1/image/750x750/5cc9b2084ebab6842194ad7353fd680e/2/5/25udopeecheeplathk_1.jpg",
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
    imageUrl:
      "https://upperdeckstore.com/media/catalog/product/r/u/rush_of_ikorr_booster_box.jpg?optimize=high&fit=bounds&height=570&width=570&canvas=570:570",
  },
];
