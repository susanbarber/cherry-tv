"use client";

import { useState, useEffect, useCallback } from "react";
import type { Release, Brand } from "@/lib/types";
import ReleaseCard from "./ReleaseCard";

const BRANDS: Brand[] = ["Topps", "Panini", "Upper Deck", "Pokemon", "Leaf"];
const REFRESH_MS = 10 * 60 * 1000; // 10 minutes

export default function Dashboard() {
  const [releases, setReleases] = useState<Release[]>([]);
  const [activeBrands, setActiveBrands] = useState<Set<Brand>>(new Set(BRANDS));
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchReleases = useCallback(async () => {
    try {
      const res = await fetch("/api/releases");
      const data: Release[] = await res.json();
      setReleases(data);
      setLastUpdated(new Date());
    } catch (e) {
      console.error("Failed to fetch releases", e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchReleases();
    const interval = setInterval(fetchReleases, REFRESH_MS);
    return () => clearInterval(interval);
  }, [fetchReleases]);

  function toggleBrand(brand: Brand) {
    setActiveBrands((prev) => {
      const next = new Set(prev);
      if (next.has(brand)) {
        if (next.size === 1) return prev; // keep at least one
        next.delete(brand);
      } else {
        next.add(brand);
      }
      return next;
    });
  }

  const filtered = releases.filter((r) => activeBrands.has(r.brand as Brand));

  return (
    <div className="min-h-screen bg-cherry-black text-white flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-5 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-cherry-red flex items-center justify-center text-white font-black text-xs">
            CC
          </div>
          <div>
            <p className="text-cherry-red font-black text-lg tracking-tight leading-none">
              Cherry Collectables
            </p>
            <p className="text-white/40 text-xs tracking-widest uppercase">Release Calendar</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-white/30 text-xs">
            Powered by{" "}
            <span className="text-waxstat-teal font-semibold">Waxstat</span>
          </span>
          {lastUpdated && (
            <span className="text-white/30 text-xs">
              Updated {lastUpdated.toLocaleTimeString("en-AU", { hour: "2-digit", minute: "2-digit" })}
            </span>
          )}
        </div>
      </header>

      {/* Brand filters */}
      <div className="flex items-center gap-3 px-8 py-4 border-b border-white/5">
        <span className="text-white/30 text-xs uppercase tracking-widest mr-2">Filter</span>
        {BRANDS.map((brand) => (
          <button
            key={brand}
            onClick={() => toggleBrand(brand)}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all ${
              activeBrands.has(brand)
                ? "bg-white text-cherry-black border-transparent"
                : "bg-transparent text-white/40 border-white/20 hover:border-white/50"
            }`}
          >
            {brand}
          </button>
        ))}
      </div>

      {/* Week header */}
      <div className="px-8 py-4">
        <h1 className="text-white/60 text-sm font-medium uppercase tracking-widest">
          This Week&apos;s Releases
        </h1>
      </div>

      {/* Cards grid */}
      <main className="flex-1 px-8 pb-8">
        {loading ? (
          <div className="flex items-center justify-center h-64">
            <div className="w-8 h-8 border-2 border-cherry-red border-t-transparent rounded-full animate-spin" />
          </div>
        ) : filtered.length === 0 ? (
          <p className="text-white/30 text-center mt-20">No releases for the selected brands.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
            {filtered.map((release) => (
              <ReleaseCard key={release.id} release={release} />
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="px-8 py-3 border-t border-white/5 flex items-center justify-between">
        <p className="text-white/20 text-xs">
          Prices shown in AUD. Cherry Collectables pricing sourced live.
        </p>
        <p className="text-white/20 text-xs">Auto-refreshes every 10 min</p>
      </footer>
    </div>
  );
}
