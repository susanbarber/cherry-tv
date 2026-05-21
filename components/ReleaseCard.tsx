"use client";

import type { Release } from "@/lib/types";
import PriceChart from "./PriceChart";

const BRAND_COLORS: Record<string, string> = {
  Topps: "#1a73e8",
  Panini: "#e8961a",
  "Upper Deck": "#6b21a8",
  Pokemon: "#f59e0b",
};

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-AU", { weekday: "short", month: "short", day: "numeric" });
}

function savings(market: number, cherry: number) {
  return ((market - cherry) / market) * 100;
}

interface Props {
  release: Release;
}

export default function ReleaseCard({ release }: Props) {
  const brandColor = BRAND_COLORS[release.brand] ?? "#71D8A7";
  const pct = savings(release.marketAverage, release.cherryPrice);
  const isToday = release.releaseDate === new Date().toISOString().split("T")[0];

  return (
    <div
      className="relative flex flex-col justify-between rounded-2xl p-5 border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden"
      style={{ borderTop: `3px solid ${brandColor}` }}
    >
      {release.isNew && (
        <span className="absolute top-3 right-3 text-[10px] font-bold bg-cherry-red text-white px-2 py-0.5 rounded-full uppercase tracking-wide">
          New
        </span>
      )}

      <div>
        <div
          className="inline-block text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded mb-2"
          style={{ background: brandColor + "22", color: brandColor }}
        >
          {release.brand}
        </div>

        <h2 className="text-white font-semibold text-sm leading-snug mb-1">{release.name}</h2>
        <p className="text-white/50 text-xs">{release.sport}</p>
      </div>

      <div className="mt-4">
        <div className="flex items-center justify-between mb-1">
          <span className="text-white/40 text-xs">Release</span>
          <span className={`text-xs font-semibold ${isToday ? "text-cherry-gold" : "text-white/70"}`}>
            {isToday ? "TODAY" : formatDate(release.releaseDate)}
          </span>
        </div>

        <div className="flex items-end justify-between gap-4 mt-3">
          <div>
            <p className="text-white/40 text-[10px] uppercase tracking-wide mb-0.5">Market avg</p>
            <p className="text-white/60 text-sm line-through">${release.marketAverage.toFixed(2)}</p>
            <p className="text-cherry-gold text-lg font-bold leading-none">
              ${release.cherryPrice.toFixed(2)}
            </p>
            {pct > 0 && (
              <p className="text-waxstat-teal text-[10px] font-semibold mt-0.5">
                Save {pct.toFixed(0)}%
              </p>
            )}
          </div>
          <PriceChart data={release.priceHistory} color="#71D8A7" />
        </div>
      </div>
    </div>
  );
}
