import { Camera } from "lucide-react";

const GRADIENTS = [
  "from-sky to-blush",
  "from-blush to-coral",
  "from-terracotta to-tan",
  "from-periwinkle to-sky",
  "from-rose-dust to-coral",
  "from-caramel to-tan",
];

/** A soft gradient placeholder shown until a real photo is added. */
export default function PlaceholderImage({ seed = 0, label, className = "" }) {
  const gradient = GRADIENTS[Math.abs(seed) % GRADIENTS.length];
  return (
    <div
      className={`relative flex flex-col items-center justify-center gap-2 bg-gradient-to-br ${gradient} ${className}`}
    >
      <Camera className="h-7 w-7 text-white/80" strokeWidth={1.5} />
      {label ? (
        <span className="px-4 text-center font-body text-xs font-medium tracking-wide text-white/85">
          {label}
        </span>
      ) : null}
    </div>
  );
}
