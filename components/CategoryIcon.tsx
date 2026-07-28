import type { Category } from "@/lib/types";
import { CATEGORY_CONFIG } from "@/lib/types";

function MagicTheGatheringIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 20 22"
      width={size}
      height={size}
      aria-label="Magic: The Gathering"
      style={{ display: "inline-block", flexShrink: 0 }}
    >
      <defs>
        <linearGradient id="mtg-spark" x1="0.5" y1="0" x2="0.5" y2="1">
          <stop offset="0%"   stopColor="#ffaa00" />
          <stop offset="25%"  stopColor="#ff5500" />
          <stop offset="65%"  stopColor="#ee2200" />
          <stop offset="100%" stopColor="#cc1100" />
        </linearGradient>
      </defs>
      {/* Planeswalker spark symbol — five-spiked crown tapering to downward point */}
      <path
        fill="url(#mtg-spark)"
        d="
          M 10 21.5
          C 12.5 18.5 16 13.5 17.2 9.5
          C 17.5 8.2 17.8 7.8 17.5 7
          C 17 8 16 9 15.5 9.5
          C 15 9.8 14.5 9.5 14.2 9
          C 14 8.2 13.8 6 13.5 4
          C 13.2 6.5 13 9 12 9.5
          C 11.5 9.8 11 9.5 10.8 9
          C 10.5 7.5 10.2 3 10 1
          C 9.8 3 9.5 7.5 9.2 9
          C 9 9.5 8.5 9.8 8 9.5
          C 7 9 6.8 6.5 6.5 4
          C 6.2 6 6 8.2 5.8 9
          C 5.5 9.5 5 9.8 4.5 9.5
          C 4 9 3 8 2.5 7
          C 2.2 7.8 2.5 8.2 2.8 9.5
          C 4 13.5 7.5 18.5 10 21.5
          Z
        "
      />
    </svg>
  );
}

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

function OnePieceJollyRoger({ size = 14 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 20 20"
      width={size}
      height={size}
      aria-label="One Piece Jolly Roger"
      style={{ display: "inline-block", flexShrink: 0 }}
    >
      {/* Crossbones */}
      <line x1="2" y1="18" x2="18" y2="12" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="2"  cy="18" r="1.4" fill="white" />
      <circle cx="18" cy="12" r="1.4" fill="white" />
      <line x1="2" y1="12" x2="18" y2="18" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="2"  cy="12" r="1.4" fill="white" />
      <circle cx="18" cy="18" r="1.4" fill="white" />

      {/* Skull */}
      <circle cx="10" cy="14" r="5" fill="white" />
      {/* Eyes */}
      <circle cx="7.8" cy="13.2" r="1.3" fill="#111" />
      <circle cx="12.2" cy="13.2" r="1.3" fill="#111" />
      {/* Nose */}
      <path d="M9.5 15.4 L10 16.3 L10.5 15.4 Z" fill="#111" />

      {/* Straw hat brim */}
      <ellipse cx="10" cy="9.8" rx="7.8" ry="1.7" fill="#d4940a" />
      {/* Hat dome */}
      <path d="M6.2 9.8 Q6.8 5.2 10 5.2 Q13.2 5.2 13.8 9.8 Z" fill="#d4940a" />
      {/* Hat band */}
      <path d="M6.5 8.6 Q10 7.4 13.5 8.6" stroke="#9a6a00" strokeWidth="0.9" fill="none" />
    </svg>
  );
}

interface Props {
  category: Category;
  size?: number;
}

export default function CategoryIcon({ category, size = 14 }: Props) {
  if (category === "Pokémon") return <PokeBall size={size} />;
  if (category === "One Piece") return <OnePieceJollyRoger size={size} />;
  if (category === "Magic the Gathering") return <MagicTheGatheringIcon size={size} />;
  return <span>{CATEGORY_CONFIG[category].emoji}</span>;
}
