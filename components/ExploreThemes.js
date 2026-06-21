import { themes } from "@/data/themes";
import ThemeCard from "./ThemeCard";

export default function ExploreThemes() {
  return (
    <section className="bg-cream-deep py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
          Browse by
        </p>
        <h2 className="mt-2 font-display text-3xl text-ink sm:text-4xl">
          Explore themes
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {themes.map((theme) => (
            <ThemeCard key={theme.slug} theme={theme} />
          ))}
        </div>
      </div>
    </section>
  );
}
