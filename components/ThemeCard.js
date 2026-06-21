import Link from "next/link";
import * as Icons from "lucide-react";
import { accentFor } from "@/lib/theme-colors";
import { getPostsByTheme } from "@/lib/utils";

export default function ThemeCard({ theme }) {
  const accent = accentFor(theme.accent);
  const Icon = Icons[theme.icon] || Icons.Compass;
  const count = getPostsByTheme(theme.slug).length;

  return (
    <Link
      href={`/themes/${theme.slug}`}
      className="group flex flex-col overflow-hidden rounded-[var(--radius-card)] border border-navy/10 bg-white/60 transition-shadow hover:shadow-lg"
    >
      <div className={`flex h-28 items-center justify-center ${accent.bg}`}>
        <Icon className={`h-9 w-9 ${accent.text}`} strokeWidth={1.5} />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="font-display text-lg leading-snug text-ink transition-colors group-hover:text-terracotta">
          {theme.title}
        </h3>
        <p className="flex-1 font-body text-sm text-ink-soft">
          {theme.description}
        </p>
        <span className="font-body text-xs font-semibold uppercase tracking-wide text-terracotta">
          {count > 0 ? `${count} ${count === 1 ? "post" : "posts"}` : "Coming soon"}
        </span>
      </div>
    </Link>
  );
}
