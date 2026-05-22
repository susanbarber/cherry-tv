"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import type { Category, Release } from "@/lib/types";
import { CATEGORY_CONFIG, CATEGORIES } from "@/lib/types";
import CategoryView from "./CategoryView";

interface Props {
  category: Category;
}

const REFRESH_MS = 10 * 60 * 1000;

export default function CategoryPageShell({ category }: Props) {
  const [releases, setReleases] = useState<Release[]>([]);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const config = CATEGORY_CONFIG[category];

  const fetchReleases = useCallback(async () => {
    try {
      const res = await fetch(`/api/releases?category=${encodeURIComponent(category)}`);
      const data: Release[] = await res.json();
      setReleases(data);
      setLastUpdated(new Date());
    } catch (e) {
      console.error("Failed to fetch", e);
    }
  }, [category]);

  useEffect(() => {
    fetchReleases();
    const id = setInterval(fetchReleases, REFRESH_MS);
    return () => clearInterval(id);
  }, [fetchReleases]);

  return (
    <div className="min-h-screen bg-cherry-black text-white flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-4 border-b border-white/10 shrink-0">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-1.5 text-white/40 hover:text-white text-xs transition-colors"
          >
            ← TV Mode
          </Link>
          <div className="w-px h-4 bg-white/20" />
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full bg-cherry-red flex items-center justify-center text-white font-black text-[10px]">
              CC
            </div>
            <p className="text-cherry-red font-black text-base tracking-tight leading-none">
              Cherry Collectables
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {lastUpdated && (
            <span className="text-white/30 text-xs">
              Updated{" "}
              {lastUpdated.toLocaleTimeString("en-AU", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
          )}
          <span className="text-white/30 text-xs">
            Powered by{" "}
            <span className="text-waxstat-teal font-semibold">Waxstat</span>
          </span>
        </div>
      </header>

      {/* Other categories quick-nav */}
      <nav className="flex items-center gap-1 px-8 py-3 border-b border-white/5 overflow-x-auto shrink-0">
        {CATEGORIES.filter((c) => c !== category).map((cat) => {
          const cfg = CATEGORY_CONFIG[cat];
          return (
            <Link
              key={cat}
              href={`/${cfg.slug}`}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all"
              style={{
                background: "rgba(255,255,255,0.05)",
                color: "rgba(255,255,255,0.5)",
              }}
            >
              <span>{cfg.emoji}</span>
              <span>{cat}</span>
            </Link>
          );
        })}
      </nav>

      {/* Content */}
      <div className="flex-1 flex flex-col">
        <CategoryView category={category} releases={releases} />
      </div>

      {/* Footer */}
      <footer className="shrink-0 border-t border-white/5 px-8 py-3">
        <p className="text-white/20 text-xs">
          Prices shown in AUD. Auto-refreshes every 10 min.
        </p>
      </footer>
    </div>
  );
}
