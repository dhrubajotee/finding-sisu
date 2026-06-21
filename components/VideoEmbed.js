import { Play, ExternalLink } from "lucide-react";
import { accentFor } from "@/lib/theme-colors";
import { InstagramIcon, YoutubeIcon, FacebookIcon, TikTokIcon } from "./icons";

const PLATFORM_META = {
  instagram: { label: "Watch on Instagram", Icon: InstagramIcon },
  tiktok: { label: "Watch on TikTok", Icon: TikTokIcon },
  youtube: { label: "Watch on YouTube", Icon: YoutubeIcon },
  facebook: { label: "Watch on Facebook", Icon: FacebookIcon },
  other: { label: "Watch the video", Icon: Play },
};

/**
 * Links out to a video already posted elsewhere (Instagram, TikTok, etc.)
 * instead of hosting it directly. Renders nothing if `video` is not set.
 */
export default function VideoEmbed({ video, accent }) {
  if (!video?.url) return null;

  const meta = PLATFORM_META[video.platform] || PLATFORM_META.other;
  const { label, Icon } = meta;
  const styles = accentFor(accent);

  return (
    <a
      href={video.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative my-8 flex items-center gap-4 overflow-hidden rounded-[var(--radius-card)] border border-navy/10 bg-cream-deep p-4 transition-shadow hover:shadow-md sm:p-5"
    >
      <span
        className={`relative flex h-16 w-16 shrink-0 items-center justify-center rounded-xl sm:h-20 sm:w-20 ${styles.bg}`}
      >
        <Play className={`h-7 w-7 ${styles.text}`} fill="currentColor" strokeWidth={0} />
      </span>

      <span className="flex min-w-0 flex-1 flex-col">
        <span className="flex items-center gap-1.5 font-body text-xs font-semibold uppercase tracking-wide text-ink-soft">
          <Icon className="h-3.5 w-3.5" />
          {label}
        </span>
        <span className="mt-1 truncate font-display text-base text-ink">
          {video.caption || "Watch the moment this post is about"}
        </span>
      </span>

      <ExternalLink className="h-4 w-4 shrink-0 text-ink-soft transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
}
