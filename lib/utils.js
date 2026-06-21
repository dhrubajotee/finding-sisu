import { themes } from "@/data/themes";
import { posts } from "@/data/posts";

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];
const MONTHS_LONG = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

/** Parses a YYYY-MM-DD string without timezone surprises. */
function parseDate(dateStr) {
  if (!dateStr) return null;
  const [y, m, d] = dateStr.split("-").map(Number);
  return new Date(y, m - 1, d);
}

/** { day: "17", month: "AUG" } - used for the circular date badges. */
export function formatBadge(dateStr) {
  const date = parseDate(dateStr);
  if (!date) return { day: "--", month: "TBD" };
  return {
    day: String(date.getDate()).padStart(2, "0"),
    month: MONTHS[date.getMonth()].toUpperCase(),
  };
}

/** "17 August 2025" - used on the post detail page. */
export function formatLongDate(dateStr) {
  const date = parseDate(dateStr);
  if (!date) return "Date coming soon";
  return `${date.getDate()} ${MONTHS_LONG[date.getMonth()]} ${date.getFullYear()}`;
}

/** Strips markdown syntax and trims to a clean plain-text excerpt. */
export function getExcerpt(markdown, max = 140) {
  const plain = markdown
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/^>\s?/gm, "")
    .replace(/^[-*]\s+/gm, "")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[*_`]/g, "")
    .replace(/\s+/g, " ")
    .trim();

  if (plain.length <= max) return plain;
  const cut = plain.slice(0, max);
  return cut.slice(0, cut.lastIndexOf(" ")) + "…";
}

export function getThemeBySlug(slug) {
  return themes.find((t) => t.slug === slug) || null;
}

/** Published posts only (date set), newest first. */
export function getPublishedPosts() {
  return posts
    .filter((p) => p.date)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostsByTheme(themeSlug) {
  return getPublishedPosts().filter((p) => p.theme === themeSlug);
}

export function getPostBySlug(slug) {
  return posts.find((p) => p.slug === slug) || null;
}

export function getRecentPosts(count = 4) {
  return getPublishedPosts().slice(0, count);
}
