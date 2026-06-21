import { notFound } from "next/navigation";
import * as Icons from "lucide-react";
import { themes } from "@/data/themes";
import { getThemeBySlug, getPostsByTheme } from "@/lib/utils";
import { accentFor } from "@/lib/theme-colors";
import PostCard from "@/components/PostCard";

export function generateStaticParams() {
  return themes.map((theme) => ({ slug: theme.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const theme = getThemeBySlug(slug);
  if (!theme) return {};
  return {
    title: `${theme.title} — Finding Sisu`,
    description: theme.description,
  };
}

export default async function ThemeDetailPage({ params }) {
  const { slug } = await params;
  const theme = getThemeBySlug(slug);
  if (!theme) notFound();

  const posts = getPostsByTheme(theme.slug);
  const accent = accentFor(theme.accent);
  const Icon = Icons[theme.icon] || Icons.Compass;

  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
        <span className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl ${accent.bg}`}>
          <Icon className={`h-8 w-8 ${accent.text}`} strokeWidth={1.5} />
        </span>
        <div>
          <h1 className="font-display text-3xl text-ink sm:text-4xl">
            {theme.title}
          </h1>
          <p className="mt-2 max-w-2xl font-body text-base text-ink-soft">
            {theme.description}
          </p>
        </div>
      </div>

      {posts.length > 0 ? (
        <div className="mt-14 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <PostCard key={post.slug} post={post} index={i} />
          ))}
        </div>
      ) : (
        <div className="mt-14 flex flex-col items-center gap-3 rounded-[var(--radius-card)] border border-dashed border-navy/20 bg-white/40 px-6 py-20 text-center">
          <Icon className="h-8 w-8 text-ink-soft/50" strokeWidth={1.5} />
          <p className="font-display text-xl text-ink">No posts here yet</p>
          <p className="max-w-sm font-body text-sm text-ink-soft">
            Stories for this theme are still being written — check back soon.
          </p>
        </div>
      )}
    </div>
  );
}
