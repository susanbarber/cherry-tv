"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import type { Category, Release } from "@/lib/types";
import { CATEGORIES, CATEGORY_CONFIG } from "@/lib/types";
import CategoryView from "./CategoryView";

const CYCLE_DURATION = 60; // seconds
const REFRESH_MS = 10 * 60 * 1000; // 10 minutes

export default function CategoryCarousel() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [progress, setProgress] = useState(0); // 0–60 seconds
  const [allReleases, setAllReleases] = useState<Release[]>([]);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  // Fetch all releases once, refresh every 10 min
  const fetchAll = useCallback(async () => {
    try {
      const res = await fetch("/api/releases");
      const data: Release[] = await res.json();
      setAllReleases(data);
      setLastUpdated(new Date());
    } catch (e) {
      console.error("Failed to fetch releases", e);
    }
  }, []);

  useEffect(() => {
    fetchAll();
    const refresh = setInterval(fetchAll, REFRESH_MS);
    return () => clearInterval(refresh);
  }, [fetchAll]);

  // 60-second category cycle
  useEffect(() => {
    const tick = setInterval(() => {
      setProgress((prev) => {
        if (prev >= CYCLE_DURATION - 1) {
          setCurrentIdx((i) => (i + 1) % CATEGORIES.length);
          return 0;
        }
        return prev + 1;
      });
    }, 1000);
    return () => clearInterval(tick);
  }, []);

  function goTo(idx: number) {
    setCurrentIdx(idx);
    setProgress(0);
  }

  const current: Category = CATEGORIES[currentIdx];
  const config = CATEGORY_CONFIG[current];
  const next: Category = CATEGORIES[(currentIdx + 1) % CATEGORIES.length];
  const nextConfig = CATEGORY_CONFIG[next];
  const pct = (progress / CYCLE_DURATION) * 100;
  const remaining = CYCLE_DURATION - progress;

  const currentReleases = allReleases.filter((r) => r.category === current);

  return (
    <div className="min-h-screen bg-cherry-black text-white flex flex-col">
      {/* ── Header ─────────────────────────────────────────────────────── */}
      <header className="flex items-center justify-between px-8 py-4 border-b border-white/10 shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-cherry-red flex items-center justify-center text-white font-black text-xs shrink-0">
            CC
          </div>
          <div>
            <p className="text-cherry-red font-black text-lg tracking-tight leading-none">
              Cherry Collectables
            </p>
            <p className="text-white/40 text-[10px] tracking-widest uppercase">
              Release TV
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {lastUpdated && (
            <span className="text-white/30 text-xs hidden sm:block">
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

      {/* ── Category tab bar ───────────────────────────────────────────── */}
      <nav className="flex items-center gap-1 px-8 py-3 border-b border-white/5 overflow-x-auto shrink-0">
        {CATEGORIES.map((cat, idx) => {
          const cfg = CATEGORY_CONFIG[cat];
          const isActive = idx === currentIdx;
          return (
            <button
              key={cat}
              onClick={() => goTo(idx)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all"
              style={
                isActive
                  ? {
                      background: cfg.color,
                      color: "#000",
                    }
                  : {
                      background: "rgba(255,255,255,0.05)",
                      color: "rgba(255,255,255,0.5)",
                    }
              }
            >
              <span>{cfg.emoji}</span>
              <span>{cat}</span>
              <Link
                href={`/${cfg.slug}`}
                onClick={(e) => e.stopPropagation()}
                className="ml-1 opacity-50 hover:opacity-100 text-[9px] font-normal underline"
              >
                ↗
              </Link>
            </button>
          );
        })}
      </nav>

      {/* ── Category view ──────────────────────────────────────────────── */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <CategoryView category={current} releases={currentReleases} />
      </div>

      {/* ── Progress footer ────────────────────────────────────────────── */}
      <footer className="shrink-0 border-t border-white/5">
        {/* Progress bar */}
        <div className="relative h-1 bg-white/10">
          <div
            className="absolute top-0 left-0 h-full transition-all duration-1000 ease-linear"
            style={{ width: `${pct}%`, background: config.color }}
          />
        </div>

        {/* Footer text */}
        <div className="flex items-center justify-between px-8 py-2">
          <p className="text-white/20 text-xs">
            Prices shown in AUD. Auto-refreshes every 10 min.
          </p>
          <div className="flex items-center gap-1.5 text-white/40 text-xs">
            <span>Next:</span>
            <span style={{ color: nextConfig.color }}>
              {nextConfig.emoji} {next}
            </span>
            <span className="text-white/20">in {remaining}s</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
