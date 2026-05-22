"use client";

import { useMemo } from "react";
import type { Category, Release } from "@/lib/types";
import { CATEGORY_CONFIG } from "@/lib/types";
import ReleaseCard from "./ReleaseCard";

interface Props {
  category: Category;
  releases: Release[];
}

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-AU", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });
}

export default function CategoryView({ category, releases }: Props) {
  const config = CATEGORY_CONFIG[category];

  const sorted = useMemo(
    () =>
      [...releases].sort(
        (a, b) => new Date(a.releaseDate).getTime() - new Date(b.releaseDate).getTime()
      ),
    [releases]
  );

  return (
    <div className="flex flex-col flex-1 overflow-hidden">
      {/* Category hero strip */}
      <div
        className="flex items-center gap-4 px-8 py-5"
        style={{ borderBottom: `1px solid ${config.color}33` }}
      >
        <span className="text-5xl leading-none">{config.emoji}</span>
        <div>
          <h1
            className="text-4xl font-black tracking-tight leading-none"
            style={{ color: config.color }}
          >
            {category}
          </h1>
          <p className="text-white/30 text-xs mt-1 uppercase tracking-widest">
            {sorted.length} release{sorted.length !== 1 ? "s" : ""} this season
          </p>
        </div>
      </div>

      {/* Cards grid */}
      <div className="flex-1 px-8 py-6 overflow-auto">
        {sorted.length === 0 ? (
          <div className="flex items-center justify-center h-48">
            <p className="text-white/30 text-sm">No releases scheduled.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
            {sorted.map((release) => (
              <ReleaseCard key={release.id} release={release} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
