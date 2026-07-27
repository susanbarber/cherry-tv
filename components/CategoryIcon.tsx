import type { Category } from "@/lib/types";
import { CATEGORY_CONFIG } from "@/lib/types";

function PokeBall({ size = 14 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 20 20"
      width={size}
      height={size}
      aria-label="Pokéball"
      style={{ display: "inline-block", flexShrink: 0 }}
    >
      <circle cx="10" cy="10" r="9.5" fill="white" />
      <path d="M0.5 10 A9.5 9.5 0 0 1 19.5 10 Z" fill="#e53e3e" />
      <line x1="0.5" y1="10" x2="19.5" y2="10" stroke="#111" strokeWidth="1.5" />
      <circle cx="10" cy="10" r="9.5" fill="none" stroke="#111" strokeWidth="1.5" />
      <circle cx="10" cy="10" r="3.2" fill="white" stroke="#111" strokeWidth="1.5" />
    </svg>
  );
}

interface Props {
  category: Category;
  size?: number;
}

export default function CategoryIcon({ category, size = 14 }: Props) {
  if (category === "Pokémon") return <PokeBall size={size} />;
  return <span>{CATEGORY_CONFIG[category].emoji}</span>;
}
