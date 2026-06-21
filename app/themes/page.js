import { themes } from "@/data/themes";
import ThemeCard from "@/components/ThemeCard";

export const metadata = {
  title: "Themes - Finding Sisu",
  description: "Browse Finding Sisu by theme - first impressions, identity, work, food, and more.",
};

export default function ThemesPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
        Browse by
      </p>
      <h1 className="mt-2 font-display text-4xl text-ink sm:text-5xl">
        All themes
      </h1>
      <p className="mt-4 max-w-xl font-body text-base text-ink-soft">
        Every story on Finding Sisu sits inside one of these themes. Pick the
        one that matches what you&apos;re curious about.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {themes.map((theme) => (
          <ThemeCard key={theme.slug} theme={theme} />
        ))}
      </div>
    </div>
  );
}
