// Maps a theme/post `accent` key to Tailwind classes built from the palette
// tokens in app/globals.css. Add a new key here if you introduce a new
// accent color for a future theme.

export const ACCENTS = {
  navy: { bg: "bg-navy", text: "text-cream", soft: "bg-navy/10", ring: "ring-navy" },
  skyDeep: { bg: "bg-sky-deep", text: "text-cream", soft: "bg-sky-deep/10", ring: "ring-sky-deep" },
  rust: { bg: "bg-rust", text: "text-cream", soft: "bg-rust/10", ring: "ring-rust" },
  periwinkle: { bg: "bg-periwinkle", text: "text-navy", soft: "bg-periwinkle/15", ring: "ring-periwinkle" },
  terracotta: { bg: "bg-terracotta", text: "text-cream", soft: "bg-terracotta/10", ring: "ring-terracotta" },
  caramel: { bg: "bg-caramel", text: "text-cream", soft: "bg-caramel/10", ring: "ring-caramel" },
};

export function accentFor(key) {
  return ACCENTS[key] || ACCENTS.navy;
}

// Soft, vivid pastel chips — used for the small theme tag shown on post cards.
// More saturated than ACCENTS.soft so the theme name stays legible at a glance.
export const PASTELS = {
  navy: { bg: "bg-periwinkle/50", text: "text-navy" },
  skyDeep: { bg: "bg-sky/35", text: "text-sky-deep" },
  rust: { bg: "bg-tan/60", text: "text-rust" },
  periwinkle: { bg: "bg-periwinkle/35", text: "text-navy" },
  terracotta: { bg: "bg-coral/40", text: "text-terracotta" },
  caramel: { bg: "bg-tan/55", text: "text-caramel" },
};

export function pastelFor(key) {
  return PASTELS[key] || PASTELS.navy;
}
