import Link from "next/link";
import Image from "next/image";
import { formatBadge, getExcerpt, getThemeBySlug } from "@/lib/utils";
import { accentFor, pastelFor } from "@/lib/theme-colors";
import PlaceholderImage from "./PlaceholderImage";

export default function PostCard({ post, index = 0 }) {
  const badge = formatBadge(post.date);
  const theme = getThemeBySlug(post.theme);
  const accent = accentFor(theme?.accent);
  const pastel = pastelFor(theme?.accent);

  return (
    <Link href={`/blog/${post.slug}`} className="group flex flex-col">
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[var(--radius-card)]">
        {post.cover ? (
          <Image
            src={post.cover}
            alt={post.title}
            fill
            sizes="(max-width: 640px) 90vw, 320px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <PlaceholderImage
            seed={index}
            label={theme?.title}
            className="h-full w-full transition-transform duration-500 group-hover:scale-105"
          />
        )}
        <div
          className={`absolute right-3 top-3 flex h-14 w-14 flex-col items-center justify-center rounded-full shadow-md ${accent.bg} ${accent.text}`}
        >
          <span className="font-display text-base font-semibold leading-none">
            {badge.day}
          </span>
          <span className="mt-0.5 text-[10px] font-medium uppercase leading-none tracking-wide">
            {badge.month}
          </span>
        </div>
      </div>

      <h3 className="mt-4 font-bold font-display text-lg leading-snug text-ink transition-colors group-hover:text-terracotta">
        {post.title}
      </h3>
      {theme ? (
        <span
          className={`mt-2 inline-flex w-fit items-center rounded-full px-2.5 py-1 font-body text-[11px] font-semibold uppercase tracking-wide ${pastel.bg} ${pastel.text}`}
        >
          {theme.tag || theme.title}
        </span>
      ) : null}
      <p className="mt-2 line-clamp-3 font-body text-sm text-ink-soft">
        {getExcerpt(post.content, 120)}
      </p>
      <span className="mt-2 font-body text-sm font-semibold text-terracotta">
        Read more…
      </span>
    </Link>
  );
}
