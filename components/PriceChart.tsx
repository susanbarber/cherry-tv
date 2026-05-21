"use client";

import type { PricePoint } from "@/lib/types";

interface Props {
  data: PricePoint[];
  color?: string;
}

export default function PriceChart({ data, color = "#71D8A7" }: Props) {
  if (!data || data.length === 0) return null;

  const width = 120;
  const height = 40;
  const prices = data.map((d) => d.price);
  const min = Math.min(...prices);
  const max = Math.max(...prices);
  const range = max - min || 1;

  const points = data
    .map((d, i) => {
      const x = (i / (data.length - 1)) * width;
      const y = height - ((d.price - min) / range) * (height - 4) - 2;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <svg width={width} height={height} className="overflow-visible">
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}
