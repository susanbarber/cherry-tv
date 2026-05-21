export type Brand = "Topps" | "Panini" | "Upper Deck" | "Pokemon";

export interface PricePoint {
  date: string;
  price: number;
}

export interface Release {
  id: string;
  name: string;
  brand: Brand;
  releaseDate: string; // ISO date string
  sport: string;
  marketAverage: number;
  cherryPrice: number;
  priceHistory: PricePoint[];
  imageUrl?: string;
  isNew?: boolean;
}
