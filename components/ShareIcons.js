"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { FacebookIcon, InstagramIcon, LinkedInIcon, XIcon } from "./icons";

const ICON_BASE =
  "flex h-9 w-9 items-center justify-center rounded-full border border-navy/15 text-ink-soft transition-colors hover:border-terracotta hover:text-terracotta";

export default function ShareIcons({ url, title }) {
  const [copied, setCopied] = useState(false);

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
  };

  // Instagram has no web share-intent URL, so we copy the link instead -
  // handy for pasting into a story, bio link, or DM.
  async function handleInstagramClick(e) {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable - fail silently, nothing to share to anyway.
    }
  }

  return (
    <div className="flex items-center gap-3">
      <span className="font-body text-xs font-semibold uppercase tracking-wide text-ink-soft">
        Share
      </span>
      <a
        href={shareLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Facebook"
        className={ICON_BASE}
      >
        <FacebookIcon className="h-4 w-4" />
      </a>
      <a
        href={shareLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on X (Twitter)"
        className={ICON_BASE}
      >
        <XIcon className="h-4 w-4" />
      </a>
      <a
        href={shareLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on LinkedIn"
        className={ICON_BASE}
      >
        <LinkedInIcon className="h-4 w-4" />
      </a>
      <button
        type="button"
        onClick={handleInstagramClick}
        aria-label="Copy link for Instagram"
        title={copied ? "Link copied!" : "Copy link for Instagram"}
        className={ICON_BASE}
      >
        {copied ? <Check className="h-4 w-4 text-terracotta" /> : <InstagramIcon className="h-4 w-4" />}
      </button>
    </div>
  );
}
